import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PORT, HELLO_MESSAGE } from './serverConfig';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
const port = PORT;

app.get('/hello', (req: any, res: any) => {
  res.send(HELLO_MESSAGE);
});

app.get('/repeat-my-query', (req: Request, res: Response) => {
  const msg = req.query.message;
  if (msg !== undefined) {
    res.send(msg);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
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
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/repeat-my-header', (req: Request, res: Response) => {
  if (req.header('X-Message')) {
    res.send(req.header('X-Message'));
  } else {
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/repeat-my-cookie', (req: Request, res: Response) => {
  if (req.cookies.message) {
    res.send(req.cookies.message);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/health', (req: Request, res: Response) => {
  res.sendStatus(StatusCodes.OK);
  res.status(StatusCodes.OK);
});

app.get('/repeat-all-my-queries', (req: Request, res: Response) => {
  const temp = { key: '<key of the query>', value: '<value of the query>' };
  res.send(temp);
});

app.listen(port);
