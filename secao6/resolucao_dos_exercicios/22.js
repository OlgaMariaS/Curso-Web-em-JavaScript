/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function anuidade (mes,valor){

    let tempo = (mes - 12) + 12;
    let montante = Math.floor(valor * Math.pow((1 + 0.05),tempo));

    console.log(`O total do valor mais a anuidade é de: R$ ${montante}`);
}

anuidade(3,100);