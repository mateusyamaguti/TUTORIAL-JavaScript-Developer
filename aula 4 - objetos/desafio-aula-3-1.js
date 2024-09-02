/*
    Crie uma clase para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível po quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto 
    em reais para realizar esse percurso
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;
    res;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularValorDaViagem(distancia, precoDoCombustivel){
        const res = distancia * precoDoCombustivel * this.gastoMedioPorKm
        return res.toFixed(2)
    }
}

const uno = new Carro('Fiat', 'Preto', (1/12))

// console.log(uno)
valorGasto = uno.calcularValorDaViagem(100, 5.99)
console.log(valorGasto)