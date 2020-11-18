const db = require('../database/db');

// Export the Callbackfunctions
exports.getAll = (req, res) => {
    const sql = 'SELECT * FROM players';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}

exports.getById = (req, res) => {
    const sql = `SELECT * FROM players WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        const result = results[0];
        if (err) throw err;
        if (!result) res.status(404).json({ message: 'Did not find any Player with that ID' })
        res.send(result);
    })
}