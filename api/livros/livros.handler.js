async function adicionarLivro(dadosParametro){
    const crud = require('./../../crud');
    const dados = await crud.save('livros','1',dadosParametro)
    console.log(dados)
}

async function buscarLivros(){     
    const crud = require('./../../crud');
    return await crud.get('livros')
}

module.exports = {
    adicionarLivro,
    buscarLivros
}