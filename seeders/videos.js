module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        title: 'Топим каркасную винтовку за 2000 баксов! | Разрушительное ранчо | Перевод Zёбры',
        description: 'Топим каркасную винтовку за 2000 баксов! | Разрушительное ранчо | Перевод Zёбры',
        videoId: 'KzY0McjNLE0',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Самые дорогие ружья на крупнейшей оружейной выставке мира | Разрушительное ранчо | Перевод Zёбры',
        description: 'Самые дорогие ружья на крупнейшей оружейной выставке мира | Разрушительное ранчо | Перевод Zёбры',
        videoId: 'PXGF4rjhbro',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Оружейная мега-выставка, Трамп-младший и замена Хамви | Разрушительное ранчо | Перевод Zёбры',
        description: 'Оружейная мега-выставка, Трамп-младший и замена Хамви | Разрушительное ранчо | Перевод Zёбры',
        videoId: 'QAi_LQUvzFI',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Правильная стрельба из калаша по-ютубячьи | Разрушительное ранчо | Перевод Zёбры',
        description: 'Правильная стрельба из калаша по-ютубячьи | Разрушительное ранчо | Перевод Zёбры',
        videoId: '-0TaK06iwqc',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};