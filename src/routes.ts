import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {

  res.send('Home page');

});

routes.get('/test', (req, res, next) => {

  res.send('Test page');

});

export default routes;