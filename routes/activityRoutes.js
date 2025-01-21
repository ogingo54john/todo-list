const express = require('express');
const {
    getActivities,
    getActivity,
    createActivity,
    updateActivity,
    deleteActivity,
    getActivitiesByTodoId,
} = require('../controllers/activityController');

const router = express.Router();

router.get('/', getActivities); // Get all activities
router.get('/:id', getActivity); // Get a specific activity by ID
router.post('/add', createActivity); // Add a new activity
router.put('/edit/:id', updateActivity); // Update an activity
router.delete('/delete/:id', deleteActivity); // Delete an activity
router.get('/todo/:todo_id', getActivitiesByTodoId); // Get activities by todo_id

module.exports = router;
