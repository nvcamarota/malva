'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      home: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue : false
      },
      distinguished: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue : false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue : 1
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brandId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Brands"
          },
          key : 'id'
        },
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Categories"
          },
          key : 'id'
        },
        allowNull: false
      },
      materialId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Materials"
          },
          key : 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};