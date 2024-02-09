const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../UCLA-VIRT-FSF-PT-08-2023-U-LOLC/13-ORM/02-Challenge/Develop/config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
