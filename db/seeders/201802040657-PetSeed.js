'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let petArr = [];
    for (i = 0; i < 100; i++) {
      userArr.push({
          createdAt: new Date(),
          updateAt: new Date(),
          name: "Rex" + i,
          species: "Rottweiler",
          birthday: "20017-11-11",
          favoriteFood: "Chicken",
          picUrl: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-3.jpg",
          picUrlSq: "http://www.dogbreedplus.com/dog_breeds/images/cute-rottweiler-puppy.jpg",
          description: "Rex is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food"
      })
    }
    return queryInterface.bulkInsert('Pets', petArr)


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
