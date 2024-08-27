import fs from 'fs';
import path from 'path';
import express from 'express';
import { SERVER_WELCOME_TEXT } from './constants';
import { wrapInDocument } from './helpers';

const content = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data.json'), 'utf-8'));

const app = express();
const port = 4000;

app.get('/', (_req, res) => {
  res.send(wrapInDocument(SERVER_WELCOME_TEXT));
});

app.get('/content', (_req, res) => {
  res.json(content);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
