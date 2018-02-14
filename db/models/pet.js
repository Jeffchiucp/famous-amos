'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: {type: DataTypes.STRING},
    species: {type: DataTypes.STRING},
    birthday: DataTypes.DATE,
    favoriteFood: {type: DataTypes.STRING},
    picUrl: {type: DataTypes.STRING }, //validate URL
    picUrlSq: {type: DataTypes.STRING }, //validateURL
    description: DataTypes.TEXT
  });

  Pet.associate = function(models){
      Pet.hasMany(models.Comment);
      sequelize.sync  //synch the database
  };
  return Pet;
};
