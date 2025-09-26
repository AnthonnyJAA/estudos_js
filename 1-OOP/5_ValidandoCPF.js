class ValidadorCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, ''); // Remove caracteres não numéricos
    }

    validar() {
        if (this.cpf.length !== 11 || /^(\d)\1{10}$/.test(this.cpf)) {
            console.log('CPF inválido');
            return false;
        }
        console.log('CPF válido');
        return true;
    }

    
}

const cpf1 = new ValidadorCPF('070.987.720-03');
const cpf2 = new ValidadorCPF('000.000.000-00');
cpf1.validar();
cpf2.validar();