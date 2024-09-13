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
### Aula 7 - Pokedex
Referência: [Pokedex](https://github.com/digitalinnovationone/js-developer-pokedex)<br>

Site para inspirar em criaçãoes web: [Dribbble](https://dribbble.com/shots/5636562-Dribbble-Refreshed-wordmark-concept)

#### Configuração de ambiente
1º Verificar se o node está instalado corretamente: `node -v`<br>
2º Verifica se o npm (instalador e pacote) está instalado corretamente: `npm -b`<br>
3º Intalar globalmente (-g, ou seja, pode ser acessada de qualquer lugar) a biblioteca http-server: `npm install -g http-server`<br>

Executar o servidor http dentro da pasta `http-server ./` (Se não for no PowerShell, tentar no CMD ou configurar o administrador)

#### Protocolo Cliente e Servidor / Intro a HTML / CSS e JS para web

Protocolo cliente e servidor é a forma de comunicação web entre fazer requisições (cliente) e emitir respostar (servidor) <br>
HTML: Linguagem de marcação usada nos site para dar significado aos textos<br>
CSS: Linguagem de stilo em cascata, o seu comportamento é subsrito em cascata, colocar sempre junto do head<br>
JS na Web: Linguagem de programação, sempre colocar no final da página, dois objetos muito importantes para se aprender `windows` -> tudo que corresponde ao browser e `document` -> tudo que corresponde ao arquivo html.

#### Configurações gerais do projeto
Para manter uma normalização entre navegadores o ideal é integral um normalizador ao seu html, no caso utilizaremos o [cdn normalize css](https://cdnjs.com/libraries/normalize). Após isso, incluir uma tag link no head presente no index.html `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

#### Organização do projeto
Para organizar o projeto é importante criar uma página assets onde será disponibilizados os recursos CSS e JS utilizados pela página web.<br>
Como também, faz-se necessário criar os arquivos com suas respectivas responsabilidade.<br>
Após isso, deve ser importado os arquivos no index.html: css no head, e js no final da página. Exemplo:
```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets\css\global.css">
</head>
<body>
    <h1>Teste</h1>

    <script src="assets\js\main.js"></script>
</body>
</html>

```

#### Adicionar fonts de letra
Entrar no google fonts, pesquisar pela font desejada, copiar o link e inlcuir dentro do index.html. Exemplo:
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <!-- Normalize CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Fonte Roboto -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">


    <!-- Arquivo CSS -->
    <link rel="stylesheet" href="assets\css\global.css">
</head>
```

#### Estilização da listagem de pokemon
Iremos aplicar uma tecnica chamada mobile first, ou seja, fazer primeiro o css simples para mobile e depois adaptar o que precisar para páginas grandes
<br>
Configuração de lista:

```
ol.pokemons li{
    padding: 2rem 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    background-color: #14A06F;
    color: #ffff;
    height: 100px;

}
```
link para imagem da apipokemon: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg

### Aula 8 - Dominando o protocolo HTTP e Integrando com a PokeAPI
De forma resumida um site vai tem uma requisição por meio do endereço de um api, que também terá um id<br>
Além disso, podemo fazer query string, que é uma busca dentro do próprio caminho do site<br>

#### Requisição API
Para fazer uma requisição em JS podemos utilizar o __Fetch API__, [exemplo](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)<br>
Como fazer uma requisição simples com fetch, lembrando que precisa passar um função dentro do método then.
```
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?${offset}=0&${limit}=10`

fetch(url).then(function (reponse){
    console.log(reponse)
})
```
Também podemos utilizar o método catch(), caso a requisição dê erro, assim como o método finally para retornar um resultado final após a finalização da requisição. Esse método de construção podemos chamar de callback

```
fetch(url)
    .then(function (reponse){
    console.log(reponse)
    })
    .catch(function (error){
        console.error(error)
    })
    .finally(function (){
        console.log('Requisição concluída!')
    })
```

Podemos melhorar ainda mais a verbozidade do nosso callback utilizando arrow function `=>`, que significa um função especial e chamar novos then para criar outras responsabilidade. Utilizar .json para converter o response da API. Obs: Quando usamos um then após o outro, automaticamente a responsta do then anterior está encadeada no próximo.

```
fetch(url)
    .then((reponse) => reponse.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch( (error) => console.error(error))
```

É importante separa os arquivos e suas responsabilidades. Para isso podemos criar um arquivo chamado __poke_Api__ para representar um objeto que será responsável por manipular nossa API.<br>

Agora que temos um objeto responsável pelo consumo da API podemos trabalhar diretamente sobre ele, da seguinte forma:
```
pokeApi.getPokemons().then((pokemons) => {
    const listItens = []

    for (let i = 0; i  < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(pokemonConvertToLi(pokemon))
    }
    console.log(listItens)
})
```

Podemos refatorar o laço for utilizando o método `map` muito elegante aplicado em arrays<br>
Com isso podemos substituir o for pelo map
```
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {


    const newList = pokemons.map((pokemon) => {
        return pokemonConvertToLi(pokemon)
    })

    console.log(newList)
```
Além disso, como a referência do return é o próprio item, podemos reduzir ainda mais a função para
```
pokeApi.getPokemons().then((pokemons = []) => {    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
```

### Aula 9 - Orientação a protótipo

#### Protótipo
Cada objeto em JavaScript tem um "protótipo", que é outro objeto a partir do qual ele herda propriedades e métodos. <br>
No exemplo a seguir veremos que pessoa é um objeto que pode ser incluido em outro por meio do argumento `__proto__`, lembrando que se o JS não encontrar no primeiro proto ele vai no segundo e assim por diante.

```
const pessoa = {
    genero: 'Masculino'
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.genero)
```

#### Função contrutora
Em JavaScript, uma função construtora é usada para criar e inicializar objetos de um determinado tipo, proporcionando uma maneira de definir propriedades e métodos compartilhados entre as instâncias. Ao chamar uma função construtora com a palavra-chave new, um novo objeto é criado com o protótipo definido pela propriedade prototype da função construtora, e as propriedades e métodos especificados na função são adicionados ao objeto. Isso permite a criação eficiente de múltiplos objetos com a mesma estrutura e comportamento, promovendo reutilização de código e encapsulamento.<br>
Obs: Função contrutora começa com a primeira letra maiúscula`. Exemplo:<br>
```

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const renan = new Pessoa('Renan', 30)

console.log(renan)
```

Se quisermos acrescentar algo a função construtora, podemos utilizar o método `prototype`. Exemplo:
```
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}.`)
}

const renan = new Pessoa('Renan', 30)

renan.falar()
```

#### Funções
Podemos passa uma função para uma variável nova.<br>
Como também podemos passar uma função para outra função<br>

#### Function Declaration
```
function nomeDaFuncao(){
    console.log('nome da função')
}
```

#### Function Expression

```
const nomeDaOutraFuncao = function(){
    console.log('Nome da outra função')
}
```

#### Filter - Método para percorrer uma lista
Nesse método, tudo que for true é adicionado em uma nova lista, como exemplo:
```
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)

```