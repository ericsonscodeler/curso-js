// funcao sem return

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

imprimirSoma(2) // somar dois , com undefined number

imprimirSoma()


// funcao com return

function soma(a,b=0){
    return a+b
}

console.log(soma(5,3))
console.log(soma(5))
