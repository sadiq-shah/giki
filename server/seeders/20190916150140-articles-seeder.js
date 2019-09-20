'use strict';
const faker= require('faker');
let articles=[];

for(let i=0; i<=50; i++){
  articles.push({
    heading:faker.lorem.words(),
    content: faker.lorem.paragraph(),
    page_tag_id: faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', articles, {}

    );
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Articles', null, {});
    
  }
};
