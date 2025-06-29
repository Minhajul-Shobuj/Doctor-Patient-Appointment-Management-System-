import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// application routes
app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Doctor–Patient Appointment Management API😉');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
