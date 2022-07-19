const crud = require('./../../crud');
async function adicionar(dadosParametro){
    const dados = await crud.save('editora', dadosParametro.id, {nome: dadosParametro.nome})
    console.log(dados)
}

module.exports = {
    adicionar
};