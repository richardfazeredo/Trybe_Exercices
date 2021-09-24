const readline = require('readline-sync');

const distancia = readline
  .questionInt('Qual é a distância em metros até o destino? ');
const tempo = readline
  .questionInt('Qual é o tempo em segundos até o destino? ');

const velocidadeMedia = (distancia / 1000) / (tempo / 3600);

console.log(`Este carro está viajando à ${velocidadeMedia}/h`);