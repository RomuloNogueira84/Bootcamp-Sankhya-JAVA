//Questão 14 
//Contar Ocorrências
/* - Crie uma arrow function que receba uma string e retorne um objeto com a contagem de cada caractere na string.
*/
const contarOcorrencias = str => str.split('').reduce((acc, char) => {
  acc[char] = acc[char] ? acc[char] + 1 : 1;
  return acc;
}, {});

//Questão 14 
//Contar Ocorrências
/* - Crie uma arrow function que receba uma string e retorne um objeto com a contagem de cada caractere na string.
*/
const contarOcorrencias = str => str.split('').reduce((acc, char) => {
  acc[char] = acc[char] ? acc[char] + 1 : 1;
  return acc;
}, {});
