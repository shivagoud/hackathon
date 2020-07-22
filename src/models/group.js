import Sequelize from 'sequelize';
import db from '../database';

export const Group = db.define('groups', {
  hackathon_id: {
    type: Sequelize.UUID,
    references: { model: 'hackathons', key: 'id' },
  },
  created_by: {
    type: Sequelize.UUID,
    references: { model: 'users', key: 'id' },
  },
  invitees: Sequelize.ARRAY(Sequelize.UUID),
  best_score: Sequelize.INTEGER,
});
