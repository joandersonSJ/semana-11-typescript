import { Request, Response } from 'express';
import knex from '../database/connection';


export default {

  async index(req: Request, res: Response) {
    const ongs = await knex('ongs').select('*')

    return res.json(ongs)
  },
  async create(req: Request, res: Response) {
    const id = Date.now().toString()
    const { name, email, whatsapp, city, uf } = req.body;

    const ong = await knex('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json(ong)
  }
}