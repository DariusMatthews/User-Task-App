const express = require('express');
const router = express.Router();
const Task = require('../../models/Task');

// @api   GET
// @desc  get all task
router.get('/', () => {

});

// @api   POST
// @desc  create task
router.post('/', () => {

});

// @api   PATCH
// @desc  update task/mark task as completed
router.patch('/:id', () => {

});

// @api   DELETE
// @desc  delete a task
router.delete('/:id', () => {

});



module.exports = router;