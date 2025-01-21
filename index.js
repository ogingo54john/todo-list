const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');

// require routes
const todoRoute = require('./routes/todoRoutes');
const todoActivity = require('./routes/activityRoutes');

const PORT = process.env.PORT || 5000;

// initialize your routes here
app.use('/api/todos', todoRoute);
app.use('/api/activity',todoActivity);

app.listen(PORT, (err)=>{
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
        process.exit(1);
    }
    console.log(`App listening on ${PORT}`);
});