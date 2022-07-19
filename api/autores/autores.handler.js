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

async function buscarAutor(){     
    return await crud.get('autores')
}
async function editarAutor(){
    return await crud.get()
}
async function deletarAutor(idAutor){
    return await crud.remove('autores', idAutor)
}
module.exports = {
    adicionarAutor,
    buscarAutor,
    verificaSeAutorExiste
}