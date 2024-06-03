//Questão 10
//Cálculo de Média Ponderada: Desenvolva um programa que pede ao usuário para inserir as notas e os pesos de várias disciplinas e calcula a média ponderada.
function calcularMediaPonderada() {
  let notas = [];
  let pesos = [];
  let somaNotas = 0;
  let somaPesos = 0;
  let numeroDisciplinas = parseInt(prompt("Digite o número de disciplinas: "));
  for (let i = 0; i < numeroDisciplinas; i++) {
    let nota = parseFloat(prompt(`Digite a nota da disciplina ${i + 1}: `));
    let peso = parseFloat(prompt(`Digite o peso da disciplina ${i + 1}: `));

    notas.push(nota);
    pesos.push(peso);

    somaNotas += nota * peso;
    somaPesos += peso;
  }
  if (somaPesos === 0) {
    console.error("Erro: A soma dos pesos não pode ser zero.");
    return;
  }
  let mediaPonderada = somaNotas / somaPesos;
  console.log("A média ponderada é:", mediaPonderada.toFixed(2));
}

calcularMediaPonderada();
