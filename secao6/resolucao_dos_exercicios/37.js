/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function progresssoes(n,a1,r){
    let aN = a1 +((n + 1) * r);
    let sN = ((a1 + aN) * n ) / 2;

    console.log(`Desta Progressão aritmetica, o termo geral é ${aN} e a Soma ${sN}`);

    let aNGeometrica = a1 * (Math.pow(r,(n -1)));
    let sNGeometrica = (a1 * (Math.pow(r,n) - 1)) /(r - 1);

    console.log(`Desta Progressão Geométrica, o termo geral é ${aNGeometrica} e a Soma ${sNGeometrica}`);

}

progresssoes(4,2,2);

