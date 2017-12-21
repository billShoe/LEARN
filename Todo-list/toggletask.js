let Task = require('./models').toDoList

Task.findById(2).then(function(t){
  t.completed = t.completed ? false : true;
  return t.save();
}).catch(function(error){console.log(error);
})
