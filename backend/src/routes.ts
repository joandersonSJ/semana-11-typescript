import { Router } from 'express'
const routes = Router()

import OngController from './controllers/OngController'
import IncidentsController from './controllers/IncidentsController'

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/incidents',IncidentsController.index)
routes.post('/incidents',IncidentsController.create)
export default routes;