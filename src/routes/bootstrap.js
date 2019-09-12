import _ from "lodash";
import RoutesConfig from "../configs/routes";
import MiddleWare from '../middlewares/default'

class Bootstrap {

    init(routes){
        const self = this;
        _.each(self.getFiles(), (item) => {
            try{
                const controller = require( _.get(item, 'filePath'));
                const newController = new controller.default();
                const requestType = _.toLower(_.get(item, 'requestType', ''));
                const requestPath = _.get(item, 'requestPath', '');
                const actionName = _.get(item, 'action','');
                const controllerAction = _.get(newController, actionName);

                // router.{requestType}('/', middleWare, ControllerClass.ActionFn.bind(ControllerClass));
                routes[ requestType ]( requestPath, MiddleWare, controllerAction.bind(newController));
            }
            catch(e) {
                console.log('Error:', e.message);
            }
        });

        return routes;
    }

    getFiles () {
        let collection = [];

        _.each(RoutesConfig, (controller, request) => {
            let model = {};
            const requestData = _.split(request, ' ');
            const controllerData = _.split(controller, '.');

            const requestType = _.get(requestData, '[0]', false);
            const requestPath = _.get(requestData, '[1]', false);

            const controllerClass =  _.get(controllerData, '[0]', false);
            const controllerAction =  _.get(controllerData, '[1]', false);

            const filePath = '../controllers/' + `${controllerClass}`;

            if( requestData && controllerData && requestType && controllerAction) {

                _.set(model, 'filePath', filePath);
                _.set(model, 'controller', controllerClass);
                _.set(model, 'action', controllerAction);
                _.set(model, 'requestType', requestType);
                _.set(model, 'requestPath', requestPath);

                collection.push(model);
            }
        });

        return collection;
    }


}


export default  Bootstrap;