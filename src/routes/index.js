import express from 'express';
import responseMiddleware from '../middlewares/response';
import Bootstrap from "./bootstrap";

const routes = express.Router();
const routesBootstrap = new Bootstrap();

routesBootstrap.init(routes);
routes.use(responseMiddleware);

export default routes;
