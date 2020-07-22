import Sequelize from 'sequelize';
import db from '../database';

export const Submission = db.define('submissions', {
  language: Sequelize.STRING, // change this to enum
  code_url: Sequelize.STRING,
  group_id: {
    type: Sequelize.UUID,
    references: { model: 'groups', key: 'id' },
  },
});
