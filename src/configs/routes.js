
export default {
    /*  { requestData } : { controllerData } */
    'GET /test' : 'IndexController.testAction',
    'POST /test' : 'IndexController.postAction',
    'PUT /test' : 'IndexController.putAction',

    'GET /redirector/search': 'RedirectorController.searchAction',

    'GET /*' : 'IndexController.indexAction',
};