import Sequelize from 'sequelize';
import db from '../database';

export const TestCase = db.define('test_cases', {
  input: Sequelize.STRING,
  output: Sequelize.STRING,
  weight: Sequelize.INTEGER,
  hackathon_id: {
    type: Sequelize.UUID,
    references: { model: 'hackathons', key: 'id' },
  },
  is_public: Sequelize.BOOLEAN,
});
