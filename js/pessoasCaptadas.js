function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuarios){
    linha = document.createElement("tr")
    tdId = document.createElement("th")
    tdNumeroSolicitacao = document.createElement("th")
    tdQuantidadePessoasSolicitadas = document.createElement("th")
    tdQuantidadePessoasCaptadas = document.createElement("th")


    tdNumeroSolicitacao.innerHTML = usuarios.numero_solicitacao
    tdQuantidadePessoasSolicitadas.innerHTML = usuarios.quantidade_pessoas_solicitadas
    tdQuantidadePessoasCaptadas.innerHTML = usuarios.quantidade_pessoas_captadas

    linha.appendChild(tdNumeroSolicitacao);
    linha.appendChild(tdQuantidadePessoasSolicitadas);
    linha.appendChild(tdQuantidadePessoasCaptadas);

    return linha;
}

function main(){
   let data = fazGet("https://localhost:7280/api/ListAll")
   let tabela = document.getElementById("tabela")
   let usuarios = JSON.parse(data)

   usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()