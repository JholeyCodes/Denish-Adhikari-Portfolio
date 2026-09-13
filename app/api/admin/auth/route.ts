import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendOtpVerificationEmail } from "@/lib/sendEmail";

const ADMIN_SECRET = process.env.ADMIN_PASSWORD || "denish2026!";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "aprajwal9fguy@gmail.com";
const ENGINEER_NAME = "Er. Denish Adhikari";
const SESSION_COOKIE = "denish_admin_session";
const SESSION_SALT = "denish_portfolio_salt_2026";
const OTP_SALT = "denish_otp_secret_salt_2026";

function getExpectedSessionToken(): string {
  return crypto.createHmac("sha256", SESSION_SALT).update(`${ADMIN_SECRET}:authenticated_admin`).digest("hex");
}

function generateOtpChallenge(otp: string, expiresAt: number): string {
  const signature = crypto
    .createHmac("sha256", OTP_SALT)
    .update(`${expiresAt}:${otp}`)
    .digest("hex");
  return `${expiresAt}:${signature}`;
}

function verifyOtpChallenge(challengeToken: string, candidateOtp: string): { valid: boolean; reason?: string } {
  if (!challengeToken || typeof challengeToken !== "string") {
    return { valid: false, reason: "Missing or malformed security token." };
  }

  const parts = challengeToken.split(":");
  if (parts.length !== 2) {
    return { valid: false, reason: "Malformed security token format." };
  }

  const expiresAt = parseInt(parts[0], 10);
  const receivedSig = parts[1];

  if (isNaN(expiresAt) || Date.now() > expiresAt) {
    return { valid: false, reason: "Verification code has expired. Please request a new code." };
  }

  const expectedSig = crypto
    .createHmac("sha256", OTP_SALT)
    .update(`${expiresAt}:${candidateOtp.trim()}`)
    .digest("hex");

  if (expectedSig !== receivedSig) {
    return { valid: false, reason: "Invalid 6-digit verification code. Please check your email and try again." };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const action = body.action || "login";

    // 1. Session check
    if (action === "check") {
      const token = request.cookies.get(SESSION_COOKIE)?.value;
      const isAuthenticated = token === getExpectedSessionToken();
      return NextResponse.json({ authenticated: isAuthenticated });
    }

    // 2. Logout
    if (action === "logout") {
      const response = NextResponse.json({ success: true, message: "Logged out successfully" });
      response.cookies.delete(SESSION_COOKIE);
      return response;
    }

    // 3. Step 1: Master Password Verification & Dispatch Email OTP
    if (action === "step1_verify") {
      const password = typeof body.password === "string" ? body.password.trim() : "";

      if (!password) {
        return NextResponse.json({ error: "Master password is required" }, { status: 400 });
      }

      if (password !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Incorrect admin password" }, { status: 401 });
      }

      // Generate secure 6-digit OTP
      const otp = crypto.randomInt(100000, 999999).toString();
      const expiresMinutes = 10;
      const expiresAt = Date.now() + expiresMinutes * 60 * 1000;
      const challengeToken = generateOtpChallenge(otp, expiresAt);

      // Dispatch Email
      const emailResult = await sendOtpVerificationEmail({
        toEmail: ADMIN_EMAIL,
        engineerName: ENGINEER_NAME,
        otp,
        expiresMinutes,
      });

      return NextResponse.json({
        success: true,
        step: 2,
        challengeToken,
        maskedEmail: emailResult.maskedEmail,
        provider: emailResult.provider,
        message: `Verification code sent to ${emailResult.maskedEmail}.`,
      });
    }

    // 4. Resend OTP Action
    if (action === "resend_otp") {
      const { password } = body;
      const cleanPassword = typeof password === "string" ? password.trim() : "";

      if (cleanPassword !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized request to resend OTP" }, { status: 401 });
      }

      const otp = crypto.randomInt(100000, 999999).toString();
      const expiresMinutes = 10;
      const expiresAt = Date.now() + expiresMinutes * 60 * 1000;
      const challengeToken = generateOtpChallenge(otp, expiresAt);

      const emailResult = await sendOtpVerificationEmail({
        toEmail: ADMIN_EMAIL,
        engineerName: ENGINEER_NAME,
        otp,
        expiresMinutes,
      });

      return NextResponse.json({
        success: true,
        challengeToken,
        maskedEmail: emailResult.maskedEmail,
        provider: emailResult.provider,
        message: `New verification code dispatched to ${emailResult.maskedEmail}.`,
      });
    }

    // 5. Step 2: Email OTP Verification
    if (action === "step2_verify") {
      const { challengeToken, otp } = body;

      if (!challengeToken || typeof challengeToken !== "string") {
        return NextResponse.json({ error: "Missing security challenge. Please restart Step 1." }, { status: 400 });
      }

      const cleanOtp = typeof otp === "string" ? otp.trim() : "";
      if (!cleanOtp) {
        return NextResponse.json({ error: "Please enter the 6-digit OTP sent to your email." }, { status: 400 });
      }

      const verification = verifyOtpChallenge(challengeToken, cleanOtp);
      if (!verification.valid) {
        return NextResponse.json({ error: verification.reason || "Invalid verification code." }, { status: 401 });
      }

      // Successful verification -> Issue authenticated session cookie
      const sessionToken = getExpectedSessionToken();
      const response = NextResponse.json({
        success: true,
        authenticated: true,
        message: "Two-factor verification confirmed. Welcome, Er. Denish Adhikari!",
      });

      response.cookies.set(SESSION_COOKIE, sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid action specified" }, { status: 400 });
  } catch (error: any) {
    console.error("Auth API Route Error:", error);
    return NextResponse.json({ error: "Internal server error during authentication" }, { status: 500 });
  }
}
