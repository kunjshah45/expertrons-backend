const router = require('express').Router();

const Task = require('../models/tasks.models');

router.route('/').get((req, res) => {
    Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const assigned_date = Date.parse(req.body.assigned_date);
  const name = req.body.name;
  const assigned_to = req.body.assigned_to;
  const deadline = Date.parse(req.body.deadline);
  const description = req.body.description;
    
    const newTask = new Task({
      assigned_date,
      name,
      assigned_to,
      deadline,
      description
    });

    newTask.save()
    .then(() => res.json('Task Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
  .then(task => {
    if(task.assigned_date) task.assigned_date = Date.parse(req.body.assigned_date); 
    if(task.name) task.name = req.body.name;
    if(task.assigned_to) task.assigned_to = req.body.assigned_to;
    if(task.deadline) task.deadline = Date.parse(req.body.deadline);
    if(task.description) task.description = req.body.description;

    task.save()
    .then(() => res.json("Task Updated!"))
    .catch(err => res.status(400).json('Error : ' + err));
  })
  .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id)
  .then(task => res.json(task))
  .catch(err => res.status(400).json('Error : ' + err))
});

router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
  .then(() => res.json('Task deleted'))
  .catch(err => res.status(400).json('Error : ' + err))
});

module.exports = router;