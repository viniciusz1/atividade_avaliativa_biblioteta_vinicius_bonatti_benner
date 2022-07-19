const express = require('express');
const router = express.Router();

const editorasHandler = require("./editoras.handler")

router.post('/', (req, res) => {
    res.post(editorasHandler.adicionar(req.body))                                                       
})
router.get('/', (req, res) => {
    res.send("bonatti lindao")
})
module.exports = router;