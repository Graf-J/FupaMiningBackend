const express = require('express');
const router = express.Router();

// Import Controller
const playerController = require('../controller/player.controller');

// Endpoints
router.get('/all', playerController.getAll);
router.get('/:id', playerController.getById);

// Export Router
module.exports = router;