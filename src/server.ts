import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Piroca'})
})

app.listen(3000)