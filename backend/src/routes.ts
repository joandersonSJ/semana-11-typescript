import { Router } from 'express'
const routes = Router()

import OngController from './controllers/Ongs'

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

export default routes;