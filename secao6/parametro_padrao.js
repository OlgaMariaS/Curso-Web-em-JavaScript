//Valores padrões em paramtros
//Exemplo 1:
function exemplo1 (a,b,c){
    a = a || 1;
    b = b || 2;
    c = c || 3;
    return console.log(a + b + c);
}
exemplo1(); exemplo1(4); exemplo1(10,20,30); exemplo1(0,0,0);

//Exemplo 2:
function exemplo2 (a, b, c){
    a = a != undefined ? a:1 //se a for diferente de indefinido, ele pega o valor informado, se nãop será 1
    b = 1 in arguments ? b:2 //se existe valor informado para indice 1, se sim seja b se não será 2
    c = isNaN(c) ? 3:c // se valor passado for um numero, então será c, se não será o 3
    return console.log(a + b + c);
}
exemplo2();  exemplo2(4); exemplo2(10,20,30); exemplo2(0,0,0);

//Valor padrão em ES2015
function exemplo3 (a = 1, b = 2, c = 3){
    return console.log(a + b + c);
}
exemplo2();  exemplo2(4); exemplo2(10,20,30); exemplo2(0,0,0);
