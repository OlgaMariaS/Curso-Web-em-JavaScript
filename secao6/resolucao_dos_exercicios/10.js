/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

function divisivelPorTres(valor){
    let restoDaDivisao = valor % 3; //se o resto da divisão for igual a 0, ou seja deu exato é divisivel por tres
    if(restoDaDivisao == 0 ){
        console.log("Este valor é divisivel por 3");
    }else{
        console.log("Este valor NÃO é divisil por 3");
    }
}

divisivelPorTres(33);
divisivelPorTres(25);
divisivelPorTres(3);
divisivelPorTres(11);