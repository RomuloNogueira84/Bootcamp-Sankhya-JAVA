//Questão 7
/*Adivinhe o Número: Implemente um jogo onde o computador escolhe um número aleatório entre 1 e 100, e o jogador tem que adivinhar. O programa deve fornecer dicas sobre se o número é maior ou menor.*/
function jogar() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite;
  do {
    tentativas++;
    palpite = parseInt(prompt(`Digite seu palpite (entre 1 e 100): `));
    if (palpite === numeroSecreto) {
      console.log("Parabéns! Você adivinhou o número em", tentativas, "tentativas!");
      break;
    } else if (palpite < numeroSecreto) {
      console.log("O número secreto é maior.");
    } else {
      console.log("O número secreto é menor.");
    }
  } while (palpite !== numeroSecreto);
}
jogar();
