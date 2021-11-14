//Percorre array com forEach

const aprovados =['aluno0', 'aluno1', 'aluno2', 'aluno3'];

//forEach é uma função de dentro do array, ele percorre o array e a cada elemento ele chama algo ou faz
//internamente no forEach tem um for, por isso percorre 
//função callback recebe parametros sendo eles 1º ELEMENTO, 2º INDICE, 3º O PRORPIO ARRAY
aprovados.forEach(function(nome,indice){
    console.log(`${indice}) ${nome}`)
    //se quiser iniciar o indice iniciando em 0 é só somar a 1
})

//metodo com função ARROW
aprovados.forEach(aprovados=>console.log(aprovados));