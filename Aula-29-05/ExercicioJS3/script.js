//Todas as questões
// 1. Função de Saudação
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
// 2. Função de Soma
function soma(a, b) {
  return a + b;
}
// 3. Função de Subtração
function subtracao(a, b) {
  return b - a;
}
// 4. Função de Multiplicação
function multiplicacao(a, b) {
  return a * b;
}
// 5. Função de Divisão
function divisao(a, b) {
  return a / b;
}
// 6. Função de Fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * fatorial(n - 1);
  }
}
// 7. Função para Verificar Número Primo
function ePrimo(n) {
  for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return n > 1;
}
// 8. Função para Calcular Média
function media(arr) {
  let soma = arr.reduce((a, b) => a + b, 0);
  return soma / arr.length;
}
// 9. Função para Inverter String
function inverterString(str) {
  return str.split('').reverse().join('');
}
// 10. Função para Contar Caracteres
function contarCaracteres(str, char) {
  return str.split(char).length - 1;
}
// 11. Função Anônima
let multiplicar = function(a, b) {
  return a * b;
};
// 12. Função de Ordem Superior
function operacao(a, b, operacao) {
  return operacao(a, b);
}
// 13. Função de Retorno
function criarSaudacao(saudacao) {
  return function(nome) {
      return saudacao + ", " + nome;
  };
}
// 14. Função Recursiva
function contagemRegressiva(n) {
  if (n >= 0) {
      console.log(n);
      contagemRegressiva(n - 1);
  }
}
// 15. Função para Calcular Fibonacci
function fibonacci(n) {
  if (n <= 1) {
      return n;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// 16. Função para Converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}
// 17. Função para Converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
// 18. Função para Verificar Paridade
function ePar(n) {
  return n % 2 === 0;
}
// 19. Função para Calcular Quadrado
function quadrado(n) {
  return n * n;
}
// 20. Função para Calcular Raiz Quadrada
function raizQuadrada(n) {
  return Math.sqrt(n);
}
// 21. Função para Contar Vogais
function contarVogais(str) {
  let vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
          contador++;
      }
  }

  return contador;
}
// 22. Função para Verificar Palíndromo
function ePalindromo(str) {
  let strInvertida = str.split('').reverse().join('');
  return str === strInvertida;
}
// 23. Função para Encontrar o Maior Número em um Array
function maiorNumero(arr) {
  return Math.max(...arr);
}
// 24. Função para Ordenar um Array em Ordem Crescente
function ordenarArray(arr) {
  return arr.sort((a, b) => a - b);
}
// 25. Função para Filtrar Números Pares
function filtrarPares(arr) {
  return arr.filter(n => n % 2 === 0);
}
// 26. Função para Concatenar Arrays
function concatenarArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
// 27. Função de Memoização para Fatorial
let memoFatorial = (function() {
  let memo = {};
  function f(n) {
      let value;

      if (n in memo) {
          value = memo[n];
      } else {
          if (n === 0 || n === 1)
              value = 1;
          else
              value = n * f(n - 1);
          memo[n] = value;
      }
      return value;
  }
  return f;
})();

// 28. Função para Verificar Substring
function contemSubstring(str, substr) {
  return str.includes(substr);
}
// 29. Função de Curry
function currySoma(a) {
  return function(b) {
      return function(c) {
          return a + b + c;
      };
  };
}
// 30. Função para Reduzir um Array
function reduzirArray(arr, callback) {
  return arr.reduce(callback);
}
// 31. Função para Remover Duplicatas de um Array
function removerDuplicatas(arr) {
  return [...new Set(arr)];
}
// 32. Função de Composição
function compor(f, g) {
  return function(x) {
      return f(g(x));
  };
}
// 33. Função para Mapear um Array
function mapearArray(arr, callback) {
  return arr.map(callback);
}
// 34. Função de Ordenação Personalizada
function ordenarPersonalizado(arr, callback) {
  return arr.sort(callback);
}
// 35. Função para Encontrar a Intersecção de Dois Arrays
function intersecaoArrays(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
