import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'y sou um cara muito bonitão' }));

app.listen(3000);
