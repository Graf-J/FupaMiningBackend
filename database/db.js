const mysql = require('mysql');

// Create Database Connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth: true
})

// Connect to Database
db.connect((err) => {
    if (err) {
        throw err;
    }
})

// Export Database
module.exports = db;