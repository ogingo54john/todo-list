const pool = require('../config/db');

// Get all activities
exports.getAllActivities = async () => {
    const [rows] = await pool.query('SELECT * FROM activities');
    return rows;
};

// Get a specific activity by ID
exports.getActivityById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM activities WHERE id = ?', [id]);
    return rows[0];
};

// Create a new activity
exports.createActivity = async (todo_id, activity) => {
    const [result] = await pool.query('INSERT INTO activities (todo_id, activity) VALUES (?, ?)', [todo_id, activity]);
    return result.insertId;
};

// Update an existing activity
exports.updateActivity = async (id, updatedActivity) => {
    const [result] = await pool.query(
        'UPDATE activities SET activity = ?, completed = ? WHERE id = ?',
        [updatedActivity.activity, updatedActivity.completed, id]
    );
    return result.affectedRows;
};

// Delete an activity
exports.deleteActivity = async (id) => {
    const [result] = await pool.query('DELETE FROM activities WHERE id = ?', [id]);
    return result.affectedRows;
};

// Get activities by todo_id
exports.getActivitiesByTodoId = async (todo_id) => {
    const [rows] = await pool.query('SELECT * FROM activities WHERE todo_id = ?', [todo_id]);
    return rows;
};
