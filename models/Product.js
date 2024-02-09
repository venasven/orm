
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../UCLA-VIRT-FSF-PT-08-2023-U-LOLC/13-ORM/02-Challenge/Develop/config/connection');


class Product extends Model {}

Product.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
