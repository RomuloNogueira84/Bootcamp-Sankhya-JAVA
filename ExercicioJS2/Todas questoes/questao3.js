//Questão 3
/*Fatorial: Implemente um programa que solicita um número inteiro não negativo e calcula o fatorial desse número usando um loop.*/
function fatorial(numero) {
  if (numero < 0) {
    console.error("Erro: O número deve ser um inteiro não negativo.");
    return;
  }
  if (numero === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  console.log(`O fatorial de ${numero} é: ${resultado}`);
}
const numeroFatorial = parseInt(prompt("Digite um número inteiro não negativo para calcular seu fatorial: "));


fatorial(numeroFatorial);
