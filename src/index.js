import express from 'express';

import { router } from './routes/routes';


const app = express();
app.use(express.json())
app.use('/api', router)
const port = process.env.PORT || 2812;

app.listen(port, () => {
    console.log(`server runing on http://loacahost:${port}`)
})