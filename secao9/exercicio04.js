/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function mesDoAno(mes) {
    switch (mes) {
        case 1 || 01:
            console.log(`${mes} é igual a JANEIRO`);
            break;
        case 2 || 02:
            console.log(`${mes} é igual a FEVEREIRO`);
            break;
        case 3 || 03:
            console.log(`${mes} é igual a MARÇO`);
            break;
        case 4 || 04:
            console.log(`${mes} é igual a ABRIL`);
            break;
        case 5 || 05:
            console.log(`${mes} é igual a MAIO`);
            break;
        case 6 || 06:
            console.log(`${mes} é igual a JUNHO`);
            break;
        case 7 || 07:
            console.log(`${mes} é igual a JULHO`);
            break;
        case 8 || 08:
            console.log(`${mes} é igual a AGOSTO`);
            break;
        case 9 || 09:
            console.log(`${mes} é igual a SETEMBRO`);
            break;
        case 10:
            console.log(`${mes} é igual a OUTUBRO`);
            break;
        case 11:
            console.log(`${mes} é igual a NOVEMBRO`);
            break;
        case 12:
            console.log(`${mes} é igual a DEZEMBRO`);
            break;
        default:
            console.log("Mes invalido");
            break;
    }
}
mesDoAno(01);
mesDoAno(7);
mesDoAno(11);
mesDoAno(08);
mesDoAno(9);