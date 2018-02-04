module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [
      {
        title: 'ПК Ритейл',
        description: 'Курс о ритейле. Вся фигня и все такое :-Р',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Тренировка с В. Кондрук',
        description: 'Кондрук, Байструк, Пейструк, Гавнюк',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Работа Васыфа',
        description: 'Васыф... уясыф... Ну вы поняли',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'ПК Маркетинг и производство',
        description: 'Производственный маркегинг и все такое типа Васыфа',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'ПК Коммерция',
        description: 'Бабло, гавно и 2 ляща',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Курс "Управление финансами"',
        description: 'Не шаришь как править бабосом? Отдавай его мне, я шарю',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};