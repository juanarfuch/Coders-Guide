const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const authMiddleware = require('../middleware/authMiddleware');//Esto no esta creado aun
const openaiController = require('../controllers/openaiController');

router.get('/profile', authMiddleware, resourceController.getProfile);
router.put('/profile', authMiddleware, resourceController.updateProfile);
router.get('/resources', authMiddleware, resourceController.getResources);
router.get('/generate', authMiddleware, openaiController.generateResources);

module.exports = router;