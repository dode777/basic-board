const express = require('express');
const app = express();
require('./db');

const PORT = process.env.PORT || 3000;

const globalRouter = require('./routers/globalRouter');
const postRouter = require('./routers/postRouter');

app.listen(PORT, () => {
  console.log(`✅ Listening on 'http://localhost:${PORT}'`);
});

app.use('/', globalRouter);
app.use('/board', postRouter);
