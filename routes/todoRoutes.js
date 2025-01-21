const express = require('express');

const {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
} = require('../controllers/todoContoller');

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.get('/add', createTodo);
router.get('/edit/:id', updateTodo);
router.get('/delete/:id', deleteTodo);

module.exports = router;