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
router.post('/add', createTodo);
router.put('/edit/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;