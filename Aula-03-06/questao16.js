// 16. Filtrar Strings por Comprimento
const filterStringsByLength = (arr, len) => arr.filter(str => str.length > len);

// 17. Remover Elementos Falsos
const removeFalsyValues = arr => arr.filter(Boolean);

// 18. Encontrar Máximo em Array
const findMaxInArray = arr => Math.max(...arr);

// 19. Concatenar Arrays
const concatenateArrays = (...arrs) => [].concat(...arrs);

// 20. Somar Valores em Objeto
const sumValuesInObject = arr => arr.reduce((sum, obj) => sum + obj.valor, 0);

// 21. Inverter String
const reverseString = str => str.split('').reverse().join('');

// 22. Filtrar Valores Únicos
const filterUniqueValues = arr => [...new Set(arr)];

// 23. Contar Palavras em String
const countWordsInString = str => str.split(' ').length;

// 24. Calcular Produto de Array
const calculateProductOfArray = arr => arr.reduce((product, num) => product * num, 1);

// 25. Combinar Propriedades de Objetos
const combineObjectProperties = (obj1, obj2) => ({...obj1, ...obj2});

// 26. Converter Array para Objeto
const convertArrayToObject = arr => Object.fromEntries(arr);

// 27. Obter Chaves de Objeto
const getObjectKeys = obj => Object.keys(obj);

// 28. Obter Valores de Objeto
const getObjectValues = obj => Object.values(obj);

// 29. Filtrar Números Ímpares
const filterOddNumbers = arr => arr.filter(num => num % 2 !== 0);

// 30. Agrupar Elementos por Propriedade
const groupElementsByProperty = (arr, prop) => arr.reduce((groups, item) => {
  const key = item[prop];
  if (!groups[key]) groups[key] = [];
  groups[key].push(item);
  return groups;
}, {});
