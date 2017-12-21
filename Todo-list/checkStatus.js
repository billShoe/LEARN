let Task = require('./models').toDoList

// Task.findAll({limit: 1}).then(function(t){
//   t.map(function(log){
//     console.log(log);
//   })
// })

Task.all({limit: 2})
  .then(function(tasks){
  let mapped = tasks.map(function(t){
    return t.get()
  })
  console.log(mapped)
})
