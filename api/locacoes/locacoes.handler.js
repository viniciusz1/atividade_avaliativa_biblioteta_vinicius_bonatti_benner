const clientesHandler = require('../clientes/clientes.handler')
const crud = require('./../../crud');



async function adicionarLocacao(dadosParametro){
    let locacoes = (await buscarLocacoes()).some(e => {
        if(e.idCliente == dadosParametro.idCliente){
            return
        }
    })
    console.log(locacoes)
    if(true){ // caso o cliente já ter um aluguel
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
    }

}

async function buscarLocacoes(){     
    return await crud.get('locacoes')
}

module.exports = {
    adicionarLocacao,
    buscarLocacoes
}