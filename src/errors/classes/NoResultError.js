import HTTP from 'http-status-codes';
import ApiError from './ApiError';

export default class NoResultError extends ApiError {
  /** @inheritdoc */
  constructor(message, code = HTTP.NOT_FOUND, ...args) {
    super(message, code, HTTP.NOT_FOUND, ...args);
  }
}
