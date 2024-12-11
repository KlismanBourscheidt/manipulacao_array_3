const prompt = require("prompt-sync")()

function arrayPar(){

    lista = []

    for(let i = 1; i <= 8; i++){
        let num = Number(prompt("Digite um numero para acrescentar na lista: "))
        lista.push(num)
        console.log(lista)
    }

    console.log("Chegamos ao fim dos testes.")


    const result = lista.filter(divisao)
    console.log(result)
    
}

function divisao(value){
    return value %2 === 0
}

arrayPar()