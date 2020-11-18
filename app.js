const express = require('express');
const app = express();
require('dotenv').config();

// Import Routes
clubRouter = require('./routes/club.router');
playerRouter = require('./routes/player.router');

// Use Routes
app.use('/club', clubRouter);
app.use('/player', playerRouter);

// Start Server on Port 3000
app.listen(3000, () => console.log('Server listenes on PORT 3000 :D'))

// Export the Server for Testing
module.exports = app;