import HTTP from 'http-status-codes';
import Debugger from '../core/Debugger';
import { makeJsonError } from '../errors/make';

const customMethods = {
  withData(data) {
    return this.json({ data });
  },
  withInternalError(message) {
    return this.withError(message, HTTP.INTERNAL_SERVER_ERROR);
  },
  withNotFoundError(message) {
    return this.withError(message, HTTP.NOT_FOUND);
  },
  withError(message, status, errorCode = null) {
    return this.status(status).json(makeJsonError(message, status, errorCode));
  },
};

// Add custom response methods
export default (request, response, next) => {
  Object.assign(response, customMethods);

  const { query } = request;

  // record debug data when debug is enabled.
  if (Boolean(query.debug) === true) {
    const start = process.hrtime();

    Object.assign(response, {
      withData(data) {
        const elapsed = process.hrtime(start);
        const inMs = elapsed[0] * 1000 + elapsed[1] / 1e6;

        Debugger.collect({ elapsed: inMs });

        return this.json({ data, debug: Debugger.data() });
      },
    });
  }

  next();
};
