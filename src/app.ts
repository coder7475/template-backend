import cors from 'cors';
import express, { Application } from 'express';
import notFound from './middlewares/notFound';
const app: Application = express();

// *? middlewares
app.use(express.json());
app.use(cors());

//? For all others routes - Routes Not Found
app.use(notFound);

export default app;
