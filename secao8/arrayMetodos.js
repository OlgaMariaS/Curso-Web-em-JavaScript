const familia = ['Simone', 'Osvaldo', 'Olga', 'Eliziane', 'Brenda'];
//array constante, mas elementos podem ser modificados

familia.pop()//remove o ultimo elemento
console.log(familia);

familia.push('Brenda') //adiciona elemento
console.log(familia);

familia.shift()//remove primeiro elemento
console.log(familia);

//SPLICE = PEDAÇO
familia.unshift("Simone") //adiciona o primeiro elemento
console.log(familia);

// qual indice adicionar/qual indice remover/o que adicionar
familia.splice(1,0,'José')//remove ou adiciona elementos
console.log(familia);

//cria novo array depois do indice pedido e ate x indice
const novoArrayFamilia = familia.splice(1,3); 
console.log(familia);