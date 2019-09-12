import _ from 'lodash';

import BaseService from '../services/services'
import Config from '../configs/services';

class Redirector extends BaseService {

    constructor(){
        super();
        this.config = _.get(Config, 'redirector', {});
    }

      get(){

        return this.config;

        const options = {
            endPoint: 'https://api2-staging.usautoparts.com',
            path: '/Redirector/v1.0/getRedirect',
            params : {
                site: 'carparts.com',
                page_url: '/honda/mirror',
                apiKey: 'anzhbnJvaXVz'
            }
        };


        return this._get(options);
    }

    post() {
        return { 'data' : { name : '....' }  }
    }



}

export default Redirector;