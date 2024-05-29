// comentario de unica linha
/* Mais de uma linha de extensão do comentario*/
console.log("Hello world");
var nome = "Romulo";
var sobrenome = "Nogueira";
console.log(`Meu nome é  ${nome}`);
console.log(`Meu sobrenome é ${sobrenome}`);
console.log(`Meu nome é ${nome} e meu sobrenome é ${sobrenome}`);
console.log("Meu nome é : " + nome + " E meu sobrenome é: " + sobrenome );
if(5 > 2){
  console.log("O 5 é maior que o 2");
}else{
  console.log("Ele não é maior que 2")
}

var novoNumero = 1;

function numero (){
  console.log(novoNumero);
  var novoNumero = 2
  console.log(novoNumero)
}
numero();
// declarar variavel (let, var, const)

// let nome;
// let idade;

// var sexo; // fica disponivel dentro de uma função
// var exemplo =10; //  10 solta = fora de 1 função = global, qualquer parte do sistema pode usar ela
// function TextDecoderStream (){
//     console.log(exemplo);
//     var exemplo = 20;
//     console.log (exemplo); // 20

    // Hosting (hoisted)


// const numero = 10;


// let {} n permite redeclaração consigo mudar o valor da variavel mas nao a variavel

// let x = 10;
// x = 15;


// CONST {} similar ao let imutabilidade
// const y = 10;
// y = 20; // n pode fazer no let pode

// let Nome;
// let _nome;
// let nome;
// n usar nomes de palavras reservadas do codigo tipo function
// nomenclatura cameIcase

//declaração da variavel:
// let nome; // undefined

// //Inicialização:
// nome = "Adriano"
// console.log (nome);

// const idade = 29;
// console.log(idade);
// idade = 30;
// console.log(idade);

// let idade = 25; // number
// let nome = "Joao;" // string
// let ativo = true; // boolean
// let semValor = null; //nulo
// indefinido = undefined; // undefined
// let lista = [ 1, 2, 3, 4]; // array
// let pessoa = {nome: "Carlos", idade:20}; //object

// //OPERADORES  ARITIMÉTICOS:
// let a = 5 + 3; // Resultado: 8
// let b = "Ola" + "Mundo"; // Resultado: "OlaMundo"
// let c = 10 - 5; // Resultado: 5
// let d = 2*3; // Resultado: 6
// let e = 10/2; //Resultado:5
// let f = 10 % 3; // Resultadp: 1 resto da divisao 10/3


//OPERADORES DE INCREMENTO E DECREMENTO:

// pré incremento (++x)
// pré decremento (--x)

// let k = 5; // 5
// let z = --k; // 6

//pós incremento (x++)
// pós incremento (x--)

// let k = 5; 
// let z = k++;
// console.log(z);
// console.log(k);

//OPERADORES DE ATRIBUIÇÃO (=)
// atribuição com operação adicional (+=)
// Atribuição de subtração (-=)
// Atribuição  com operação de multipliccação (*=)
// Atribuição com operação de divisão (/=)
// let valor = 5;
// valor +=3; //8
// valor *= 3;  //15


//OPERADORES DE COMPARAÇÃO:
// igual (==)
// Igual estrito (===)
// Diferente (!=)
//Diferente estrito (!==)
// let valor1 = 10;
// let valor2 = "10";
// console.log(valor1 == valor2); // true
// console.log(valor1 === valor2); // false compara tipo

// Maior que (>)Maior ou igual a (>=), Menor que (<), menor ou igual a (<=)

//OPERADORES LÓGICOS:
//AND lógico (&&)
// or LÓGICO (||)
//NOT lógico (|)

// ESTRUTURAS CONDICIONAIS:


// Condicionais SIMPLES: (if)
let idade = 17;
// if (idade>=18){
//     console.log("Maior de Idade.");
// }


// Condicionais COMPOSTAS:
// if (idade>=18){
//     console.log("Maior de idade");
// }
// else{
//     console.log("Menoor de idade.");
// }
//Condicionais ENCADEADAS:
// Menor que 12 --- Criança (if)
//Menor que 18 --- Adolescente (else if)
//Maior que 18 --- Adulto (else if)
// Maior que 60 ---  Idoso (60)(else)

if (idade <=12){
    console.log("Criança");
} else if (idade >12 && idade <18){
    console.log("Adolescente");
}else if (idade >=18 && idade <60){
    console.log("Adulto");
}else{
    console.log("Idoso");
}
