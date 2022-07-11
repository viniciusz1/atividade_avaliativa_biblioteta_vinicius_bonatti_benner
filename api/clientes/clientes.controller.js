const express = require('express');
const router = express.Router();

const clientesHandler = require('./clientes.handler')

router.post('/', (req, res) => {
    res.json(clientesHandler.adicionarCliente(req.body))
})
router.get('/', (req, res) => {
    res.json(clientesHandler.buscarCliente())
})
module.exports = router;