import ValidaCPF from "./ValidaCPF";

export default class GeraCPF { 
    static rand (min= 100000000, max= 999999999) {
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    gerarNovoCPF() {
        const cpfSemDigitos = GeraCPF.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        return cpfSemDigitos + digito1 + digito2;
    }
}

