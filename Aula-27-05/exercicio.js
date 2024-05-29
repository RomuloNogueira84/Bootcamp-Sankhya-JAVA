//Questão 1

let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 9.5;
let media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é: " + media);

//Questão 2

let peso = 70// O peso se usa kg tipo 95
let altura = 1.81// A altura é usado metros e separados por . tipo 1.87
let calcularImc = peso / (altura * altura);
console.log("O IMC solicitado é : ", calcularImc.toFixed(2));//Aqui segue a saida do calculo apresentado no let calcularImc.

//Questão 3
let idade = prompt("Por favor, insira sua idade");
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;

console.log("Você nasceu no ano de " + anoNascimento);


//Questão 4
let custoNotebook = 3000;
let desconto = 25; 

let valorVenda = custoNotebook * (1 - (desconto / 100));

console.log("O valor de venda do notebook usado deve ser R$" + valorVenda.toFixed(2));

//Questão 5
let valorMetros = prompt("Por favor, insira o valor em metros");
let valorMilimetros = valorMetros * 1000;

console.log("O valor em milímetros é " + valorMilimetros + "mm");

//Questão 6
let valorCelsius = prompt("Por favor, insira o valor em Celsius");
let valorFahrenheit = valorCelsius * 1.8 + 32;

console.log("O valor em Fahrenheit é " + valorFahrenheit + "°F");




