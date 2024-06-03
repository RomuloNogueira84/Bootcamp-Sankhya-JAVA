//Questão 1
/*Soma dos Números: Crie um programa que solicita ao usuário um número inteiro positivo N e, em seguida, calcula a soma dos números de 1 a N utilizando um loop.*/
function somaNumeros(n) {
    if (n <= 0) {
        console.error("Erro: O número deve ser um inteiro positivo.");
        return;
    }
    let soma = 0;
    for (let numero = 1; numero <= n; numero++) {
        soma += numero;
    }
    console.log("Soma calculada:", soma); 
    console.log(`A soma dos números de 1 a ${n} é: ${soma}`);
}













