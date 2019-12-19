const valores = [7.7,8.2,7.1]
console.log (valores[0],valores[1])

console.log (valores[4]) // nao existe

valores[4]= 5.3

valores [11] = 20

console.log(valores)


console.log(valores.length)

valores.push({id:3},false,null,'teste') // inserindo dados no array
console.log(valores)

console.log(valores.pop())// pega o ultimo valor do array.

delete valores[0] // deleta o valor da posicao 0

console.log(valores)

console.log(typeof valores) /// array é do tipo object


