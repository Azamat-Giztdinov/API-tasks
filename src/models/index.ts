import { Dialect, Sequelize } from 'sequelize';
import config from '../config/config';
import { initTaskModel, Task } from './task';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect as Dialect,
});

initTaskModel(sequelize);

export { sequelize, Task };
