'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('webtoons', [{
        title: 'Dr.Stone',
        genre: 'Sci-fi',
        image: 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
        created_by: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    {
        title: 'Attack On Titan',
        genre: 'Action',
        image: 'https://electricbento.com/wp-content/uploads/2019/07/Attack-on-titan-2-final-battle-1.jpg',
        created_by: 1,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        title: 'One Punch Man',
        genre: 'Action',
        image: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf_Q6TuJMGayw1sOFrsEpAXK4TwRtwJjaQ5N1ovAn02CeyfJzoAyHtGu4Rx6NnH1jPb9LsGIwidYfbl2jgtqQG8jKq7i-fmd_Q.jpg?r=d7c',
        created_by: 1,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        title: 'Kimetsu No Yaiba',
        genre: 'Drama',
        image: 'https://i.kym-cdn.com/entries/icons/original/000/030/978/demon-slayer-poster-1163650-1280x0.jpeg',
        created_by: 1,
        createdAt : new Date(),
        updatedAt : new Date()
    }
    ],);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('webtoons', null, {});
  }
};
