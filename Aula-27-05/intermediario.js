//Intermediario 1
let idade = parseInt(prompt("Por favor, insira a idade"));

if (idade < 13) {
    console.log("A pessoa é uma criança");
} else if (idade >= 13 && idade < 18) {
    console.log("A pessoa é um adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("A pessoa é um adulto");
} else {
    console.log("A pessoa é um idoso");
}

//Intermediario 2
let nota = parseFloat(prompt("Por favor, insira a nota numérica"));

if (nota >= 90) {
    console.log("O conceito da nota é A");
} else if (nota >= 80) {
    console.log("O conceito da nota é B");
} else if (nota >= 70) {
    console.log("O conceito da nota é C");
} else if (nota >= 60) {
    console.log("O conceito da nota é D");
} else {
    console.log("O conceito da nota é F");
}

// Intermediario 3
let preco = parseFloat(prompt("Por favor, insira o preço original"));
let desconto = parseFloat(prompt("Por favor, insira a porcentagem de desconto"));

let valorFinal = preco * (1 - (desconto / 100));

console.log("O valor final após o desconto é R$" + valorFinal.toFixed(2));
