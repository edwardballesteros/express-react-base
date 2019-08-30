import express from 'express';
import responseMiddleware from '../middlewares/response';
import IndexController from '../controllers/IndexController';

const routes = express.Router();
const index = new IndexController();

routes.use(responseMiddleware);
routes.get('/', index.indexAction);


export default routes;
