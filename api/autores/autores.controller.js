const express = require('express');
const router = express.Router();

const autoresHandler = require('./autores.handler')

router.post('/', (req, res) => {
    res.json(autoresHandler.adicionarAutor(req.body))
})
router.get('/', (req, res) => {
    res.json(autoresHandler.buscarAutores())
})
router.put('/:id', (req, res) => {    
    res.json(autoresHandler.editarAutor(req.params.id, req.body))
})
router.delete('/:id', (req, res) => {
    res.json(autoresHandler.deletarAutor(req.params.id))
})
module.exports = router;