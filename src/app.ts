import cors from 'cors';
import express, { Application } from 'express';
import notFound from './middlewares/notFound';
const app: Application = express();

// *? middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Template is working',
    error: '',
  });
});
//Not Found
app.use(notFound);

export default app;
