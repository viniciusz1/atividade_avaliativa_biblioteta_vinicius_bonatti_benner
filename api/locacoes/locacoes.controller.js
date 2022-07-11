const express = require('express');
const router = express.Router();

const locacoesHandler = require('./locacoes.handler')

router.post('/', (req, res) => {
    res.json(locacoesHandler.adicionarLocacao(req.body))
})
router.get('/', (req, res) => {
    res.json(locacoesHandler.buscarLocacoes())
})
module.exports = router;