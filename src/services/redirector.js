import _ from 'lodash';

import BaseService from '../services/services'
import Config from '../configs/services';

class Redirector extends BaseService {

    constructor(){
        super();
        this.config = _.get(Config, 'redirector', {});
    }

      get(url){
        const data = {
            endPoint: 'https://api2-staging.usautoparts.com',
            path: '/Redirector/v1.0/getRedirect',
            params : {
                site: 'carparts.com',
                page_url: url,
                apiKey: 'anzhbnJvaXVz'
            }
        };

        return this._get(data);
    }

    post() {
        return { 'data' : { name : '....' }  }
    }



}

export default Redirector;