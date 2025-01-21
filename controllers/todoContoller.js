const todoModel = require('../models/todoModel');

exports.getTodos = async (req, res) => {
    try {
        const todos = await todoModel.getAllTodos();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getTodo = async (req, res) => {
    try {
        const todo = await todoModel.getTodoById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createTodo = async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    try {
        const result = await todoModel.createTodo(title, description);
        res.status(201).json({ id: result.id, title, description, completed: false });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateTodo = async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        const updatedRows = await todoModel.updateTodo(
            req.params.id,
            title,
            description,
            completed
        );
        if (!updatedRows) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const deletedRows = await todoModel.deleteTodo(req.params.id);
        if (!deletedRows) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};