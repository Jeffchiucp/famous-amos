'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthday: DataTypes.DATE,
    favoriteFood: DataTypes.STRING,
    picUrl: {type: DataTypes.STRING, validate: { isUrl: true } },
    picUrlSq: {type: DataTypes.STRING, validate: { isUrl: true } },
    description: DataTypes.TEXT
  });

  Pet.associate = function(models){
      Pet.hasMany(models.Comment);
      sequelize.sync
  };
  return Pet;
};
