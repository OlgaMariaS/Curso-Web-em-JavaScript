/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

function salarioMensal(horasTrabalhadas, valorHora){
    let salario = horasTrabalhadas * valorHora;

    return console.log(`O sálario é: ${salario}`);
}

salarioMensal(200,6);
salarioMensal(220,4);
salarioMensal(310,7);