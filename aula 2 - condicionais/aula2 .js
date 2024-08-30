// Exemplo de código para retorno de condição boleana

/* let numero = 10;
let eNumeroPar = numero % 2 === 0;

console.log(eNumeroPar) */

// Exemplo de condição com operação boleana sobre impar ou par

let numero = 10;
let eNumeroDiviselPor5 = numero % 5 === 0;

if (numero === 0){
    console.log(`O número digitado é 0.`)
}
else if(numero === 5){
    console.log(`O número digita é 5.`)
}
else if(eNumeroDiviselPor5){
    console.log(`O número ${numero} é divisivel por 5.`)
}
else{
    console.log(`O número ${numero} não é divisel por 5.`)
}
