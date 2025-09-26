//Herança em class
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}

const cachorro1 = new Cachorro('Rex', 'Labrador');
cachorro1.latir(); // Rex está latindo!