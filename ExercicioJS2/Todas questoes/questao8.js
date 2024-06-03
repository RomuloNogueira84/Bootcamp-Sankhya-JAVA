//Questão
//Contador de Dígitos: Escreva um programa que pede ao usuário para inserir um número inteiro e conta quantos dígitos há nesse número.
function contarDigitos(numero) {
  let contador = 0;
  while (numero > 0) {
    numero = Math.floor(numero / 10);
    contador++;
  }
  return contador;
}
let numero = parseInt(prompt("Digite um número inteiro: "));
let numeroDigitos = contarDigitos(numero);
console.log("O número", numero, "tem", numeroDigitos, "dígitos.");
