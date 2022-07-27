const crud = require('./../../crud');

async function adicionarEditora(dadosParametro){
    const dados = await crud.save('editoras', dadosParametro.cnpj, {nome: dadosParametro.nome})
    console.log(dados)
}

async function buscarEditoras(){     
    return await crud.get('editoras')
}
async function editarEditora(editora){
    return await crud.save('editoras', 'FbI8reVMAb90RveeTfVb', editora)
}
async function deletarEditora(cnpjEditora){
    return await crud.remove('editoras', cnpjEditora)
}

module.exports = {
    adicionarEditora
};