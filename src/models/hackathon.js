import Sequelize from 'sequelize';
import db from '../database';

export const Hackathon = db.define('hackathons', {
  name: Sequelize.STRING,
  problem_statement: Sequelize.TEXT,
  start_time: Sequelize.DATE,
  end_time: Sequelize.DATE,
  created_at: {
    type: Sequelize.DATE,
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('NOW()'),
  },
});
