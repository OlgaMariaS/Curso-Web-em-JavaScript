Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
//chama  valor atual  indice  array competo 
    }
}

const aprovados =['aluno0', 'aluno1', 'aluno2', 'aluno3'];

aprovados.forEach2(function(nome,indice){
    console.log(`${indice}. ${nome}`)
})

/*for(let i = 0; i < aprovados.length; i++){
    console.log(`${i}) ${aprovados[i]}`);
**MEU METODO DE COMO IMPRIMIR O ARRAY NA TELA
}*/ 