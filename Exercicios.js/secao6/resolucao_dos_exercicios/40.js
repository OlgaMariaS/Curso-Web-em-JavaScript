/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

let vetor = [3,5,8.1,9.7];

function conceitos(vetor){
    for(let i = 0; i < vetor.length;i++){
        if(vetor.length[i] > 0.0 && vetor.length[i] <= 4.9 ){
            console.log("Conceito D");
        }
        if(vetor.length[i] > 5.0 && vetor.length[i] <=6.9 ){
            console.log("Conceito C");
        }
        if(vetor.length[i] > 7.0 && vetor.length[i] <=8.9 ){
            console.log("Conceito B");
        }
        if(vetor.length[i] > 9.0 && vetor.length[i] <= 10){
            console.log("Conceito A");
        }
    }
}
conceitos(vetor);