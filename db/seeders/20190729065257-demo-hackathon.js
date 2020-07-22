import uuid from 'uuid/v4';
import Sequelize from 'sequelize';

const demoHackathon = {
  id: 'demo',
  name: 'Demo',
  start_time: Sequelize.literal('NOW()'),
  end_time: Sequelize.literal('NOW()'),
};

const seeder = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => {
    const addHackathons = queryInterface.bulkInsert(
      'hackathons', [demoHackathon],
      { transaction: t },
    );

    return Promise.all([addHackathons])
      .then(() => console.log('Seeded.'))
      .catch(err => console.error(err));
  }),

  down: queryInterface => queryInterface.sequelize.transaction(t => Promise.all([
    queryInterface.bulkDelete('hackathons', null, { transaction: t }),
  ])
    .then(() => console.log('reverted.'))
    .catch(err => console.error(err))),
};

export default seeder;
