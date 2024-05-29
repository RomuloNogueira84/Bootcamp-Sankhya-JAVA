//Funções -Functions
function boasVindas(){
console.log("Hello world");
console.log("!!!!!");
}

//sintaxe
/*function <nome da função>(<parametros>){
  ... corpo da função
}
*/

//escopo
function exemplo1(){
  let x = 5;
  let y = 10;
  console.log(`A soma é: ${x+y}`)

}
exemplo1();

function exemplo2(){
  let x = 5;
  let y = 10;
  console.log(`A soma é: ${x+y}`)

}
exemplo2();

function nomeCompleto(){
  let nome = "Romulo";
  let sobrenome = "Nogueira";
  console.log(`O nome completo é: ${nome+ " " + sobrenome}`)

}
nomeCompleto();

function exemplo3(a,b){
  console.log(`A soma é: ${a+b}`)
}
let x = 99;
let c = 31;
exemplo3(x,c);

function soma(a,b,c){
  console.log(`A soma é : ${a+b+c}`)
}
soma(12,10,8);
soma(15,20,25);

const resultado = soma(1,2,3);
const a = 5;
const b = 7;
const result = soma(a,b,2)
const resultado2 = soma(1+1, 2+5);

