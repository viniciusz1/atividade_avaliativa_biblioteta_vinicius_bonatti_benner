async function adicionar(dadosParametro){
    const crud = require('./../../crud');
    const dados = await crud.save('editora','1',dadosParametro)
    console.log(dados)
}

module.exports = {
    adicionar
};