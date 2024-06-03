//Questão 4
/*Números Primos: Desenvolva um programa que recebe um número inteiro positivo e verifica se é um número primo.*/                                                                         function primo(numero) {
  if (numero <= 1) {
    return false;
  } else if (numero <= 3) {
    return true;
  } else if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
