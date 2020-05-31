import { Request, Response } from 'express'
import knex from '../database/connection'

export default {
  async create (req: Request, res: Response) {
    const { id } = req.body

    const ong = await knex('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'no ONG found with this ID' })
    }

    return res.json(ong)
  }

}
