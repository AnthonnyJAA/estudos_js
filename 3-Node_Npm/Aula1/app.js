//Importando o módulo mod1 completo.
const mod1 = require('./mod1');

//Executando a função importada do módulo mod1
console.log(mod1.falarNome());

//Importar variaveis especificas do módulo mod1
const { nome, sobrenome } = require('./mod1');

const idade = require('./mod1').idade;

const {DadosBancarios} = require('./mod1');
console.log(DadosBancarios);