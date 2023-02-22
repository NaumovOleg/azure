import express, { Request, Response } from 'express';

const app = express();


app.use(express.json());

const PORT = process.env.FUNCTIONS_HTTPWORKER_PORT || 3000;

console.log(PORT);


const server = app.listen(+PORT, '0.0.0.0', () => {
  console.log(`Your port is ${PORT}`);
  console.log(`Example app listening at :${PORT}`);
});

app.get('/', (req:Request, res:Response) => {
  res.json('Hello World!');
});

app.post('/hello', (req:Request, res:Response) => {
  res.json({ value: req.body });
});

module.exports = app;
