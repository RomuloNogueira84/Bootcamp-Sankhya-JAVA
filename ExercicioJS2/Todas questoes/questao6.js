//Questão 6
/*Média de Notas: Faça um programa que solicita ao usuário que insira as notas de alunos em uma disciplina e calcula a média dessas notas. O programa deve continuar pedindo notas até que o usuário decida parar.*/
function mediaNotas() {
  const notas = [];
  while (true) {
    const nota = prompt("Digite uma nota (ou 'sair' para finalizar): ");
    if (nota.toLowerCase() === "sair") {
      break;
    }
    const notaNumero = parseFloat(nota);
    if (isNaN(notaNumero)) {
      console.error("Valor inválido. Digite um número.");
    } else {
      notas.push(notaNumero);
    }
  }
  if (notas.length === 0) {
    console.log("Nenhuma nota foi informada.");
    return;
  }
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  console.log(`A média das notas é: ${media.toFixed(2)}`);
}
