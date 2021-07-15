const express = require('express');
const globalRouter = express.Router();

globalRouter.get('/', (req, res) => {
  res.send('Welcome my home 😊 - Router');
});

module.exports = globalRouter;
