'use strict';
const faker= require('faker');
const helpers=require('../functions/helpers');
const Role= require('../models').Role;
const Permission=require('../models').Permission;


let roles=[];
let permissions=[];
for(let i=0; i<=50; i++){
  roles.push({
    name:faker.name.firstName(),
    createdAt:new Date(),
    updatedAt:new Date()
  });
  
}



module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Roles', roles, {});
    return Role.findAll().then(roles=>{
      roles.forEach(role=>{
        
        
        
        //role.setPermissions(permissions);
        
      })
    })
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Roles', null, {});
    
  }
};
