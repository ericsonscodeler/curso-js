const pessoa = {
    nome: 'Ericson',
    idade: 22,
    endereco: {
        lagradouro: 'Rua ABC',
        numero: 1000
    }
        
}

const {nome,idade} = pessoa

console.log(nome,idade)

const {nome: n,idade: i} = pessoa

console.log(n,i)