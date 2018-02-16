'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pets', [

              { name: "Puppy", species: "Rex", birthday: "2017-11-11", favoriteFood: "food", picUrl: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg", picUrlSq: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg", description: "Rex is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food", createdAt: new Date(), updatedAt: new Date(), id: 5 },
              { name: "Rex", species: "Rex", birthday: "2017-11-11", favoriteFood: "food", picUrl: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg", picUrlSq: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg", description: "Rex is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food", createdAt: new Date(), updatedAt: new Date(), id: 1 },
              { name: "Fido", species: "Greyhound", birthday: "2017-11-11", favoriteFood: "food", picUrl: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", picUrlSq: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", description: "Fido is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food", createdAt: new Date(), updatedAt: new Date(), id: 2 },
              { name: "Fido2", species: "Greyhound", birthday: "2017-11-11", favoriteFood: "food", picUrl: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", picUrlSq: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", description: "Fido is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food", createdAt: new Date(), updatedAt: new Date(), id: 3 },
              { name: "Fido3", species: "Greyhound", birthday: "2017-11-11", favoriteFood: "food", picUrl: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", picUrlSq: "http://www.gpamass.com/s/img/emotionheader713297504.jpg", description: "Fido is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food", createdAt: new Date(), updatedAt: new Date(), id: 4 },
          ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // return queryInterface.bulkInsert('Pets', petArr)


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};



// 'Pet', {
//     name: {type: DataTypes.STRING, validate: { len: [1, 100] }},
//     species: {type: DataTypes.STRING, validate: { len: [1, 40] }},
//     birthday: DataTypes.DATE,
//     favoriteFood: {type: DataTypes.STRING, validate: { len: [1, 240] }},
//     picUrl: {type: DataTypes.STRING, validate: { isUrl: true } }, //validate URL
//     picUrlSq: {type: DataTypes.STRING, validate: { isUrl: true } }, //validateURL
//     description: DataTypes.TEXT
//   });
    // let petArr = [];
    // userArr
    // for (var i = 0; i < 100; i++) {
    //   userArr.push({
    //       createdAt: new Date(),
    //       updateAt: new Date(),
    //       name: "Rex" + i,
    //       species: "Rottweiler",
    //       birthday: "20017-11-11",
    //       favoriteFood: "Chicken",
    //       picUrl: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg",
    //       picUrlSq: "http://www.dogbreedplus.com/dog_breeds/images/cute-rottweiler-puppy.jpg",
    //       description: "Rex is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food"
    //   })
    // }
