// src/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    console.log('Received contact form submission:', req.body);
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or use another provider's SMTP config
      auth: {
        user: 'uthamkumarreddym@gmail.com',
        pass: 'xugg adga imbe mvfs', // Use App Password if 2FA is enabled
      },
      tls: {
        rejectUnauthorized: false, // 🟠 Accept self-signed certs (use only in dev)
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'yourgmail@gmail.com',
      to: email, // send to the entered email
      subject: `New message: ${subject}`,
      html: `
        <h3>You have a new message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
console.log('Email sent successfully:', mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
