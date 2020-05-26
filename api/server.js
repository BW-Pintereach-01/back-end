const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router');
const articlesRouter = require('../articles/articles-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
// server.use('/api/articles', authenticate, articlesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'server is up!' })
})

module.exports = server;