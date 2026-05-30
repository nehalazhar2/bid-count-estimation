"use server";

export async function submitContact(formData: FormData): Promise<void> {
  const data = Object.fromEntries(formData.entries());
  // Log submission — integrate with email provider (Resend, SendGrid, etc.) here
  console.log("Contact form submission:", data);
  await new Promise((r) => setTimeout(r, 800));
}
