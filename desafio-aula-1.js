/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio do combustível do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustivel = 5.79;
const kmPorLitros = 1;
const distanciaEmKM = 100;

const litrosConsumidos = distanciaEmKM / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log("Valor gasto na viagem: R$" + valorGasto.toFixed(2));