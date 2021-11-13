/*JSON = JavaScript object notation  = Notação de objeto de JS
é um formato textual que tem foco em comunicação de sistema
*/

const obj = {a:1, b:2, c:3, soma() {return a+b+c}}

console.log(JSON.stringify(obj)); //gerou texto

//json em objeto 
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": [0,0,0]}'));