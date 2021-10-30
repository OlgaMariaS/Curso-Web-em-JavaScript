const a = 1;
const b = 2
const c = 3;

//const obj ={a: a, b:b, c:c} era assim e ficou assim:
const obj = {a,b,c}
/*
const obj2 ={}
obj2[nome] = valor 
console.log(obj2) 
era assim
*/
const obj2 = {[nome]:valor}
console.log(obj2);

const obj3 = {
    funcao: function(){
        //era assim
    },
    funccao2 (){
        //...ficou assim
    }

}