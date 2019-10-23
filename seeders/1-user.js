'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        email: 'demo@gmail.com',
        password: 'demo',
        name: 'jhon',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    {
      email: 'jhon@gmail.com',
      password: 'demo',
      name:'jhon',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ],);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
