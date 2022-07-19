const crud = require('./../../crud');
async function adicionarAutor(dadosParametro){
    await crud.save('autores',null,{cpf: dadosParametro.cpf})
    await crud.save('pessoas',dadosParametro.cpf,{
        nome: dadosParametro.nome,
        email: dadosParametro.email
    })
    return dadosParametro
}

async function verificaSeAutorExiste(id){
    const autor = await buscarAutor();
    return autor.some(e => e.id == id);
}
async function buscarAutores(){     
    return await crud.get('autores')
}
async function editarAutor(idAutor, autor){
    return await crud.save('editora', idAutor, autor)
}
async function deletarAutor(idAutor){
    return await crud.remove('autores', idAutor)
}
module.exports = {
    adicionarAutor,
    buscarAutores,
    verificaSeAutorExiste,
    editarAutor,
    deletarAutor
}