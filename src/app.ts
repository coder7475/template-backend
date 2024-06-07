import cors from 'cors';
import express, { Application } from 'express';
import notFound from './middlewares/notFound';
import parameters from './parameters';
const app: Application = express();

// *? middlewares
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:7475'],
    credentials: parameters.env === 'production' ? true : false,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  }),
);

//? For all others routes - Routes Not Found
app.use(notFound);

export default app;
