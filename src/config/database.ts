import { Sequelize } from 'sequelize';

const requiredEnvironmentVariable = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

const database = requiredEnvironmentVariable('DB_NAME');
const username = requiredEnvironmentVariable('DB_USER');
const password = requiredEnvironmentVariable('DB_PASSWORD');
const host = requiredEnvironmentVariable('DB_HOST');
const port = Number(requiredEnvironmentVariable('DB_PORT'));

export const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});
