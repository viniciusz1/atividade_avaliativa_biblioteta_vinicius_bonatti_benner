const crud = require('./crud');

async function buscarDados(){
    const dados = await crud.get('pessoas')
    console.log(dados);
}

async function buscarDadoid(){
    const dados = await crud.getById('pessoas', 'FbI8reVMAb90RveeTfVb')
    console.log(dados);
}

async function deletar(){
    const dados = await crud.remove('pessoas', 'FbI8reVMAb90RveeTfVb')
    console.log(dados);
}
async function adicionar(){
    const objeto = {
        sim: "aghan",
        nao: "osifdjao"
    }
    const dados = await crud.save('pessoas', 'FbI8reVMAb90RveeTfVb', objeto)
    console.log(dados);
}

adicionar();
// buscarDados()
// buscarDadoid()
// deletar();