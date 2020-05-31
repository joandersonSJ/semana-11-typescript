import { Request, Response, RequestParamHandler } from 'express'
import knex from '../database/connection'

export default {
  async index (req: Request, res: Response) {
    const ong_id = req.headers.authorization

    if (!ong_id) {
      return res.status(400).json({ error: 'Invalid ONG id' })
    }

    const ong = await knex('ongs')
      .where('id', ong_id)
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'ONG id does not exists' })
    }

    const incidents = await knex('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incidents)
  }

}
