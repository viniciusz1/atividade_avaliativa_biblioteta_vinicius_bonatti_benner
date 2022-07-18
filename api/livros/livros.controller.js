const express = require('express');
const router = express.Router();

const livrosHandler = require('./livros.handler')

router.post('/', (req, res) => {
    res.json(livrosHandler.adicionarLivro(req.body))
})
router.get('/', (req, res) => {
    res.json(livrosHandler.buscarLivros())
})
module.exports = router;