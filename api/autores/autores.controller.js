const express = require('express');
const router = express.Router();

const autoresHandler = require('./autores.handler')

router.post('/', (req, res) => {
    res.json(autoresHandler.adicionarAutores(req.body))
})
router.get('/', (req, res) => {
    res.json(autoresHandler.buscarAutores())
})
module.exports = router;