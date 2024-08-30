/*
Faça um programa para calcular o valor de uma viagem

Você tera 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio do combustível do carro por Km;
5 - Distância em Km da viagem.

Imprima no console o valor total que será gasto na viagem.

*/

let precoEtanol = 2.99;
let precoGasolina = 5.99;
let tipoDeCombustivel = 'Etanol';
let gastoMedioEtanol = 14; // 14km/litro
let gastoMedioGasolina = 17;
let distanciaViagem = 100;

if (tipoDeCombustivel === 'Etanol'){
    valorDaViagem = distanciaViagem * (precoEtanol / gastoMedioEtanol);
    console.log(`Valor gasto na viagem utilizanod etanol foi de R$${valorDaViagem.toFixed(2)}`)
}
else{
    valorDaViagem = distanciaViagem * (precoGasolina / gastoMedioGasolina);
    console.log(`Valor gasto na viagem utilizando gasolina foi de R$${valorDaViagem.toFixed(2)}`)
}