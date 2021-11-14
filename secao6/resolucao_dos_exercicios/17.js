/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function planoDeAumento (planoDeTrabalho,salario){
    switch (planoDeTrabalho) {
        case 'A':
            console.log(`Novo sálario é: ${(salario * 0.10) + salario}`);
            break;
        case 'B':
                console.log(`Novo sálario é: ${(salario * 0.15) + salario}`);
                break;   
        case 'C':
                console.log(`Novo sálario é: ${(salario * 0.20) + salario}`);
                break;      
        default:
            console.log("Plano de trabalho invalido, pode somente A, B ou C");
            break;
    }
}

planoDeAumento('A', 1000);
planoDeAumento('B', 1000);
planoDeAumento('C', 1000);
planoDeAumento('D', 1000);