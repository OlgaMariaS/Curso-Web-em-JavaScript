/*Faça um algoritmo que calcule o fatorial de um número. */

/*Criado funcao que recebe numero e ha uma variavel que e igual ao numero -1, neste exemplo 4, 
ao entrar no for que começa valendo o numero, ou seja 5, ele vai decrescer ate se tornar 1, assim i = 4 
(auxiliar) a let numero vai receber a si propria multiplicando por i que começa sendo 4, (5*4 = 20) 
na proxima "passada" auxiliar e menos 1, ou seja é 3, e 3 vai ser multilicado por 20, que foi atribuido anteriormente
a numero, sendo 20*3 = 60, e ocorre o mesmo com dois, numero * i -> 60*2 = 120, chegando em 1 acaba o for e o numero final neste caso é 120 */

function fatorial(numero){
    let auxiliar = numero - 1;
    for(let i = auxiliar; i >= 1; i--){
        numero = numero * i;
    }
    console.log(numero);
}
fatorial(5);