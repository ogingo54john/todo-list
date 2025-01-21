const pool = require('../config/db');

// Get all todos
exports.getAllTodos = async () => {
    const [rows] = await pool.query('SELECT * FROM todos');
    return rows;
};

// Get a single todo by ID
exports.getTodoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
    return rows[0];
};

// Create a new todo
exports.createTodo = async (title, description) => {
    const [result] = await pool.query(
        'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
        [title, description, false]
    );
    return { id: result.insertId };
};

// Update a todo
exports.updateTodo = async (id, title, description, completed) => {
    const [result] = await pool.query(
        'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?',
        [title, description, completed, id]
    );
    return result.affectedRows;
};

// Delete a todo
exports.deleteTodo = async (id) => {
    const [result] = await pool.query('DELETE FROM todos WHERE id = ?', [id]);
    return result.affectedRows;
};