import {idade, nome as name, sobrenome, soma} from './modulo1.js';

//Em caso de conflito de nomes, use "as" para renomear a importação
//Ex: import {nome as name} from './modulo1.js';
const nome = "Maria";

console.log(name, sobrenome, idade, "anos");
console.log(nome)

console.log(soma(5, idade));

