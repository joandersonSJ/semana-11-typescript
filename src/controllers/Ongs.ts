import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response){
    res.json({ msg: 'hello'})
  }
}