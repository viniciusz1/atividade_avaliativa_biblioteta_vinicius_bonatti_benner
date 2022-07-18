const express = require('express');
const router = express.Router();

const livrosHandler = require('./livros.handler')

router.post('/', (req, res) => {
    livrosHandler.adicionarLivro(req.body)
    res.json("po")
})
router.get('/', (req, res) => {
    res.json(livrosHandler.buscarLivros())
})
module.exports = router;