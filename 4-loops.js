console.log('');
console.log('**********Trabalhando com Condicionais**********');
const listaDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = 'Salvador';

console.log('\n Destinos possíveis:');
console.log(listaDestinos);

const podeComprar = idadeComprador >=18 || estaAcompanhada;

let contador = 0;
let destinoLocalizado = false;

while(contador<3){ //3 é o tamanho da lista
    if(listaDestinos[contador] == destino){
        destinoLocalizado = true;
        break;
    }else{ //esse trecho não precisaria, pois a variável já foi declarada como false.
        destinoLocalizado = false;    
    }
    contador += 1;
}
console.log("Destino existe:", destinoLocalizado);

if(podeComprar && destinoLocalizado){
    console.log('\n Destino localizado. Boa viagem!\n');
}else{
    console.log('\n Ocorreu um erro!\n');
}

//for(let i = 0 ; i <3 ; i++); início, condição que vai verificar a cada loop, executa no fim
//if(listaDeDestinos[contador] == destino){
//    destinoExiste = true;
//   }