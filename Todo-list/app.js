let Task = require('./models').toDoList

// Task.create({
//   task: 'Create to-do list',
//   description: 'Pretty fricken obvious',
//   due_date: 2017-12-21,
//   completed: false
// }).then(function(task){
//   console.log(task.get())
// }).catch(function(error){
//   console.log(error)
// })

Task.create({
  task: 'Push to GitHub',
  description: 'Put in on GitHub',
  due_date: 2017-12-21,
  completed: false
}).then(function(task){
  console.log(task.get())
}).catch(function(error){
  console.log(error)
})
