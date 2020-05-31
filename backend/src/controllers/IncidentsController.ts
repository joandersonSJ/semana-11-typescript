import { Request, Response } from 'express'
import knex from '../database/connection'

export default {

  async index (req: Request, res: Response) {
    const incidents = await knex('incidents').select('*')

    return res.json(incidents)
  },
  async create (req: Request, res: Response) {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const [id] = await knex('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    console.log(id)
    return res.send()
  },
  async delete (req: Request, res: Response) {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incident = await knex('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' })
    }

    await knex('incidents')
      .where('id', id)
      .delete()

    return res.status(200).send()
  }
}
