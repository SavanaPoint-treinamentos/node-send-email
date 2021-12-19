import { transporter } from "../config/nodemailer";


export const sendEmail = async (req, res) => {
     const {email, firstName, body } = req.body;

        try {
           await transporter.sendMail({
                from: 'Francisco <info@savanapoint.tech>',
                subject: 'Hello World',
                to: email,
                text: `Olá ${firstName} ${body}`
            })

            return res.json(true)
        } catch (error) {
             return res.json(error)
        }
}