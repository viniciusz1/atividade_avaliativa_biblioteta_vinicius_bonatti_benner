const express = require('express');
const router = express.Router();

const autores = require('./api/autores/autores.controller');


router.use('/autores', autores);

module.exports = router;