function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(solicitacao){


    return linha;
}

function main(){
   let data = fazGet("https://localhost:7280/api/ListAllCities")
   console.log(data)
}

main()