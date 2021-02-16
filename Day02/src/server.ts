import { Request, Response } from 'express';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
const port = 8080;

app.get('/hello', (req: any, res: any) => {
  res.send('world!');
});

app.get('/repeat-my-query', (req: Request, res: Response) => {
  const msg = req.query.message;
  if (msg !== undefined) {
    res.send(msg);
  } else {
    res.status(400);
    res.send('Bad Request');
  }
});

app.get('/repeat-my-param/:message', (req: Request, res: Response) => {
  const msg = req.params.message;
  res.send(msg);
});

app.post('/repeat-my-body', (req: Request, res: Response) => {
  if (req.body) {
    res.send(req.body);
  } else {
    res.status(400);
  }
});

app.get('/repeat-my-header', (req: Request, res: Response) => {
  if (req.header('X-Message')) {
    res.send(req.header('X-Message'));
  } else {
    res.status(400);
  }
});

app.get('/repeat-my-cookie', (req: Request, res: Response) => {
  if (req.cookies.message) {
    res.send(req.cookies.message);
  } else {
    res.status(400);
  }
});

app.listen(port);
