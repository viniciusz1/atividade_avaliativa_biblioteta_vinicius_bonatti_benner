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
        
        
        const dados = await crud.save('locacoes', null, {idCliente: dadosParametro.idCliente})
        let destruirLocacao = true
        
        for(let i of dadosParametro.livros){ //Atribui os valores a tabela locacoesELivros
            const estaAlugado = await verificaSeLivroJaFoiAlugado(i)
            if(estaAlugado){
                console.log("acho que ta alugado mano")
            }else{
                await crud.save('locacoesELivros', null, {
                    idLocacoes: dados.id,
                    isbnLivro: i
                })
                destruirLocacao = false
                console.log("acho que não ta alugado mano")
            }         
        }

        if(destruirLocacao){
            const teste = await crud.remove('locacoes', dados.id.toString())
            console.log(teste)
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

async function editarLocacoes(locacao){
    return await crud.save('locacoes', 'FbI8reVMAb90RveeTfVb', locacao)
}
async function deletarLocacao(idLocacao){
    return await crud.remove('locacoes', idLocacao)
}

async function buscarLocacao(){     
    return await crud.get('locacoes')
}

module.exports = {
    adicionarLocacao,
    buscarLocacoes
}