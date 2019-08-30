export default class ApiError extends Error {
  /**
   * Overrides default Error constructor to
   * add our custom "code" and http "status" property.
   *
   * @param {String} message
   * @param {Integer} code
   * @param {Integer} status
   * @param {...any} args default args
   */
  constructor(message, code = 500, status = 500, ...args) {
    super(message, ...args);

    this.code = code;
    this.status = status;
    this.name = this.constructor.name;
  }

  /**
   * Getter for http status code.
   *
   * @returns {Integer}
   */
  getStatus() {
    return this.status;
  }

  /**
   * Getter for error custom code.
   *
   * @returns {Integer}
   */
  getCode() {
    return this.code;
  }
}
