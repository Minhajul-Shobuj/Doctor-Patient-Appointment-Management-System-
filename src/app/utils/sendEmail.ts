import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: config.NODE_ENV === 'production' ? 465 : 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>---
      user: 'mdminhajulislamshobuj@gmail.com',
      pass: 'rwmj ynus dvcm wzho',
    },
  });

  await transporter.sendMail({
    from: 'mdminhajulislamshobuj@gmail.com',
    to,
    subject: 'Reset your password within ten mins!',
    text: '',
    html,
  });
};
