import axios from 'axios';
import _ from 'lodash';
import querystring from 'querystring';

class Services {

    constructor() {
        this.client = axios.create({
            headers: {'apiKey': 'anzhbnJvaXVz'}
        });
    }

    _get(options) {
        const endpoint = _.get(options, 'endPoint', '');
        const path = _.get(options, 'path', '');
        const url = endpoint + path;

        const params = _.get(options, 'params', {});
        const query = querystring.stringify(params);

        console.log('servicceee' , url, query);

        return new Promise((resolve, reject) => {
            this.client.get(url, query)
                .then(response => {
                    resolve(_.get(response, 'data'));
                })
                .catch(response => {
                    reject (response);
                })
        });
    }

}


export default Services;