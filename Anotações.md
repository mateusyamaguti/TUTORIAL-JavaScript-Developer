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


### Aula 4 - Criando objetos e classes
Um objetivo (é um estrutura dinâmica de chave e valor) em JS é uma coleção de valores e pode ser acessado como um dicionário dependendo do seu formato, como exemplo:
```
// Como criar um objeto literal em JS

const mateus = {
    nome : 'Mateus',
    idade : 27
};

console.log(mateus);
console.log(mateus.nome);
console.log(mateus.idade);
```

Para incrementar um valor no objeto pode ser usado `mateus.altura = 1.82;`, e para deletar `delete mateus.idade;`<br>

#### Criando método
Uma função dentro de um objeto geralmente chamamos de método <br>
Para criar um função pode analisar o exemplo a seguir. Além disso, para conseguir utilizar os valores e chaves associados no contexto dessa função, utiliza-se o argumento `this` antes da chave, assim como é feito com `self` em python.
```
const mateus = {
    nome : 'Mateus',
    idade : 27,
    descrever : function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
    }
};

mateus.descrever()
```
Para acessar os valores de forma mais dinâmica posso invocar o objeto e passar a chave dentro das colchete, exemplo: `pessoa['nome']`

#### Como criar classes e instâncias
Em JavaScript, uma classe é uma estrutura que permite criar objetos com propriedades e comportamentos definidos.<br>
Exemplo, posso criar uma classe que define pessoa, e depois instaciar ela para criar as pessoas, exemplo:
```
// Criando uma classe
class Pessoa{
    nome;
    idade;
    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
    }
};

// Instanciando uma classe
const mateus = new Pessoa();

// atribuindo valores a instancia mateus
mateus.idade = 27;
mateus.nome = 'Mateus Xavier Yamaguti';
mateus.descrever()
```
#### Como criar um construtor para classe
Construtor para classe é usado para obrigar a colocar alguns parâmetros necessários para criar uma instância ou um objeto, por exemplo, uma pessoa precisa ter idade e nome, caso contrário não será criada essa pessoa, exemplo:
```
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

// Instanciando uma classe que possuir construtor
const mateus = new Pessoa('Mateus Xavier Yamaguti', 27);

// Chamando o método descrever da instância
mateus.descrever()
```

#### Funções recebendo objetos
Agora que temos a classe bem definida, pode criar uma função que reutiliza essa informações. Exemplo, duas pessoas foram criadas por meio da classe Pessoa(), e serão comparadas por meio da função compararPessoas(p1, p2). Exemplo:
```
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
```

### Aula 5 - Arrays e estruturas de repeticação
#### Array ou lista
Lista é uma coleção direta de dados, acessado por seus índice, exemplo:
```
// Exemplo de lista

const alunos = ['João', 'Maria', 'Alice'];

console.log(alunos[0]);
```
Adiocionar aluno à alunos com o método `push` ou substituindo por meio de `alunos[2] = 'Vinícius'`, podemos utilizar o método length da lista para buscar o tamanho dela<br>

#### Estrutura de repetição
Exemplo de for
```
for (let index = 0; index < alunos.length; index++) {
    const element = alunos[index];
    console.log(element)    
}
```
### Aula 6 - Importação e exportação com JavaScripts
Para dividir responsabilidade e distribuir o código é necessário saber importar e exportação.<br> 
Para isso será criado duas funções, uma `print` para imprimir o código e uma `gets` para o usuário interagir dentro do arquivo funcoes-auxiliares<br>
Para permirtir importação uma função é preciso incluir o trecho de código. Exemplo:
```

function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print}
```

Para importar funções de um outro local do projeto precisa-se identificar o caminho. Exemplo
```
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes)
```
