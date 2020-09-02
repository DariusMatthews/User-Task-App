const express = require('express');
const router = express.Router();
const Task = require('../../models/Task');

// @api   GET
// @desc  get all task
router.get('/', (req, res) => {
  Task.find()
    .then(task => res.json(task))
    .catch(err => { if (err) throw err });
});

// @api   POST
// @desc  create task
router.post('/', (req, res) => {
  const newTask = new Task({
    task: req.body.task,
    createdAt: new Date.toString()
  });

  newTask.save()
    .then(task => res.json(task))
    .catch(err => { if (err) throw err })
});

// @api   PATCH
// @desc  update task/mark task as completed
router.patch('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, {
    completedAt: new Date.toString()
  }, err => { if (err) throw err });
});

// @api   DELETE
// @desc  delete a task
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, err => { if (err) throw err });
});



module.exports = router;