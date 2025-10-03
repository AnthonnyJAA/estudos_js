module.exports = class {
    constructor(conta, saldo) {
        this.conta = conta;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso!`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}