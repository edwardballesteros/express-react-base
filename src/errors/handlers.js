import logger from 'winston';
import Promise from 'bluebird';
import { makesJsonApiError } from './make';

/**
 * Error handler for composite calls.
 *
 * @param {Error} error
 *
 * @returns {Promise<Object>}
 */
export function compositeErrorHandler(error) {
  logger.error(error);

  return Promise.resolve(makesJsonApiError(error));
}
