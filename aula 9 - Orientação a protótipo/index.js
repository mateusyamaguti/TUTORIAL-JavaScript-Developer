
/* function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}.`)
}

const renan = new Pessoa('Renan', 30)

renan.falar()
*/

// Function Declaration

/* function nomeDaFuncao(){
    console.log('nome da função')
}

const nomeDaOutraFuncao = function(){
    console.log('Nome da outra função')
}

nomeDaFuncao()
nomeDaOutraFuncao()
*/

// Filter
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)