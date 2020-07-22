import uuid from 'uuid/v4';

const seeder = {
  up: queryInterface => queryInterface.bulkInsert('users', [{
    id: uuid(),
    name: 'John Doe',
    email: 'john@doe.com',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};

export default seeder;
