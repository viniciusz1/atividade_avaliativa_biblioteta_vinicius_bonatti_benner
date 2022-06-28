const express = require('express');
const router = express.Router();

const autoresHandleer = require('./autores.handler')

router.get('/', (req, res) => {
    res.send("<h1>O BONATTI É MUITO LINDO</h1>")
})

module.exports = router;