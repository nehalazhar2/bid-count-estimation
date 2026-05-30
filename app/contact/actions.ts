"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "info@bidcountestimation.com";
const FROM = "noreply@bidcountestimation.com";

export interface ContactResult {
  success: boolean;
  error?: string;
}

function formatLabel(key: string): string {
  const labels: Record<string, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    projectType: "Project Type",
    budgetRange: "Budget Range",
    message: "Project Description",
  };
  return labels[key] ?? key;
}

function formatValue(key: string, value: string): string {
  if (!value) return "—";
  if (key === "projectType") {
    const map: Record<string, string> = {
      commercial: "Commercial",
      residential: "Residential",
      industrial: "Industrial",
      infrastructure: "Infrastructure / Civil",
      renovation: "Renovation / Remodel",
      other: "Other",
    };
    return map[value] ?? value;
  }
  if (key === "budgetRange") {
    const map: Record<string, string> = {
      "under-100k": "Under $100,000",
      "100k-500k": "$100,000 – $500,000",
      "500k-1m": "$500,000 – $1,000,000",
      "1m-5m": "$1,000,000 – $5,000,000",
      "5m-plus": "$5,000,000+",
    };
    return map[value] ?? value;
  }
  return value;
}

function buildHtml(
  title: string,
  rows: Array<[string, string]>,
  source: string
): string {
  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;background:#f4ecd8;font-weight:600;font-size:13px;color:#0b1f3d;width:160px;vertical-align:top;border-bottom:1px solid #e8d29b;">${label}</td>
        <td style="padding:10px 16px;background:#faf6ec;font-size:13px;color:#15171c;vertical-align:top;border-bottom:1px solid #e8d29b;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0ece4;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(11,31,61,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:#0b1f3d;padding:28px 32px;text-align:center;">
            <div style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#c9a961;margin-bottom:6px;">Bid Count Estimation</div>
            <div style="font-size:22px;font-weight:700;color:#ffffff;">${title}</div>
          </td>
        </tr>

        <!-- Source badge -->
        <tr>
          <td style="background:#13315c;padding:10px 32px;text-align:center;">
            <span style="font-size:11px;color:#c9a961;letter-spacing:0.1em;text-transform:uppercase;">Submitted via ${source}</span>
          </td>
        </tr>

        <!-- Fields table -->
        <tr>
          <td style="padding:24px 24px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e8d29b;">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px 28px;text-align:center;">
            <p style="font-size:12px;color:#9a9080;margin:0;">
              Reply directly to this email to respond to the inquiry.<br>
              <a href="https://bidcountestimation.com" style="color:#c9a961;text-decoration:none;">bidcountestimation.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const data = Object.fromEntries(
    Array.from(formData.entries()).map(([k, v]) => [k, v.toString().trim()])
  );

  const { firstName, lastName, email, phone, projectType, budgetRange, message } = data;
  const name = `${firstName} ${lastName}`.trim();
  const isFullForm = Boolean(message);

  // Build field rows for the email body
  const rows: Array<[string, string]> = [
    ["Name", name || "—"],
    ["Email", email || "—"],
    ["Phone", formatValue("phone", phone || "")],
    ["Project Type", formatValue("projectType", projectType || "")],
  ];
  if (budgetRange) rows.push(["Budget Range", formatValue("budgetRange", budgetRange)]);
  if (message) rows.push(["Project Description", message]);

  const source = isFullForm ? "Contact Page" : "Hero Quick Form";
  const subject = isFullForm
    ? `New Estimate Request from ${name} — ${formatValue("projectType", projectType || "Unknown")}`
    : `Quick Quote Request from ${name} — ${formatValue("projectType", projectType || "Unknown")}`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject,
    html: buildHtml("New Estimate Request", rows, source),
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
