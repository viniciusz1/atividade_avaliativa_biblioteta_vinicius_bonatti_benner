async function adicionarCliente(dadosParametro){
    const crud = require('./../../crud');
    const dados = await crud.save('clientes','1',dadosParametro)
    console.log(dados)
}

async function buscarCliente(){     
    const crud = require('./../../crud');
    return await crud.get('livros')
}

module.exports = {
    adicionarCliente,
    buscarCliente
}