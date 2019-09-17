'use strict';
const faker= require('faker');
let courses=[];

for(let i=0; i<=50; i++){
  courses.push({
    name:faker.lorem.word(),
    code: faker.random.alphaNumeric(),
    description: faker.lorem.paragraph(),
    lecture_hours: Math.floor(Math.random() * 4),
    lab_hours: Math.floor(Math.random() * 4),
    credit_hours: Math.floor(Math.random() * 4),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', courses, {}

    );
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Courses', null, {});
    
  }
};
