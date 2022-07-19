const crud = require('./../../crud');

async function adicionar(dadosParametro){
    const dados = await crud.save('editoras', dadosParametro.id, {nome: dadosParametro.nome})
    console.log(dados)
}

async function buscarEditoras(){     
    return await crud.get('editoras')
}
async function editarEditora(editora){
    return await crud.save('editoras', 'FbI8reVMAb90RveeTfVb', editora)
}
async function deletarEditora(idEditora){
    return await crud.remove('editoras', idEditora)
}

module.exports = {
    adicionar
};