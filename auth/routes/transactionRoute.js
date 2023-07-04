const express = require('express');
const { savedTransaction} = require('../controllers/transactionController');

const router = express.Router();

router.route('/transaction').post(savedTransaction);

module.exports = router;