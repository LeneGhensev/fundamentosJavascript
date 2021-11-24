console.log('');
console.log('**********Trabalhando com Condicionais**********');
const listaDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');

console.log('Destinos possíveis:');
console.log(listaDestinos);
const idadeComprador = 15;
const estaAcompanhada = true;

if(idadeComprador >=18){
    listaDestinos.splice(1,1);
    console.log('Compra efetivada com sucesso!');
}
else if(estaAcompanhada){
    listaDestinos.splice(1,1);
    console.log('Compra efetivada com sucesso, pois menor está acompanhado!');
} else{
    console.log('Comprador menor de idade, não é possível concluir a compra!');   
}