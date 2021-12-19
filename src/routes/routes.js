import { Router } from "express";
import { sendEmail } from "../services/send.service";


const router = Router();


router.post('/send-email', sendEmail);

export { router }