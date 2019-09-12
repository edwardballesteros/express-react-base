import Redirector from '../services/redirector';

class IndexController {

  constructor(){
    this.redirector = new Redirector();
  }


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

  async testAction(request, response) {

    const result = await this.redirector.get();

    return response.json({data:result});
  }

  postAction(request, response) {

    return response.json({post:1});
  }

  putAction(request, response) {

    return response.json({put:1});
  }

}

export default IndexController;
