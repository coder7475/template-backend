import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import port from "./config"
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', () => {
  console.log(`App is listening to ${port}`)
});

export default app;
