//Metodos Estaticos são aqueles que não dependem de uma instancia da classe para serem utilizados
//Eles são chamados diretamente na classe
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        if (this.volume < 100) {
            this.volume += 2;
        }
    }

    diminuirVolume(){
        if (this.volume > 0) {
            this.volume -= 2;
        }
    }

     static trocaPilha(){
        console.log('Ok, pilha trocada!');
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle.volume);

//controle.trocaPilha(); // Erro, pois trocaPilha é um metodo estatico
ControleRemoto.trocaPilha(); // Ok, pilha trocada!