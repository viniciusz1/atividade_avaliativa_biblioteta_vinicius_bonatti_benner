const clientesHandler = require('../clientes/clientes.handler')
const crud = require('./../../crud');

async function verificaSeLivroJaFoiAlugado(isbnLivro){
    let livroElocacoes = await buscarlocacoesELivros()    
    return livroElocacoes.some(e => e.isbnLivro == isbnLivro)
}

async function verificaSeClienteJaTemUmAluguel(idCliente){    
    let locacoes = await buscarLocacoes() 
    return locacoes.some(e => e.idCliente == idCliente) //Retorna verdadeiro caso tiver um aluguel
}

async function adicionarLocacao(dadosParametro){// retorno idCliente: 2, livros: [ 1, 2, 3, 4, 5 ]
    const locacaoCliente = await verificaSeClienteJaTemUmAluguel(dadosParametro.idCliente)
    if(!locacaoCliente){ // caso o cliente já ter um aluguel -- ok
        for(let i of dadosParametro.livros){ //Atribui os valores a tabela locacoesELivros
            locacoesELivrosObj={}
            const estaAlugado = await verificaSeLivroJaFoiAlugado(i)
            if(estaAlugado){
                console.log("acho que ta alugado mano")
            }else{
                const dados = await crud.save('locacoes', null, {idCliente: dadosParametro.idCliente})
                locacoesELivrosObj = {
                    idLocacoes: dados.id,
                    isbnLivro: dadosParametro.livros[i-1]
                }
                await crud.save('locacoesELivros', null, locacoesELivrosObj)
                console.log("acho que não ta alugado mano")
            }         
        }
    }else{
        console.log("este cliente já tem um livro em locação")
    }
}

async function buscarlocacoesELivros(){     
    return await crud.get('locacoesELivros')
}

async function buscarLocacoes(){     
    return await crud.get('locacoes')
}

module.exports = {
    adicionarLocacao,
    buscarLocacoes
}