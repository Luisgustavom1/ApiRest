import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express, { urlencoded } from 'express';
import homeRoutes from './src/Routes/HomeRoute';
import useRoutes from './src/Routes/UserRoute';
import tokenRoutes from './src/Routes/TokenRoute';
import alunoRoutes from './src/Routes/AlunoRoute';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', useRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/aluno/', alunoRoutes);
  }
}

export default new App().app;
