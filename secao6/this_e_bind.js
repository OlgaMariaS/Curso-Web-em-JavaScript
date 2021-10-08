//This acessa a o bloco ou dono da execução

//this varia de qual contexto léxico foi colocado 
// this em função arrow, o this é fixo

const estudande = {
    nome: "Olga",
    saudacao() {
        console.log(`Olá me chamo ${this.nome}`);
    }
}

estudande.saudacao(); //só consegue acessar a saudacao pois tem this

/*const chamandoFuncao = estudande.saudacao(); 
chamandoFuncao(); === dará um conflito de interesses entre paradigmas de funcional e OO 
Assim poderá utilizar o BIND*/

const chamandoFuncao = estudande.saudacao.bind(estudande); 
chamandoFuncao();
/* Bind vinculado o objeto, e sempre que chamar a função o THIS será o objeto que declarou, neste caso ESTUDANTE */

