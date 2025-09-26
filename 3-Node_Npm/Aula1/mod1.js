const nome = "Anthonny";
const sobrenome = "Alves";
const idade = 25;

function falarNome() {
    return `${nome} ${sobrenome}`;
}

// Uso do exports para exportar variaveis e funcoes
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falarNome = falarNome;
module.exports = { nome, sobrenome, falarNome };

class DadosBancarios {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo -= valor;
        return this.saldo;
    }

    verSaldo() {
        return this.saldo;
    }
}

const dados = new DadosBancarios(1234, 56789-0, 1000);

exports.DadosBancarios = DadosBancarios;