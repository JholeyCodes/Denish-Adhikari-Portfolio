import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ADMIN_SECRET = process.env.ADMIN_PASSWORD || "denish2026!";
const SESSION_COOKIE = "denish_admin_session";

function getExpectedToken(): string {
  return crypto.createHmac("sha256", "denish_portfolio_salt_2026").update(ADMIN_SECRET).digest("hex");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const action = body.action || "login";

    if (action === "check") {
      const token = request.cookies.get(SESSION_COOKIE)?.value;
      const isAuthenticated = token === getExpectedToken();
      return NextResponse.json({ authenticated: isAuthenticated });
    }

    if (action === "logout") {
      const response = NextResponse.json({ success: true, message: "Logged out successfully" });
      response.cookies.delete(SESSION_COOKIE);
      return response;
    }

    if (action === "login") {
      const password = typeof body.password === "string" ? body.password.trim() : "";

      if (!password) {
        return NextResponse.json({ error: "Password is required" }, { status: 400 });
      }

      if (password !== ADMIN_SECRET) {
        return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
      }

      const token = getExpectedToken();
      const response = NextResponse.json({
        success: true,
        message: "Authentication successful",
      });

      response.cookies.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
