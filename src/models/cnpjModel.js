const express = require('express');
const cnpjController = require('../controller/apicnpj');
const router = express.Router();

router.get('/cnpj', cnpjController.findAll);

module.exports = router;