function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(lider){
    linha = document.createElement("option")
    opLider = document.createElement("option")

    opLider.innerHTML = lider.nome_Lider

    linha.appendChild(opLider);

    return linha;
}

function main(){
   let data = fazGet("https://localhost:7280/api/ListAllCities")
   let tabela = document.getElementById("inputLider")
   let lider = JSON.parse(data)

   lider.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()