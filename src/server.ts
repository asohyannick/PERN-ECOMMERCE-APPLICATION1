import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
const app:Application = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = process.env.PORT || 8000;
const host = process.env.APP_HOST || 'localhost';
const api_version = process.env.API_VERSION || 'V1';
app.get(`/api/${api_version}/test`, (req:Request, res:Response) => {
res.json('API is  working')
})
app.listen(port, () => {
    console.log(`Server is runing on port ${port} and on ${host} and an /api/${api_version}...`)
})
