import { Request, Response } from 'express';
import knex from '../database/connection';

export default {

  async index(req: Request, res: Response){
    const incidents = await knex('incidents').select('*')

    return res.json(incidents)
  },
  async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.Authorization;

    const incident = await knex('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json(incident)
  },
  async delete(req: Request, res: Response){
    const id = req.params;

    await knex('incidents')
    .where(id)
    .del()

    return res.status(200).send()
  }
}