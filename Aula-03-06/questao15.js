//Questão 15
//Compor Funções
/*- Crie uma arrow function que receba duas funções `f` e `g` e retorne uma nova função que represente a composição `f(g(x))`.
*/
const comporFuncoes = (f, g) => x => f(g(x));