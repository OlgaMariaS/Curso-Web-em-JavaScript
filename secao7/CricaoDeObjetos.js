//Usando notação literal

const obj = {}
console.log(obj);

//Obj em JS 
console.log(typeof Object, typeof new Object)

const obj2 = new Object;
console.log(obj2)

//funções construtoras
function construtora(nome, preco, desconto){
    this.nome = nome;
    this.getValorFinal = () =>{
        return preco * (1 - desconto);
    }
}

const teste = new construtora ('relogio', 100.00,0.22);
console.log(teste.getValorFinal());

// Função factory
function funcionario(nome,salario, faltas ){
    return{
        nome, 
        salario, 
        faltas,
        getSalarioBruto(){
            return (salario / 30) * (30 - faltas);
        }
    }
}

const funcionario1 = funcionario('Olga',1460,3);
const funcionario2 = funcionario('Leonardo', 1200,1);
console.log(funcionario1.getSalarioBruto(),funcionario2.getSalarioBruto())

//Object.create
const nome = Object.create(null);
nome.idade = 19;
console.log(nome);

// função que retorna objeto 
const fromJSON = JSON.parse('{"informacao": "Sou um JSON"}');
console.log(fromJSON.informacao);
