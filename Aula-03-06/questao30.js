//Questão 30
// 30. Agrupar Elementos por Propriedade
const groupElementsByProperty = (arr, prop) => arr.reduce((groups, item) => {
  const key = item[prop];
  if (!groups[key]) groups[key] = [];
  groups[key].push(item);
  return groups;
}, {});