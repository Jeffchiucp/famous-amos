'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: {type: DataTypes.STRING, validate: { len: [1, 100] }},
    species: {type: DataTypes.STRING, validate: { len: [1, 40] }},
    birthday: DataTypes.DATE,
    favoriteFood: {type: DataTypes.STRING, validate: { len: [1, 240] }},
    picUrl: {type: DataTypes.STRING, validate: { isUrl: true } }, //validate URL
    picUrlSq: {type: DataTypes.STRING, validate: { isUrl: true } }, //validateURL
    description: DataTypes.TEXT
  });

  Pet.associate = function(models){
      Pet.hasMany(models.Comment);
      sequelize.sync  //synch the database
  };
  return Pet;
};
