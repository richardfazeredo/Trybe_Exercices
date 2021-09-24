const readline = require('readline-sync');

const scripts = [
  { id: "1", nome: "Calculadora de IMC", script: "./imc.js" },
  { id: "2", nome: "Jogo de advinhação", script: "./sorteio.js" },
  { id: "3", nome: "Calculadora de VM/h", script: "./velocidade.js" },
  { id: "4", nome: "Calculadora de Fatorial", script: "./fatorial.js" },
  { id: "5", nome: "Gerador de sequência Fibonacci", script: "./fibonacci.js" },
];

function runSelectedScript() {
  scripts.forEach(script => {
    console.log(`Script ${ script.id }: ${ script.nome }`);
  });

  let chosenScript = readline
    .questionInt('Insira o número do script que deseja executar: ');

  if (chosenScript > scripts.length || chosenScript <= 0) {
    console.log('Você escolheu um número de script que não existe!');
    return;
  };

  const { script } = scripts[chosenScript - 1];

  require(script);
}

runSelectedScript();
