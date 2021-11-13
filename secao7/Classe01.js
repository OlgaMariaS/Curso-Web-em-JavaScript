class financeiro {
    constructor(nome = 'Qualquer', valor = 0) {// parametros da função CLASSE
    this.nome = nome;
    this.valor = valor
}
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.financeiro = []
    }
    adicionarFinanceiros(...financeiro){ // concatena elementos de função em array
        financeiro.forEach(i =>this.financeiro.push(i)); // empura cada parametro que recebeu como array que foi concatenada
    }
    sumario() {
        let valorConsolidado = 0;
        this.financeiro.forEach(i =>{
            valorConsolidado += i.valor
        })
        return valorConsolidado;
    }
}

const salario = new financeiro("Salario", 12000);
const contaDeLuz = new financeiro('Luiz', -150);

const contas = new CicloFinanceiro(11,2021);
contas.adicionarFinanceiros(salario, contaDeLuz);

console.log(contas.sumario());