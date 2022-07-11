const express = require('express');
const router = express.Router();

const clientesHandler = require('./clientes.handler')

router.post('/', (req, res) => {
    res.json(clientesHandler.adicionarCliente(req.body))
})
router.get('/', (req, res) => {
    res.json(clientesHandler.buscarCliente())
})
router.get('/:id', (req, res) => {
    const cliente = clientesHandler.buscarClientesPorId(req.params.id)
    console.log(cliente)
    res.json(clientesHandler.buscarClientesPorId(req.params.id) )
})
module.exports = router;