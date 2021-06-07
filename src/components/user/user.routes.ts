import { Router } from 'express';
import * as user from './user.controller';

const routes = Router();

routes.get('/', user.getAll);
routes.post('/', user.create);
routes.get('/recipient', user.getRecipient);
routes.post('/recipient', user.addRecipient);

export default routes;
