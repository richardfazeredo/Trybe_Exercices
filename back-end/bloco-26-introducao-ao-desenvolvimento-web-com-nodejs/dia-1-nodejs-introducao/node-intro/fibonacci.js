const readline = require('readline-sync');

function getFibonacci() {
  const number = readline
    .questionInt(
      'Insira uma quantidade de números que deseja obter da sequencia fibinacci: ',
    );
  let sequence = [1, 1];

  if (number <= 0) {
    console.log('Número inválido. Por favor, insira um número maior que 0.');
    return;
  }

  while(sequence.length < number) {
    const calcNext = () => {
      const twoLast = sequence.slice(-2);
      const getNextValue = twoLast[0] + twoLast[1];
      return getNextValue;
    };

    sequence.push(calcNext());
  };

  const formatedSequence = sequence.map(num => ` ${ num }`);

  console.log(`Sequencia fibonacci de ${ number } números:${ formatedSequence }`);
  return sequence;
};

getFibonacci();
