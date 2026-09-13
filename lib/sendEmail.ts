/**
 * Zero-dependency Email Dispatcher for Er. Denish Adhikari Portfolio Admin 2FA
 * Uses standard global fetch() supported natively in Next.js / Node.js 18+.
 */

export interface SendOtpEmailParams {
  toEmail: string;
  engineerName: string;
  otp: string;
  expiresMinutes: number;
}

export interface SendEmailResult {
  success: boolean;
  provider: "resend" | "brevo" | "local_fallback";
  maskedEmail: string;
  error?: string;
  debugCode?: string; // Provided only in development or fallback mode
}

function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;
  if (user.length <= 3) return `${user[0]}***@${domain}`;
  return `${user.slice(0, 3)}***@${domain}`;
}

export async function sendOtpVerificationEmail({
  toEmail,
  engineerName,
  otp,
  expiresMinutes = 10,
}: SendOtpEmailParams): Promise<SendEmailResult> {
  const masked = maskEmail(toEmail);
  const subject = `🔐 Your Admin 2FA Verification Code: ${otp}`;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f14; color: #f1f5f9; padding: 24px; margin: 0; }
          .container { max-width: 520px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
          .badge { display: inline-block; background: rgba(56, 189, 248, 0.15); color: #38bdf8; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(56, 189, 248, 0.3); margin-bottom: 16px; }
          h2 { color: #ffffff; font-size: 20px; margin-top: 0; margin-bottom: 12px; }
          p { color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
          .code-box { background: #0b0f14; border: 2px dashed #0284c7; border-radius: 12px; padding: 18px; text-align: center; margin: 24px 0; }
          .code { font-family: monospace; font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #38bdf8; }
          .expiry { font-size: 12px; color: #64748b; margin-top: 8px; }
          .footer { font-size: 11px; color: #475569; border-top: 1px solid #1e293b; padding-top: 16px; margin-top: 24px; }
          .warning { color: #f59e0b; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="badge">NEC Reg. No. 79422 • Security Verification</div>
          <h2>Hello ${engineerName},</h2>
          <p>You requested access to the <strong>Engineering Administration Console</strong> for your portfolio website.</p>
          <p>Please enter the following 6-digit One-Time Password (OTP) on the verification screen to complete login:</p>
          
          <div class="code-box">
            <div class="code">${otp}</div>
            <div class="expiry">Valid for ${expiresMinutes} minutes • Single-use only</div>
          </div>
          
          <p class="warning">⚠️ If you did not initiate this login request, please verify your master password immediately.</p>
          
          <div class="footer">
            Er. Denish Adhikari Portfolio • Kathmandu, Nepal<br>
            Timestamp: ${new Date().toUTCString()}
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. Try Resend if RESEND_API_KEY is available
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || "Security <security@denishadhikari.com>",
          to: [toEmail],
          subject,
          html: htmlContent,
        }),
      });

      if (res.ok) {
        console.log(`[AUTH 2FA] OTP email dispatched via Resend to ${toEmail}`);
        return { success: true, provider: "resend", maskedEmail: masked };
      } else {
        const errJson = await res.json().catch(() => ({}));
        console.warn("[AUTH 2FA] Resend failed, falling back:", errJson);
      }
    } catch (e: any) {
      console.warn("[AUTH 2FA] Resend network error:", e?.message);
    }
  }

  // 2. Try Brevo if BREVO_API_KEY is available
  const brevoApiKey = process.env.BREVO_API_KEY;
  if (brevoApiKey) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Er. Denish Adhikari Security",
            email: process.env.MAIL_FROM || "den.adh0709@gmail.com",
          },
          to: [{ email: toEmail, name: engineerName }],
          subject,
          htmlContent,
        }),
      });

      if (res.ok) {
        console.log(`[AUTH 2FA] OTP email dispatched via Brevo to ${toEmail}`);
        return { success: true, provider: "brevo", maskedEmail: masked };
      }
    } catch (e: any) {
      console.warn("[AUTH 2FA] Brevo error:", e?.message);
    }
  }

  // 3. Development / Zero-Config Fallback Mode:
  // When no 3rd-party transactional mail API key is supplied, log to server console
  // and provide developer fallback so Er. Denish or tester can log in seamlessly.
  console.log("=================================================");
  console.log(`🔑 [ADMIN 2FA EMAIL OTP DISPATCH]`);
  console.log(`📨 Recipient: ${toEmail} (${engineerName})`);
  console.log(`🔢 6-Digit One-Time Password: [ ${otp} ]`);
  console.log(`⏳ Valid for: ${expiresMinutes} minutes`);
  console.log("=================================================");

  const isDevOrFallback = process.env.NODE_ENV !== "production" || !resendApiKey;

  return {
    success: true,
    provider: "local_fallback",
    maskedEmail: masked,
    debugCode: isDevOrFallback ? otp : undefined,
  };
}
