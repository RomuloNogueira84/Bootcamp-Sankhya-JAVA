let idade = 17;
/*
if(idade>=18){
  console.log("Maior de idade.");
}else{
  console.log("Menor de idade");
}*/

if(idade >=0 && idade <= 12){
  console.log("Criança");
}else if(idade > 12 && idade < 18){
  console.log("Adolescente");
}else if(idade >= 18 && idade < 60){
  console.log("Adulto");
}else if (idade >= 60 && idade <=120 ){
  console.log("Idoso");
}else{
  console.log("Idade Invalida")
}
/*Análise do Código JavaScript
O código fornecido utiliza uma instrução let para declarar uma variável idade e atribuir a ela o valor 17. Em seguida, um bloco if aninhado é usado para classificar a idade em diferentes categorias:

1. Criança:

Se a idade for menor ou igual a 12, a mensagem "Criança" é exibida no console.
2. Adolescente:

Se a idade for maior que 12 e menor que 18, a mensagem "Adolescente" é exibida no console.
3. Adulto:

Se a idade for maior ou igual a 18 e menor que 60, a mensagem "Adulto" é exibida no console.
4. Idoso:

Se a idade for maior ou igual a 60, a mensagem "Idoso" é exibida no console.
Observações:

O código assume que a variável idade já foi declarada e inicializada com um valor válido antes do bloco if.
O código usa instruções console.log para exibir mensagens no console do navegador.
O código pode ser facilmente adaptado para lidar com diferentes faixas etárias ou categorias.*/
console.log(idade >= 18 ? "Maior de Idade" : "Menor de Idade.")

function obterDiaSemana(dia, mes, ano) {
  let data = new Date(ano, mes - 1, dia);
  let diaSemana = data.getDay();

  let nomeDiaSemana;
  switch (diaSemana) {
    case 0:
      nomeDiaSemana = "Domingo";
      break;
    case 1:
      nomeDiaSemana = "Segunda-feira";
      break;
    case 2:
      nomeDiaSemana = "Terça-feira";
      break;
    case 3:
      nomeDiaSemana = "Quarta-feira";
      break;
    case 4:
      nomeDiaSemana = "Quinta-feira";
      break;
    case 5:
      nomeDiaSemana = "Sexta-feira";
      break;
    case 6:
      nomeDiaSemana = "Sábado";
      break;
    default:
      nomeDiaSemana = "Data inválida";
  }
    return nomeDiaSemana;
}
  // Teste de uso
let dia = 13;
let mes = 10;
let ano = 1988;

console.log(`O dia ${dia}/${mes}/${ano} é uma ${obterDiaSemana(dia, mes, ano)}.`);


