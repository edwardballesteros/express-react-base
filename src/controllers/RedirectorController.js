import Redirector from '../services/redirector';

class RedirectorController {

    constructor(){
        this.redirector = new Redirector();
    }

    async searchAction(request, response){

        const url = request.query.url;
        const data = await this.redirector.get(url);

        return response.json({redirector:data});
    }


}


export default RedirectorController;