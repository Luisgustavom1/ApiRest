import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];
const connection = new Sequelize(DatabaseConfig);

models.forEach((model) => model.init(connection));
