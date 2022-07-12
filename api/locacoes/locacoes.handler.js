const clientesHandler = require('../clientes/clientes.handler')
const crud = require('./../../crud');


async function verificaSeLivroJaFoiAlugado(){
    
}


async function adicionarLocacao(dadosParametro){

    let locacoes = await buscarLocacoes()
    if(!locacoes.some(e => e.idCliente == dadosParametro.idCliente)){ // caso o cliente já ter um aluguel
        objClienteId = {idCliente: dadosParametro.idCliente}
        const dados = await crud.save('locacoes', null, objClienteId)
        let novosDados = {}
        for(let i of dadosParametro.livros){
            let locacoesELivrosObj = {
                idLocacoes: dados.id,
                isbnLivro: dadosParametro.livros[i]
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