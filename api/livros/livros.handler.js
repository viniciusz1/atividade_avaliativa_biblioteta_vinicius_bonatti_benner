const crud = require('./../../crud');

async function adicionarLivro(dadosParametro){//funcionando ok
    await crud.save('livros', dadosParametro.isbn.toString(), {
        genero: dadosParametro.genero,
        titulo: dadosParametro.titulo,
        editora: dadosParametro.editora
    })

    for(let i of dadosParametro.autor){
        console.log(i)
        let dadosAutoresLivro = {
            autor: i,
            isbn: dadosParametro.isbn
        }
        console.log(await crud.save('autorElivro', null, dadosAutoresLivro))
    } 
}

async function buscarLivros(){     
    return await crud.get('livros')
}

module.exports = {
    adicionarLivro,
    buscarLivros
}