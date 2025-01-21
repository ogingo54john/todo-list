const activityModel = require('../models/activityModel');

// Get all activities
exports.getActivities = async (req, res) => {
    try {
        const activities = await activityModel.getAllActivities();
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Get a specific activity by ID
exports.getActivity = async (req, res) => {
    try {
        const activity = await activityModel.getActivityById(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Create a new activity
exports.createActivity = async (req, res) => {
    const { todo_id, activity } = req.body;
    if (!todo_id || !activity) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const activityId = await activityModel.createActivity(todo_id, activity);
        res.status(201).json({ message: 'Activity created successfully', id: activityId });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Update an activity
exports.updateActivity = async (req, res) => {
    const { activity, completed } = req.body;
    const { id } = req.params;

    if (activity === undefined || completed === undefined) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const updated = await activityModel.updateActivity(id, { activity, completed });
        if (!updated) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Delete an activity
exports.deleteActivity = async (req, res) => {
    try {
        const deleted = await activityModel.deleteActivity(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Get activities by todo_id
exports.getActivitiesByTodoId = async (req, res) => {
    try {
        const activities = await activityModel.getActivitiesByTodoId(req.params.todo_id);
        if (activities.length === 0) {
            return res.status(404).json({ message: 'No activities found for this Todo' });
        }
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

