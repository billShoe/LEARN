'use strict';

let TodoList = require('../models').TodoList

module.exports = {
  up: function (queryInterface, Sequelize) {
    return TodoList.findAll().then(function(lists){
      let todoPromises = lists.map(function(list){
        return queryInterface.bulkInsert('Todos',
        [
          //nothing ])
        ]
      })
      return Promise.all(todoPromises)
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {})
  }
};
