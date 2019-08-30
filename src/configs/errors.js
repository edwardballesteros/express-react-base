import HTTP from 'http-status-codes';
import * as errors from '../errors';

export default {
  SUCC403: {
    class: errors.ResourceNotAvailableError,
    message: 'The Object is not available for you.',
    status: HTTP.SERVICE_UNAVAILABLE,
  },
  SUCC404: {
    class: errors.ResourceNotFoundError,
    message: 'The Object cannot be found.',
    status: HTTP.NOT_FOUND,
  },
  SUCC408: {
    class: errors.ServiceDependencyTimeoutError,
    message: 'A dependent service timed out.',
    status: HTTP.REQUEST_TIMEOUT,
  },
  SUCC501: {
    class: errors.UnknownServiceError,
    message: 'The SOA framework does not recognize the service.',
    status: HTTP.NOT_IMPLEMENTED,
  },
  SUCC503: {
    class: errors.ServiceDownError,
    message: 'The service is down.',
    status: HTTP.SERVICE_UNAVAILABLE,
  },
  SUCC5000: {
    class: errors.FailedOperationError,
    message: 'Operation Failed (CRUD).',
    status: HTTP.BAD_REQUEST,
  },
  SUCC5001: {
    class: errors.InvalidParameterError,
    message: 'Invalid parameter.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC6000: {
    class: errors.NoResultError,
    message: 'Data not found.',
    status: HTTP.NOT_FOUND,
  },
  SUCC6001: {
    class: errors.ExistingDataError,
    message: 'Data already exists.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5002: {
    class: errors.InvalidEmailError,
    message: 'Invalid email.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5003: {
    class: errors.InvalidZipCodeError,
    message: 'Invalid zipcode.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5004: {
    class: errors.InvalidPhoneNumberError,
    message: 'Invalid phone number.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5005: {
    class: errors.InvalidCreditCardError,
    message: 'Invalid credit card.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5006: {
    class: TypeError,
    message: 'Must be numeric.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5007: {
    class: errors.InvalidDateFormatError,
    message: 'Invalid date format.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
  SUCC5008: {
    class: errors.InvalidTokenError,
    message: 'Token is invalid or already expired.',
    status: HTTP.UNPROCESSABLE_ENTITY,
  },
};
