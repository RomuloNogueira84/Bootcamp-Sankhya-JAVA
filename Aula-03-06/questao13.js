//Questão 13
//Mesclar Arrays
/*- Crie uma arrow function que receba dois arrays e retorne um novo array contendo todos os elementos dos dois arrays, sem duplicatas.
*/
const mesclarArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
