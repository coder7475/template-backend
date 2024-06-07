import cors from 'cors';
import express, { Application } from 'express';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', () => {
  console.log(`This is working`);
});

export default app;
