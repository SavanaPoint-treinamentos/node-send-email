import nodemailer from 'nodemailer';


export const transporter = nodemailer.createTransport({
    port: 465,
    host: 'premium142.web-hosting.com',
    auth:  {
        user: 'teste@savanapoint.tech',
        pass: 'teste2021'
    }
})