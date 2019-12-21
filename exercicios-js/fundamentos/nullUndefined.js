let valor // nao incializada

console.log(valor)

valor = null
console.log(valor)

//console.log(valor.toStrin())/// nao pode ler string de variavel null

const produto = {}

console.log(produto.preco) /// nao definimos o preço no objeto produto

console.log(produto)

produto.preco = 3.50

console.log(produto.preco)

produto.preco = undefined /// evite atribuir undefined

console.log(produto)

produto.preco = null /// produto sem preço

console.log(produto)