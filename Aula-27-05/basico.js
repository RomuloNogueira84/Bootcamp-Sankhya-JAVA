//Exercicios basicos

//Basico 1
let numero = prompt("Por favor, insira um número");

if (numero0 > 0) {
    console.log("O número é positivo");
} else if (numero0 < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}

// Basico 2

let numero0 = prompt("Por favor, insira um número");

if (numero0 % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//Basico 3
let numero1 = parseFloat(prompt("Por favor, insira o primeiro número"));
let numero2 = parseFloat(prompt("Por favor, insira o segundo número"));
let operacao = prompt("Por favor, insira a operação (adição, subtração, multiplicação, divisão)");

let resultado;

switch (operacao) {
    case "adição":
        resultado = numero1 + numero2;
        break;
    case "subtração":
        resultado = numero1 - numero2;
        break;
    case "multiplicação":
        resultado = numero1 * numero2;
        break;
    case "divisão":
        if (numero2 != 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("Erro: Divisão por zero não é permitida");
            break;
        }
        break;
    default:
        console.log("Erro: Operação inválida");
        break;
}

if (resultado !== undefined) {
    console.log("O resultado da " + operacao + " é " + resultado);
}
