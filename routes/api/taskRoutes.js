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
    createdAt: new Date
  });

  newTask.save()
    .then(task => res.json(task))
    .catch(err => { if (err) throw err })
});

// @api   PATCH
// @desc  update task
router.patch('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, {
    task: req.body.task
  }, (err, docs) => {
    if (err) throw err;
    res.json({
      "updated": docs
    })
  });
});

// @api   PATCH
// @desc  mark task as completed
router.patch('/:id/completed', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, {
    completedAt: new Date
  }, (err, docs) => {
    if (err) throw err;
    res.json({
      "completed task": docs
    })
  });
});

// @api   DELETE
// @desc  delete a task
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) throw err;
    res.json({
      "deleted": docs
    })
  });
});



module.exports = router;