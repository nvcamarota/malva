'use strict';

/** @type {import('sequelize-cli').Migration} */

const categories = require('../../data/category.json');
const categoriesUpdated = categories.map(({category}) => {
  return {
    name: category,
    cratedAt: new Date(),
    updatedAt: new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Categories', categoriesUpdated,
    {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
