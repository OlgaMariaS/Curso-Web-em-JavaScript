/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

let pontuacoesDoJogo = [10,20,5,30,2,40,30,2,2]; //declarado o array com as pontuações

function melhorPontuacao(pontuacoesDoJogo){

let quebraRecordes = 0; 
let piorJogo = 0;
//inicializada variaveis todos com valor zero, pois menor valor possivel para se fazer em jogo e para se utilizar em for
let maiorPontuacao = 0;
let menorPontuacao = 0;

for(let i = 0; i < pontuacoesDoJogo.length; i++) { //criado for que percorre valores do array
   if(pontuacoesDoJogo[i] > maiorPontuacao){
        maiorPontuacao = pontuacoesDoJogo[i]; // se o valor atual for maior numero visto, será então a MAIOR PONTUAÇÃO, se for maior ele quebrou um recorde, assim se adiciona 1 ao recorde
        quebraRecordes++
   }else if(pontuacoesDoJogo[i] < menorPontuacao){
        menorPontuacao = pontuacoesDoJogo[i];  //se o valor atual for menor numero visto, será então a MENOR PONTUAÇÃO
        piorJogo = i+1 // será contabilidade em qual jogo, ou seja o indice que teve menor valor, e somado a 1 pois indice começa em 0
     }

   return console.log(`Foi quebrado o recorde em: ${quebraRecordes} vezes, e sua pior pontuação foi no jogo ${piorJogo}`);
}}

melhorPontuacao(pontuacoesDoJogo);