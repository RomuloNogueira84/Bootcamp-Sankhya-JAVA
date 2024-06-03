//Questão 9
//Números Pares e Ímpares: Crie um programa que solicita ao usuário para inserir um número e, em seguida, exibe a contagem de números pares e ímpares até esse número.
function contarParesImpares(limite) {
  let pares = 0;
  let impares = 0;
  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  console.log("Até", limite, ":");
  console.log("Pares:", pares);
  console.log("Ímpares:", impares);
}
let limite = parseInt(prompt("Digite um número limite: "));

contarParesImpares(limite);
