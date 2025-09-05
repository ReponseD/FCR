const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// POST /api/contact - receives contact form data and sends email
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Configure transporter (use environment variables for real deployment)
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Change to your provider if needed
    auth: {
      user: process.env.FCR_EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.FCR_EMAIL_PASS || 'your-app-password'
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@flightclubrwanda.org',
      subject: `FCR Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`FCR backend listening on port ${PORT}`);
});
