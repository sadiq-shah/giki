'use strict';
const faker= require('faker');
const bcrypt= require('bcryptjs');
const helpers= require('../functions/helpers');

let users=[];

for(let i=0; i<=50; i++){
  users.push({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(faker.lorem.word(), 10),
    role_id: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {}

    );
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
