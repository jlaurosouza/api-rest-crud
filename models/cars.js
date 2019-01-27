'use strict';
module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define('cars', {
    name: DataTypes.STRING,
    model_name: DataTypes.STRING,
    current_km: DataTypes.STRING,
    soft: true,
  }, {});
  cars.associate = function(models) {
    // associations can be defined here
  };
  return cars;
};
