const migration = {
  up: (iface, Sequelize) => iface.sequelize.transaction(transaction => Promise.all([
    iface.addColumn('users', 'password', Sequelize.STRING, { transaction }),
    iface.addColumn('users', 'salt', Sequelize.STRING, { transaction }),
  ])),
  down: (iface, Sequelize) => iface.sequelize.transaction(transaction => Promise.all([
    iface.removeColumn('users', 'password', Sequelize.STRING, { transaction }),
    iface.removeColumn('users', 'salt', Sequelize.STRING, { transaction }),
  ])),
};

export default migration;
