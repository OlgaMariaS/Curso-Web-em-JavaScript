/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`O cachorro quente custará: R$ ${quantidade * 3}`);
            break;
        case 200:
            console.log(`O hambúrguer Simples custará: R$ ${quantidade * 4}`);
            break;
        case 300:
            console.log(`O Cheeseburguer custará: R$ ${quantidade * 5.50}`);
            break;
        case 400:
            console.log(`O Bauru custará: R$ ${quantidade * 7.50}`);
            break;
        case 500:
            console.log(`O refrigerante custará: R$ ${quantidade * 3.50}`);
            break;
        case 600:
            console.log(`O suco custará: R$ ${quantidade * 2.80}`);
            break;
        default:
            console.log("Opa este código é inválido");
            break;
    }
}

cardapio(100,2);
cardapio(300,1);
cardapio(500,5);
cardapio(700,2);