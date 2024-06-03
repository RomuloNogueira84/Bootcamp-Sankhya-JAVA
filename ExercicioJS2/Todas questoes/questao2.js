//Questão 2
function tabuada(numero) {
  if (numero <= 0) {
    console.error("Erro: O número deve ser um inteiro positivo.");
    return;
  }
  console.log(`Tabuada do ${numero}:`);
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
  }
}
const numeroTabuada = parseInt(prompt("Digite um número inteiro positivo para ver sua tabuada: "));
tabuada(numeroTabuada);
