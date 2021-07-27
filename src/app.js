import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express, { urlencoded } from 'express';
import homeRoutes from './Routes/HomeRoute';
import useRoutes from './Routes/UserRoute';
import tokenRoutes from './Routes/TokenRoute';
import alunoRoutes from './Routes/AlunoRoute';
import fotosRoute from './Routes/FotosRoute';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', useRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/aluno/', alunoRoutes);
    this.app.use('/foto/', fotosRoute);
  }
}

export default new App().app;
