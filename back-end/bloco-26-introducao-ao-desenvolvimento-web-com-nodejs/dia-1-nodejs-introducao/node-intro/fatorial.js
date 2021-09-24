const readline = require('readline-sync');

const getFatorial = () => {
  let number = readline
  .questionInt('Insira um número e obtenha seu fatorial correspondente: ');
  let result = 0;

  if (number < 0) {
    console.log('Números negativos não possuem fatorial!');
    return;
  };
  if (number === 0 || number === 1) { result = 1 };
  
  for (let num = number; num > 1; num -= 1) {
    result === 0 ? result = num : result = result * num;
  };

  console.log(`O fatorial de ${ number } é igual a ${ result }.`);
  return result;
};

getFatorial();