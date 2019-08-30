import _ from 'lodash';


/**
 * Helper function to get base image url based on domain.
 *
 * @param {String} domain
 */
function _getImageBaseUrl(domain) {
  switch (true) {
    case /cp/.test(domain):
    case /carparts/.test(domain):
      return process.env.CP_BASE_IMAGE_URL;

    default:
      return process.env.CP_BASE_IMAGE_URL;
  }
}

/**
 * Determine if value is falsy.
 *
 * @param {Mixed} value
 *
 * @returns {Boolean}
 */
export function isFalsy(value) {
  return !value || (_.isObject(value) && _.isEmpty(value));
}

/**
 * Convert text to scene7 image url.
 *
 * @param {String} text
 * @param {String} domain
 *
 * @returns {String}
 */
export function textToScene7Url(text, domain) {
  if (!_.isString(text)) {
    return null;
  }

  const defaultQuery = 'scl=1&rgn=0,0,0,0&defaultImage=noimage';
  const baseUrl = _getImageBaseUrl(domain);

  let src = text.trim().toLowerCase();

  src = src.replace(/&/g, '-and-');
  src = src.replace(/,\s*/g, '-comma-');
  src = src.replace(/\./g, '-dot-');
  src = src.replace(/\\/g, '-qt-');
  src = src.replace(/\(/g, '-openp-');
  src = src.replace(/\)/g, '-closep-');
  src = src.replace(/\+/g, '-plus-');
  src = src.replace(/;/g, '-semi-');
  src = src.replace(/\//g, '-fs-');

  // this should come last as other substitutions might have unnecessary space.
  src = src.replace(/\s/g, '_');

  return `${baseUrl}/${src}/?${defaultQuery}`;
}
