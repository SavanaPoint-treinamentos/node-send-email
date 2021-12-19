import dotenv from 'dotenv';
dotenv.config()
import nodemailer from 'nodemailer';


export const transporter = nodemailer.createTransport({
    port: process.env.PORT_EMAIL,
    host: process.env.HOST,
    auth:  {
        user: process.env.USER,
        pass: process.env.PASS
    }
})