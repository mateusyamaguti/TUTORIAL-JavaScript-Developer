// Criando uma classe
class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = 2024 - this.idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
    }
};

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const mateus = new Pessoa('Mateus', 27);
const tiago = new Pessoa('Tiago', 27);

compararPessoas(mateus, tiago)