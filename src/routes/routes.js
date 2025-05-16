const express = require('express')
const router = express.Router();

const routesCaique = require('./routes-caique');

router.use('/', routesCaique)
module.exports = router;