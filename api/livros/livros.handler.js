async function adicionarLivro(dadosParametro){
    const crud = require('./../../crud');

    const dadosLivro = {
        genero: dadosParametro.genero,
        titulo: dadosParametro.titulo,
        editora: dadosParametro.editora
    }
    console.log(await crud.save('livros', dadosParametro.isbn.toString(), dadosLivro))

    for(let i of dadosParametro.autor){
        console.log(dadosParametro.autor[i-1])
        let dadosAutoresLivro = {
            autor: dadosParametro.autor[i-1],
            isbn: dadosParametro.isbn
        }
        console.log(await crud.save('autorElivro', null, dadosAutoresLivro))
    }



}

async function buscarLivros(){     
    const crud = require('./../../crud');
    return await crud.get('livros')
}

module.exports = {
    adicionarLivro,
    buscarLivros
}