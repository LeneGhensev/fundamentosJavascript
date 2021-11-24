console.log('');
console.log('**********Trabalhando com Condicionais**********');
const listaDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');

console.log('\n Destinos possíveis:');
console.log(listaDestinos);
const idadeComprador = 15;
const estaAcompanhada = true;
const passagemComprada = true;

if(idadeComprador >=18 || estaAcompanhada){
    listaDestinos.splice(1,1);
    console.log('\n Compra efetivada com sucesso!');
} else{
    console.log('Comprador menor de idade, não é possível concluir a compra!');   
}

if(idadeComprador >=18 || estaAcompanhada && passagemComprada){
    console.log('\n Boa viagem! \n');
} else{
    console.log('Você não pode embarcar!');
}