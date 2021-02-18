import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PORT, HELLO_MESSAGE } from './serverConfig';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

interface obj{
    key : any;
    value : any;
}

interface User {
    email: string;
    password: string;
}

const users: User[] = [];

app.use(cookieParser());
app.use(bodyParser.json());
const port = PORT;

app.get('/hello', (req: any, res: any) => {
  res.send(HELLO_MESSAGE);
  res.status(StatusCodes.OK);
});

app.get('/repeat-my-query', (req: Request, res: Response) => {
  const msg = req.query.message;
  if (msg !== undefined) {
    res.send(msg);
    res.status(StatusCodes.OK);
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
    res.status(StatusCodes.OK);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/repeat-my-header', (req: Request, res: Response) => {
  if (req.header('X-Message')) {
    res.send(req.header('X-Message'));
    res.status(StatusCodes.OK);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/repeat-my-cookie', (req: Request, res: Response) => {
  if (req.cookies.message) {
    res.send(req.cookies.message);
    res.status(StatusCodes.OK);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
  }
});

app.get('/health', (req: Request, res: Response) => {
  res.sendStatus(StatusCodes.OK);
  res.status(StatusCodes.OK);
});

app.get('/repeat-all-my-queries', (req: Request, res: Response) => {
  const tab : Array<obj> = [];
  const { query } = req;
  for (const elem in query) {
    const temp : obj = { key: elem, value: query[elem] };
    tab.push(temp);
  }
  res.send(tab);
});

app.post('/cookies/register', (req: Request, res: Response) => {
  if (req.body.email && req.body.password) {
    const temp : User = { email: req.body.email, password: req.body.password };
    users.push(temp);
    res.cookie('mail', req.body.email, { httpOnly: true });
    res.sendStatus(StatusCodes.OK);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    res.send('Bad Request');
  }
});

app.post('/cookies/login', (req: Request, res: Response) => {
  let bol : Boolean = false;

  if (req.body.email !== undefined && req.body.password !== undefined) {
    users.forEach((user) => {
      if (req.cookies.email === user.email && req.body.password === user.password) {
        res.cookie('mail', req.body.email, { httpOnly: true });
        bol = true;
      }
    });
  } if (bol) {
    res.status(StatusCodes.BAD_REQUEST);
    res.send('Bad Request');
  } else {
    res.sendStatus(StatusCodes.OK);
  }
});

app.get('/cookies/me', (req: Request, res: Response) => {
    let bol : Boolean = true;
  if (req.cookies.mail) {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === req.cookies.mail) {
        res.status(StatusCodes.OK);
        res.send(users[i]);
        bol = false;
        break;
      }
    }
    if (bol) {
        res.status(401);
        res.send('Unauthorized');
    }
  } else {
    res.status(403);
    res.send('Forbidden');
  }
});

app.post('//jwt/register', (req: Request, res: Response) => {
  if (req.body.email !== undefined && req.body.password !== undefined) {
    const temp : User = { email: req.body.email, password: req.body.password };
    users.push(temp);
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    res.send('Bad Request');
  }
});

app.listen(port);
