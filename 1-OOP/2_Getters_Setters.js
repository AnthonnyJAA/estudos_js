class Carro {
    constructor(marca) {
        this.marca = marca;
        // Atributo privado
        const _velocidade = Symbol('velocidade');
        this[_velocidade] = 0;
    }
    // Setter para modificar a velocidade
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    // Getter para acessar a velocidade
    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) {
            return;
        }
        this[_velocidade] += 10;
    }

    freiar() {
        if (this[_velocidade] <= 0) {
            return;
        }
        this[_velocidade] -= 10;
    }
}

const carro1 = new Carro('Ford');

for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
}

console.log(carro1.velocidade); // 100