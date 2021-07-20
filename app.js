const express = require('express');
const app = express();
require('./db');

const PORT = process.env.PORT || 3000;

const globalRouter = require('./routers/globalRouter');

app.listen(PORT, () => {
  console.log(`✅ Listening on 'http://localhost:${PORT}'`);
});

app.use('/', globalRouter);
