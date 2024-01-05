const readline = require('readline');

const precoCombuGasolina = 5.13;
const precoCombuAlcool = 4.10;
const kmPorLitros = 15;
let distanciaEmKm = 1555;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar a escolha do usuário ("gasolina" ou "alcool")
rl.question("Escolha o tipo de combustível (gasolina ou alcool): ", (escolhaUsuario) => {
  escolhaUsuario = escolhaUsuario.toLowerCase();

  const litrosConsumidos = distanciaEmKm / kmPorLitros;
  let valorGasto;

  if (escolhaUsuario === "gasolina") {
    valorGasto = litrosConsumidos * precoCombuGasolina;
    console.log("Usou gasolina!");
  } else if (escolhaUsuario === "alcool") {
    valorGasto = litrosConsumidos * precoCombuAlcool;
    console.log("Usou álcool");
  } else {
    console.log("Opção inválida. Escolha 'gasolina' ou 'alcool'.");
  }

  if (valorGasto !== undefined) {
    console.log("Valor gasto em combustível: R$", valorGasto.toFixed(2));
  }

  rl.close();
});
//codigo do primeiro exercicio
/*const precoConbusGasolina = 5.13;
const precoConbusAlcool = 4.10;
const kmPorLitros = 15;
let distanciaEmKm = 1555;

const litrosConsumidos = distanciaEmKm / kmPorLitros
const valorGasto = litrosConsumidos * precoCombuGasolina;

if(precoConbusGasolina){
    console.log( "usou gasolina!")
}else{
    console.log("usou alcool")
}

console.log(valorGasto.toFixed(2))*/

//calcular 