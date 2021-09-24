const readline = require('readline-sync');

const min = Math.ceil(0);
const max = Math.floor(10);

const startGame = (replay = 'no') => {
  do {
    const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const choosenNumber = readline.questionInt('Insira um número entre 0 e 10: ');
    
    if (choosenNumber === drawnNumber) {
      console.log('Parabéns, número correto!');
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${drawnNumber}`);
    };

    replay = readline
      .question(
        'Deseja jogar novamente? Se sim, digite "yes" ou digite "no" para encerrar. ',
      );
  } while (replay === 'yes');
};

startGame();
