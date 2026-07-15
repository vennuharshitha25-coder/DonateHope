import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"DonateHope Admin" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Registration Successful",
    html: `
      <h2>Welcome to DonateHope!</h2>
      <p>Hello ${name},</p>
      <p>You have successfully registered successfully.</p>
      <p>Thank you for joining DonateHope.</p>
    `,
  });
};