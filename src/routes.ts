import { Router } from 'express'
const routes = Router()

import OngController from './controllers/Ongs'

routes.get('/',OngController.index);

export default routes;