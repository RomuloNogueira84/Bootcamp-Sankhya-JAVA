//Questão 5
/*Série Fibonacci: Crie um programa que gera os primeiros N termos da série Fibonacci, onde N é fornecido pelo usuário.*/
function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    let anteriores = [1, 1];
    for (let i = 3; i <= n; i++) {
      let proximo = anteriores[0] + anteriores[1];
      anteriores.shift(); 
      anteriores.push(proximo); 
    }
    return proximo;
  }
}
let n = parseInt(prompt("Digite quantos termos da sequência Fibonacci você deseja: "));
for (let i = 1; i <= n; i++) {
  console.log(fibonacci(i));
}
