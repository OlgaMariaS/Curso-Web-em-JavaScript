//Probema com setInterval e duas soluções

function Pessoa() {
    this.idade = 0;

   /* const isto = this; criando constante com valor this, ele sempre ira aponta para onde deixou a constante*/
    
    setInterval( function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this) , 1000) //milesegundos = 1 segundo
}

//setInterval = executa uma outra função a partir de um intervlo determinado

new Pessoa