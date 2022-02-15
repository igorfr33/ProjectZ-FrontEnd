function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(estado){
    linha = document.createElement("option")
    opEstado = document.createElement("option")

    opEstado.innerHTML = estado.nome_Estado

    linha.appendChild(opEstado);

    return linha;
}

function main(){
   let data = fazGet("https://localhost:7280/api/ListAllCities")
   let tabela = document.getElementById("inputEstado")
   let estado = JSON.parse(data)

   estado.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()