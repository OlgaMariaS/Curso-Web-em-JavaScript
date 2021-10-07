//Indicado a não utilizar

//ambos agem em cima de for, switch, while mais proxima caso não tenha rotulo
const array = [0,1,2,3,4,5,6];

///BREAK: INTERROMPE O LAÇO E PASSA PARA PROXIMA SENTEÇA DE CODIGO
for (x in array){
    if (x == 5){
        break;
    }
    console.log(`x = ${array[x]}`);
}
//CONTINUE: interompe a sentença do if e continua a parti dali a mesma repetição
for (Y in array){
    if (Y == 5){
        continue; 
    }
    console.log(`Y = ${array[Y]}`);
}