const crud = require('./../../crud');
const autorHandler = require('../autores/autores.handler')

async function adicionarLivro(dadosParametro){//Só funciona se o autor existir
    await crud.save('livros', dadosParametro.isbn.toString(), {
        genero: dadosParametro.genero,
        titulo: dadosParametro.titulo,
        editora: dadosParametro.editora //Verificar se existe
    })
    await crud.save('editoras', dadosParametro.editora, {nome: dadosParametro.nomeEditora})
    for(let i of dadosParametro.autor){
        if(await autorHandler.verificaSeAutorExiste(i)){
            await crud.save('autorElivro', null, {
                autor: i,
                isbn: dadosParametro.isbn
               })
        }else{
            console.log("id ", i, "de Autor, não existe")
        }
    } 
}
async function verificaSeLivroExiste(isbn){
    let livro = await buscarLivros() 
    return livro.some(e => e.isbn == isbn)
}

async function editarLivro(livro){
    return await crud.save('livros', 'FbI8reVMAb90RveeTfVb', livro)
}
async function deletarLivro(idLivro){
    return await crud.remove('livros', idLivro)
}

async function buscarLivros(){     
    return await crud.get('livros')
}

module.exports = {
    adicionarLivro,
    buscarLivros
}