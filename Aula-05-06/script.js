//Objetos 
/***
 * const objeto ={
 * propriedade:valor,
 * propriedade2: valor2,
 * metodo:function(){
 * codigo metodo
 * }
 * }
 */
const pessoa = {
  nome: 'Douglas',
  idade: 30
};
console.log(pessoa.nome);
pessoa.idade = 31;
console.log(pessoa['idade']);
pessoa.salario = 5000;
console.log(pessoa.salario);

pessoa['cidade'] = "São Paulo";

Object.assign(pessoa, {
  profissão: "Desenvolvedor",
  telefone: '(11)999999999'
});
console.log(pessoa);

const novaPessoa = {
  ...pessoa,
  email:'douglas@dev.com.br',
  linkedin:"link"
};
console.log(novaPessoa);
//Removendo propriedades
delete novaPessoa.linkedin;
const{email,...novaPessoa2} = novaPessoa;
console.log(novaPessoa2)

const _ = require('lodash');
const novaPessoa3 = _.omit(novaPessoa2, ['idade']);
console.log(novaPessoa3);
//npm install lodash

