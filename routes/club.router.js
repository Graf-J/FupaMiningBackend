const express = require('express');
const router = express.Router();

// Import Controller
const clubController = require('../controller/club.controller');

// Endpoints
router.get('/all', clubController.getAll);
router.get('/:id', clubController.getById);

// Export Router
module.exports = router;