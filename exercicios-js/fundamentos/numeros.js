const peso1 = 1.0
const peso2 = Number('2.0')

Number // funcao
number // tipo da variavel number

console.log (peso1,peso2)
console.log(Number.isInteger(peso1)) // verificar se a variavel peso 1 é do tipo number , e retorna boolean


const avaliacao1 = 9.1232
const avaliacao2 = 6.1232

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // limitar casas decimais

console.log(media.toString(2)) // transforma em binario

console.log(media.toString())// transformar media em string

console.log(typeof media)