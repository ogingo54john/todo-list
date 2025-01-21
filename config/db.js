const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    waitForConnections: true, // Wait if all connections are in use
    connectionLimit: 10,      // Limit to 10 simultaneous connections
    queueLimit: 0,            // No limit on the query queue
});

// Test the connection pool
(async function testPool() {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL todo database with connection pool.');
        const [rows] = await connection.query('SELECT 1');
        if (rows.length > 0 && rows[0][1] === 1) {
            console.log('Query successful.');
        }
        connection.release(); // Release connection back to the pool
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
})();

module.exports = pool;