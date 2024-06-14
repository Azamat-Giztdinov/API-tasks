require('dotenv').config();

export default {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'postgres',
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME || 'db_api_tasks',
  dialect: 'postgres'
};
