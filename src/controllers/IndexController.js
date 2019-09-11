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

  testAction(request, response) {

    return response.json({data:1});
  }

  postAction(request, response) {

    return response.json({post:1});
  }

  putAction(request, response) {

    return response.json({put:1});
  }

}

export default IndexController;
