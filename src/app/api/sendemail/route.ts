import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {

    const { name, phone } = await req.json();

    // Configure Nodemailer
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL, // replace with your Gmail email
            pass: process.env.SMTP_PASSWORD, // replace with your Gmail password or app-specific password
        },
    });

    const mailData = {
        from: "testme@gmail.com",
        to: process.env.SMTP_EMAIL,
        subject: 'New Contact Form Submission',
        html: `Name: ${name} <br> Phone: ${phone}`,
    }

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailData, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        // Send the email
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (error) {
        console.error('Error sending email:', error);
    }

}
