const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const commentRouter = require('./routers/commentRouter');
require('./db');

const PORT = process.env.PORT || 3000;

const globalRouter = require('./routers/globalRouter');
const postRouter = require('./routers/postRouter');

// Read Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`✅ Listening on 'http://localhost:${PORT}'`);
});

app.use('/', globalRouter);
app.use('/board', postRouter);
app.use('/comment', commentRouter);
