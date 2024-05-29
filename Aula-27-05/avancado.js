// Avançado 1
let lado1 = parseFloat(prompt("Por favor, insira o comprimento do primeiro segmento"));
let lado2 = parseFloat(prompt("Por favor, insira o comprimento do segundo segmento"));
let lado3 = parseFloat(prompt("Por favor, insira o comprimento do terceiro segmento"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log("Os segmentos formam um triângulo equilátero");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Os segmentos formam um triângulo isósceles");
    } else {
        console.log("Os segmentos formam um triângulo escaleno");
    }
} else {
    console.log("Os segmentos não formam um triângulo");
}



//Avançado 2
let ano = parseInt(prompt("Por favor, insira o ano"));

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log("O ano " + ano + " é bissexto");
} else {
    console.log("O ano " + ano + " não é bissexto");
}


// Avançado 3
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100"));

while (tentativa !== numeroAleatorio) {
    if (tentativa < numeroAleatorio) {
        tentativa = parseInt(prompt("Muito baixo! Tente novamente"));
    } else if (tentativa > numeroAleatorio) {
        tentativa = parseInt(prompt("Muito alto! Tente novamente"));
    }
}

console.log("Parabéns! Você adivinhou o número");

//Avançado 4
let renda = parseFloat(prompt("Por favor, insira sua renda mensal"));
let idade = parseInt(prompt("Por favor, insira sua idade"));
let historicoCredito = prompt("Por favor, insira seu histórico de crédito (bom, médio, ruim)");

let elegivel = false;

if (renda >= 3000 && idade >= 18) {
    if (historicoCredito == "bom" || historicoCredito == "médio") {
        elegivel = true;
    }
}

if (elegivel) {
    console.log("Parabéns! Você é elegível para o empréstimo");
} else {
    console.log("Desculpe, você não é elegível para o empréstimo com base nos critérios fornecidos");
}
