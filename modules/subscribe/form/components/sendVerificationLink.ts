import SendMail from "@lib/utils/mailer/sendmail";
export async function SendVerificationLink({
  token,
  email,
}: {
  token: string;
  email: string;
}): Promise<boolean> {
  const html_body_content = `
      <table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
  <tr>
    <td style="text-align: center;">
      <p style="font-size: 18px; color: #333;">Greeting from VVGC,</p>
      <p style="font-size: 16px; color: #555;">Please click the below link to get subscribed for our weekly newsletter.</p>
      <a href= "${process.env.BASE_URL}/verifyEmail/${token}"
         style="display: inline-block; padding: 12px 24px; background-color: #6366F1; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; margin-top: 20px;">
        Subscribe Now
      </a>
    </td>
  </tr>
</table>`;

  const result = await SendMail({ userEmail: email, html_body_content });
  if (result) return true;
  else return false;
}
