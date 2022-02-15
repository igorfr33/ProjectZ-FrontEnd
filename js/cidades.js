function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(cidades){
    linha = document.createElement("option")
    opCidade = document.createElement("option")

    opCidade.innerHTML = cidades.nome_Cidade

    linha.appendChild(opCidade);

    return linha;
}

function main(){
   let data = fazGet("https://localhost:7280/api/ListAllCities")
   let tabela = document.getElementById("inputCidades")
   let cidades = JSON.parse(data)
   console.log(cidades)

   cidades.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()