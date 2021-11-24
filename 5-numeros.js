const primeiroNumero = 10;
const segundoNumero = 3;

const divisao = (primeiroNumero / segundoNumero);
console.log(divisao);

console.log("Número arredondado para o inteiro mais próximo:", Math.round(divisao));
console.log("Número arredondado com duas casas depois da vírgula:", divisao.toFixed(2));
console.log("Número convertido para moeda brasileira:", divisao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
