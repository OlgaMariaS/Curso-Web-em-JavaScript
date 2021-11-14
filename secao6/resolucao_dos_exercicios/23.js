/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function media(nota1,nota2,nota3, codigoAluno){
    if(nota1 > nota2 && nota1 > nota3){
        var mediaSeNota1Maior = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3) )/3;
    } else if(nota2 > nota1 && nota2 > nota3){
        var mediaSeNota2Maior = ((nota2 * 4) + (nota1 * 3) + (nota3* 3) )/3;
    } else if(nota3 > nota2 && nota3 > nota1){
        var mediaSeNota3Maior = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3) )/3;
    }

    //Foi comparado as tres notas e visto qual a maior entre elas, se a maior definido será feito a media ponderada com aquela nota tendo maior peso

    if(mediaSeNota1Maior >= 5 || mediaSeNota2Maior >= 5 || mediaSeNota3Maior >= 5){
        console.log(` O código ${codigoAluno} está APROVADO`);
    }else{
        console.log(` O código ${codigoAluno} está REPROVADO`);
    }
//se a media for maior ou igual a cinco, será aprovado, se não reprovador e mostrado o codigo do aluno informado
}
media(20,15,10,32004);
media(1,2,1,32004);
media(4,8,16,32004)