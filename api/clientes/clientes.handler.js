

async function adicionarCliente(dadosParametro){
    const dados = await crud.save('clientes','1',dadosParametro)
    console.log(dados)
}

async function buscarCliente(){     
    const crud = require('./../../crud');
    return await crud.get('clientes')
}
async function buscarClientesPorId(idCliente){
    const crud = require('./../../crud');    
    return await crud.getById('clientes', idCliente)
}


module.exports = {
    adicionarCliente,
    buscarCliente,
    buscarClientesPorId
}