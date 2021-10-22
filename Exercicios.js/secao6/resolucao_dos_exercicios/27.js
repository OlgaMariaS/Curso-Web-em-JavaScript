/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function tamanhoDaCriancas(altura1,taxaDeCrescimento1,altura2,taxaDeCrescimento2){
    if(altura1 < altura2){
        
        console.log(`Criança 2 é maior, e a criança 1 ultrapassará ela em ${crescimento(altura1,taxaDeCrescimento1,altura2,taxaDeCrescimento2)} anos`);  

    } else if(altura2 < altura1){
    
        console.log(`Criança 1 é maior, e a criança 2 ultrapassará ela em ${crescimento(altura2,taxaDeCrescimento2,altura1,taxaDeCrescimento1)} anos`);  

    }else if (altura1 == altura2 && taxaDeCrescimento1==taxaDeCrescimento2){
        console.log("As crianças tem a mesma altura");
    }
}
function crescimento(alturaMenor,alturaMaior,taxaMenor,taxaMaior){
    let anos = 0;
        while(alturaMenor < alturaMaior){
            alturaMenor += taxaMenor;
            alturaMaior += taxaMaior;
            anos++
        }
    return anos;
}

tamanhoDaCriancas(100,5,120,3);
tamanhoDaCriancas(130,2,120,3);
tamanhoDaCriancas(100,1,100,1);