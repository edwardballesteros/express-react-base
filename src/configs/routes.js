
export default {
    /*  { requestData } : { controllerData } */
    'GET /test' : 'IndexController.testAction',
    'POST /test' : 'IndexController.postAction',
    'PUT /test' : 'IndexController.putAction',
    'GET /*' : 'IndexController.indexAction',
};