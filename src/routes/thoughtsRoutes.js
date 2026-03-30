const express = require('express');
const router = express.Router();

// Thought Controller
const ThoughtController = require('../controllers/ThoughtController');

router.get('/', ThoughtController.showThought);

module.exports = router;
