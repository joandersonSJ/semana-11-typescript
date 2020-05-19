import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

class App {
  public express: express.Application
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    dotenv.config();
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
