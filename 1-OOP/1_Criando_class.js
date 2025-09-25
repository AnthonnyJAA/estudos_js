//Aula 1 - Criando uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    //Criando um métodos
    falar () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

    fazerAniversario() {
        this.idade += 1;
    }
}

//Instanciando a classe
const pessoa1 = new Pessoa('Anthony', 25);

console.log(pessoa1.nome);//Anthony
console.log(pessoa1.idade);//25