function Veiculo (velocidadeMaxima = 150, delta = 5){
    
    //Atributo privado
    let velocidadeAtual = 0;
    
    //Metodo Publico
    this.acelerar =  function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }

//para criar metodos publicos, é so adicionar THIS.

        //Metodo Publico
        this.getVelocidadeAtul = function (){
            return velocidadeAtual
        }

    }
}

const mercedes = new Veiculo;
mercedes.acelerar();
console.log(mercedes.getVelocidadeAtul());

const lamborguini = new Veiculo(200, 15);
lamborguini.acelerar();
lamborguini.acelerar();
lamborguini.acelerar(); // 3x delta = 3.(15) = 45
console.log(lamborguini.getVelocidadeAtul());