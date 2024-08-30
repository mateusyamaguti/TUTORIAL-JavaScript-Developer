### Referência DIO
[JS Developer M1](https://github.com/digitalinnovationone/javascript-developer-m1)

### Boas prática
Usar aspas simples '' ou crase ``
Sempre organizar as funções e criar uma função principal main para executar as demais
Quando criar o nome de uma função, sempre usar verbos

### Aula 1
Para executar um arquivo js basta digitar no cmd `node aula.js`<br>
Para imprimir alguma coisa no console basta digitar `console.log("Texto");`<br>
#### Como declarar um variável JS
podemos utilizar o `let`-> para variáveis que podem ser alteradas futuramente, e `const`, quando não queremos que a variável se altere. Exemplo:<br>
```
let num = 10;

num = 12;

const constante = 15;

console.log("Variável: " + num + " Constante: " + constante )
```
Para colocar comentários em js basta digitar entre as tag /* */<br>
Operadores matemáticos segue a linha de todas as linguagens de programção: +, -, * e /<br>
Operador resto da divisão é %<br>
Diferença de operadores de igualdade<br>
- Apenas um =: Atribui valor
- 2 Iguais ==: Compara igualdade, e faz implicitamente a conversão de string númerica ("0")
- 3 Iguais ===: O mais utilizado pois garante o tipo que foi atribuido<br><br>
Para colocar casas decimais fixa pode ser utilizado o método `toFixed()`

### Aula 2 - Estruturas condicionais
#### Operador boleano true e false
Quando a variável é boleana, geralmente utilizamos o prefixo "e" em português ou "is" em inglês

`const eNumeroPar = True`
Exemplo:
```
let numero = 10;
let eNumeroPar = numero % 2 === 0;

console.log(eNumeroPar)
```

#### Operadores condicionais
Exemplo de operação com operador `if`, a condição dentro do operador precisa ser verdadeira par o bloco ser executado. Usa-se o ! dentro do argumento para que a condição seja negativa:

```
let numero = 10;
let eNumeroPar = numero % 2 === 0;

if (eNumeroPar){
    console.log(`O número ${numero} é par.`)
}

if (!eNumeroPar){
    console.log(`O número ${numero} é impar.`)
}
```
Podemos também substituir a última parte do código por `else`
```
let numero = 10;
let eNumeroPar = numero % 2 === 0;

if (eNumeroPar){
    console.log(`O número ${numero} é par.`)
}

else{
    console.log(`O número ${numero} é impar.`)
}
```
Existe também uma diferença entre o operador `else if`, enquanto o operador `if` não barra as outras condições, o operador else if se alguma das condições anteriores for antendida ele não irá executar seu bloco de código. Por exemplo:
```
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
```

#### Operadores AND e OR
Em JavaScript, os operadores lógicos ``AND`` e ``OR`` são representados por ``&&`` e ``||,`` respectivamente. Eles são usados para combinar expressões booleanas e são essenciais para controlar o fluxo do programa com base em condições.

### Conceitos básicos de funções
#### Sintaxe básica de funções
Sintaxe básica de função em JS, quando não colocamos parâmetros chamamos essas funções de procedimentos
```
function nomeDaFuncao(){
    // Bloco de código
}

nomeDaFuncao // Chamar a função
```

Função com parâmetro e retorno
```
function potencia(valor){
    let resultado = Math.pow(valor);
    return valor
}

console.log(potencia(10))
```

#### Organização de funções
Organiza-se os códigos em JS principalmente ao criar uma função principal main que irá chamar as demais funções assim que o código for executado. Exemplo:

```
function exemploDeFuncao1(){

}

function exemploDeFuncao2(){

}

function main(){
    // Colocar as funções aqui dentro deste bloc
    exemploDeFuncao1();
    exemploDeFuncao2();
}

main();
```

Além disso, funções também pode ser invocadas e atribuidas a alguma variável como um objeto ou valor, exemplo `main2 = main()` <br>

Além disso, quando queremos utilizar funções que serão isoladas ou que usaremos uma única vez, podemos fazer a criação de uma função sem nome, ela será executa instantaneamente. Esse estilo é muito utilizado na web.
