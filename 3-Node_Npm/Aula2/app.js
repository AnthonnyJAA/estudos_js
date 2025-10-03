// Aula de modulos 2

// importando funcao mod.js
const multiplicar = require('./mod');
console.log(multiplicar(2, 3));

//Como navegar em pastas
//Suponha que o arquivo mod2.js esteja dentro de uma pasta chamada 'classes'

const ContaBancaria = require('./classes/mod2');


const minhaConta = new ContaBancaria('12345-6', 1000);
minhaConta.consultarSaldo();
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();


console.log(__dirname); //Caminho completo da pasta atual
console.log(__filename); //Caminho completo do arquivo atual


const path = require('path'); //Modulo nativo do node para manipular caminhos de arquivos e pastas
console.log(path.resolve(__dirname, 'classes', 'mod2.js')); //Caminho completo do arquivo mod2.js