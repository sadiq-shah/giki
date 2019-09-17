'use strict';
const faker= require('faker');
const helpers=require('../functions/helpers');
const Faculty= require('../models').Faculty;
const bcrypt=require('bcryptjs');

let faculties=[];
let faculty_members=[];

for(let i=0; i<=50; i++){
  faculties.push({
    name:faker.name.firstName(),
    slug: helpers.toSlug(faker.lorem.words()),
    dean_id: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  
  
  
}



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Faculties', faculties, {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Faculties', null, {});
    
  }
};
