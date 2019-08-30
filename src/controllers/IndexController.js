class IndexController {
  /**
   * Ping endpoint.
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object}
   */
  indexAction(request, response) {

    return response.render('index', {});


  }
}

export default IndexController;
