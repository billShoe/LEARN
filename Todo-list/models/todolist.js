'use strict';
module.exports = (sequelize, DataTypes) => {
  var toDoList = sequelize.define('toDoList', {
    task: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return toDoList;
};