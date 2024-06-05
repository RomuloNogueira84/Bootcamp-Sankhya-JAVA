//Questão 10
//Calcular Fatorial
    /*- Crie uma arrow function que receba um número e retorne o seu fatorial.*/
    
    const fatorial = n => n === 0 ? 1 : n * fatorial(n - 1);