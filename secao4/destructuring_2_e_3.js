let [array] = [10];

const [n, , n2, , n4, , n6 = 0] = [0,1,2,3,4,5,6];
console.log(n,n2, n4, n6);
//curso indicou a não usar na prática por dificuldade de leitura

function aleatorio ({ min = 0, max = 100}){
    const valor = Math.random() * (man - min) + min;
    return Math.floor(valor); 
}
//math.floor = arrendonda para baixo
const parametros = { min: 1, max: 10}
console.log(aleatorio(parametros));