/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    console.log(juros);
}
jurosSimples(100,2,12);

function jurosComposto(capital, taxa, tempo){
    let montante = 100 * (Math.pow(1+(taxa/100), tempo));
    return console.log(Math.floor(montante));
}
jurosComposto(100,2,12);