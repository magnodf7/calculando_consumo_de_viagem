// Calculando o IMC
const peso = 85.5;
const altura = 1.80;
let imc = peso / (altura * altura);
imc = parseFloat(imc.toFixed(2));
console.log(`O IMC é ${imc}`);

if (imc < 16) {
    console.log('Abaixo do Peso');
} else if (imc >= 16 && imc < 17) {
    console.log('Peso Normal');
} else if (imc >= 17 && imc < 18.5 || imc > 90) {
    console.log('Acima do Peso');
} else if (imc >= 18.5 && imc <= 24 && imc !== 90) {  // Correção: imc, não imv
    console.log('Obesidade Grau 1');
} else if (imc > 24 && imc <= 29.9) {
    console.log('Obesidade Grau II');
} else {
    console.log('Obesidade Morbida III');
}
