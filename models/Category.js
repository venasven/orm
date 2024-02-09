const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../UCLA-VIRT-FSF-PT-08-2023-U-LOLC/13-ORM/02-Challenge/Develop/config/connection.js');

class Category extends Model {}

Category.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
