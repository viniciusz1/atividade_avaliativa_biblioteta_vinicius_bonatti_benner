const clientesHandler = require('../clientes/clientes.handler')
const crud = require('./../../crud');


async function verificaSeLivroJaFoiAlugado(isbnLivro){
    let livroElocacoes = await buscarLocacoes()
    // let locacao = await

    for(let i of locacoes){
        if(isbnLivro == livroElocacoes.isbnLivro){
            return true
        }
    }
    return false
}


async function adicionarLocacao(dadosParametro){
    // o livro alugado não pode ser alugado por outro cliente
    console.log(verificaSeLivroJaFoiAlugado(dadosParametro.))

    let locacoes = await buscarLocacoes()
    if(!locacoes.some(e => e.idCliente == dadosParametro.idCliente)){ // caso o cliente já ter um aluguel
        objClienteId = {idCliente: dadosParametro.idCliente}
        const dados = await crud.save('locacoes', null, objClienteId)
        let novosDados = {}
        for(let i of dadosParametro.livros){
            let locacoesELivrosObj = {
                idLocacoes: dados.id,
                isbnLivro: dadosParametro.livros[i-1]
            }
            novosDados = await crud.save('locacoesELivros', null, locacoesELivrosObj)
        }
    }else{
        console.log("este cliente já tem um livro em locação")
    }

}

async function buscarLocacoes(){     
    return await crud.get('locacoes')
}

module.exports = {
    adicionarLocacao,
    buscarLocacoes
}