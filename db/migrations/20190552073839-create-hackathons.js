const migration = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('hackathons', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    problem_statement: Sequelize.TEXT,
    start_time: Sequelize.DATE,
    end_time: Sequelize.DATE,
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('hackathons'),
};

export default migration;
