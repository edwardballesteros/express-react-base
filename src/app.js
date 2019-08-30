import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import logger from 'winston';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import methodOverride from 'method-override';

// load .env file
dotenv.config();
const routes = require('./routes');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(cors());

// default express configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/../public`));
app.use('/js', express.static('dist'));

app.set('view engine', 'ejs');
app.set("views","./src/views");

if (!isProduction) {
  app.use(errorhandler());
}

app.use(routes.default);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  if (!isProduction) {
    logger.log(err.stack);
  }

  const status = err.status || 500;

  res.status(status);
  res.json({
    error: err.message,
    status,
  });
});

export default app;
