import _ from 'lodash';

class Debugger {
  /**
   * Create debugger instance.
   */
  constructor() {
    this.reset();
  }

  /**
   * Add the data to the current this._data object.
   *
   * @param {Object} data
   *
   * @returns {Debugger}
   */
  collect(data) {
    _.merge(this._data, data);

    return this;
  }

  /**
   * Reset the data collected.
   *
   * @returns {Debugger}
   */
  reset() {
    this._data = {};

    return this;
  }

  /**
   * Collected debug data getter.
   *
   *
   * @returns {Object}
   */
  data() {
    return this._data;
  }
}

export default new Debugger();
