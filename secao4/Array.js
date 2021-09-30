const array = [1,2,3,4,5,6,7];
//posições     0 1 2 3 4 5 6   =indices   

console.log(array[5]); //puxa a posição x

console.log(array.length);//quantidade de indices

array.push({id: "valor adicionado depois"});
//adiciona algo no array

console.log(array.pop())
// retira ultima posição do array

delete array [2];
//delete uma posição 

console.log(typeof array);