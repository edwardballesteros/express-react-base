/* eslint-disable import/first */
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('newrelic');
}

import logger from 'winston';
import app from './app';

const port = process.env.APP_PORT || 3000;
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise ', p, reason);
});

server.on('listening', () => {
  const env = process.env.NEW_RELIC_ENABLED;
  const newrelicEnabled = env !== 'undefined' ? parseInt(env, 10) : 1;

  if (newrelicEnabled === 0) {
    logger.info('New relic is disabled.');
  }

  logger.info(`Listening on port ${server.address().port}`);
});
