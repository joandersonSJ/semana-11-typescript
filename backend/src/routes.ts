import { Router } from 'express'

import OngController from './controllers/OngController'
import IncidentsController from './controllers/IncidentsController'
import ProfileController from './controllers/ProfileController'
import SessionController from './controllers/SessionController'

const routes = Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/session', SessionController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

export default routes
