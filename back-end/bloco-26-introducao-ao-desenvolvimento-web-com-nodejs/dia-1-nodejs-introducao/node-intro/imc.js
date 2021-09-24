const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

const imc = peso / Math.pow(altura, 2);

const categoriaImc = (imcResult) => {
  if (imcResult < 18.5) {
    return 'Abaixo do peso (magreza)';
  } else if (imcResult >= 18.5 && imcResult < 25) {
    return 'Peso normal';
  } else if (imcResult >= 25 && imcResult < 30) {
    return 'Acima do peso (Sobrepeso)';
  } else if (imcResult >= 30 && imcResult < 35) {
    return 'Obesidade grau I';
  } else if (imcResult >= 35 && imcResult < 40) {
    return 'Obesidade grau II';
  } else {
    return 'Obesidade graus III e IV ';
  }
}

console.log (`IMC: ${imc} | Situação: ${categoriaImc(imc)}`);
