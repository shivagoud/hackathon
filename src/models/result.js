import Sequelize from 'sequelize';
import db from '../database';

export const Result = db.define('results', {
  test_case_id: {
    type: Sequelize.UUID,
    references: { model: 'test_cases', key: 'id' },
  }
  submission_id: {
    type: Sequelize.UUID,
    references: { model: 'submissions', key: 'id' },
  },
  score: Sequelize.INTEGER,
});
