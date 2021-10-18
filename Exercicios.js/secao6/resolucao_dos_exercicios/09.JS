/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */


function sistemaDeNotas (nota){
    if(nota >= 38){ //caso a nota informado seja menor que 38 será reprovado automaticamente
        let modulo = nota % 10; // pego o resto da divisao da nota por 10 e armazeno em variavel
        let diferencaEntreRestoEDez = 10 - modulo; 

        if(modulo <= 5){
            nota = nota - modulo; //caso o resto da divisao seja menor que cinco, será subtraido da nota, assim será multiplo de 5
            console.log(nota);
        } else{
            nota = nota + diferencaEntreRestoEDez;
            console.log(nota); //caso o modulo seja maior que 5, ele sera subtraido de 10, ex 7 - 10 = 3 e este quociente da divisão será somado a nota, assim sendo multiplo de 5
        }
        
    }else{
        console.log("Reprovado");
    }
}

sistemaDeNotas(38);

