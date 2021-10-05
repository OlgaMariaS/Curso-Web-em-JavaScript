function tratarErro (erro){
    throw new Error("Desculper estamos com instabilidades");
}

function imprimirNome (objeto){
    try{ //tentar
    console.log(objeto.name.toUpperCase() * "!!!");
    } catch (e) { //recebe o erro e fica armazenado
        tratarErro(e)      
    } finally {
        console.log("final"); //tendo erro ou não é executado
    }
}

const objeto = {nome: 'Olga'};
imprimirNome(objeto);