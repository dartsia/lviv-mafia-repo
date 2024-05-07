const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env.example') })
const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_EMAIL,
            service: process.env.SERVICE_EMAIL,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASS_EMAIL
            }
        });

        await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: subject,
            text: text
        });
        console.log("Email sent sucessfully.");
    } catch (error) {
        console.log("Email NOT sent." + error);
    }
}