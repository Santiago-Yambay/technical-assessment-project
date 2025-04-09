const express = require('express');
const router = express.Router();
const { handleDevOpsMessage } = require('../controllers/devops.controller');

router.post('/', handleDevOpsMessage);

module.exports = router;
