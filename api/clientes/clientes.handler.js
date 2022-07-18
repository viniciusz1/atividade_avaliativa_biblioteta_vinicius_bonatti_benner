
    const crud = require('./../../crud');

async function adicionarCliente(dadosParametro){
    await crud.save('clientes',null,{cpf: dadosParametro.cpf})
    const infoPessoa = {
        nome: dadosParametro.nome,
        email: dadosParametro.email
    }
    await crud.save('pessoas',dadosParametro.cpf,infoPessoa)
    return dadosParametro
}

async function buscarCliente(){     
    return await crud.get('clientes')
}
async function buscarClientesPorId(idCliente){
    return await crud.getById('clientes', idCliente)
    
}


module.exports = {
    adicionarCliente,
    buscarCliente,
    buscarClientesPorId
}