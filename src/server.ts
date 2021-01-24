import express from 'express';

const app = express();

app.get('/', (_request, response) => response.json({ message: 'y sou um cara muito bonitão' }));

app.listen(3000);
