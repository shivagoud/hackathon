import Sequelize from 'sequelize';
import db from '../database';

export const User = db.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
}, {});
