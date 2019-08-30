import _ from 'lodash';
import HTTP from 'http-status-codes';
import ApiError from './classes/ApiError';
import errors from '../configs/errors';
import NoResultError from './classes/NoResultError';

/**
 * Create a custom error based on the error code.
 *
 * @param {String|Integer} code
 *
 * @returns {ApiError}
 */
export function makeError(code) {
  if (!_.isUndefined(errors[code])) {
    const { message, status, class: ApiErrorClass } = errors[code];

    return new ApiErrorClass(message, code, status);
  }

  return new NoResultError(`Unknown response code: ${code}.`);
}

/**
 * Create a json error.
 *
 * @param {String} message
 * @param {Integer} status
 * @param {String|Integer} errorCode
 *
 * @returns {Object}
 */
export function makeJsonError(message, status, errorCode = null) {
  const code = errorCode || status;

  return { error: { message, status, code } };
}

/**
 * Make a json error out of the error instance.
 *
 * @param {Error} error
 *
 * @returns {Object}
 */
export function makesJsonApiError(error) {
  if (error instanceof ApiError) {
    return makeJsonError(error.message, error.status, error.code);
  }

  return makeJsonError(error.message, HTTP.INTERNAL_SERVER_ERROR);
}
