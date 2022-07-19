const crud = require('./../../crud');
const autorHandler = require('../autores/autores.handler')

async function adicionarLivro(dadosParametro){//Só funciona se o autor existir
    await crud.save('livros', dadosParametro.isbn.toString(), {
        genero: dadosParametro.genero,
        titulo: dadosParametro.titulo,
        editora: dadosParametro.editora //Verificar se existe
    })
    for(let i of dadosParametro.autor){
        if(await autorHandler.verificaSeAutorExiste(i)){
            let dadosAutoresLivro = {
                autor: i,
                isbn: dadosParametro.isbn
               }
            await crud.save('autorElivro', null, dadosAutoresLivro)
        }else{
            console.log("id ", i, "de Autor, não existe")
        }
    } 
}



async function buscarLivros(){     
    return await crud.get('livros')
}

module.exports = {
    adicionarLivro,
    buscarLivros
}