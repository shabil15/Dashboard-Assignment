const express = require('express');
const { createAuthorization, getAuthorizationsByPatient } = require('../controllers/authorizationController');
const router = express.Router();

router.post('/', createAuthorization);
router.get('/', getAuthorizationsByPatient);

module.exports = router;
