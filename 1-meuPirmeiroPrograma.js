console.log("");
console.log("**********Meu primeiro programa: Trabalhando com variáveis**********");

//let é uma variáve comum, que pode ser alterada
let nome = "Rosilene";
console.log("nome:", nome);

const idade = 38;
console.log("idade:", idade);
console.log("idade + 2:", idade+2);

const idadeSomada = idade +2;
console.log("idade somada:", idadeSomada)

console.log("");
console.log("**********Operações Aritiméticas**********");

console.log(2 + 2);
console.log(10 + 8 * 2);
console.log((10 + 8) * 2);

console.log("");
console.log("**********Conversão de Tipos**********");

console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("");
console.log("**********Atribuição de Variáveis**********");

const sobrenome = "Ghensev";

console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + " " + sobrenome;

console.log(`Meu nome é ${nome}`);

let idadeVar;
idadeVar = 38;
idadeVar = idadeVar + 1;
console.log(idadeVar)

console.log('');
console.log('**********Trabalhando com listas**********');
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro);

console.log('');
console.log('Forma usando arrays:');
const listaDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');
console.log(listaDestinos);

listaDestinos.push('Curitiba'); //adiciona um item na lista sem inserir no construtor
console.log('');
console.log(listaDestinos);

listaDestinos.splice(2,1); //apaga um elemento da lista, no caso o elemento da posição 2 e apenas 1 elemento.
console.log('');
console.log(listaDestinos);
console.log(listaDestinos[1]); //imprime uma posição específica
