//Cadeias de protótipos(prototype)

const avo ={atributo1: 'A'}
const pai ={__proto__:avo, atributo2:'B',atributo3: 'C'} 
const filho ={__proto__:pai, atributo3:'D'}

//shadowing = sombreamento, quando ja se acha o atributo,
//mesmo que ele esteja definido anteriormente. ele foi encontrado ja, e sera assumido como o valor 

Object.prototype.atributo0 = "0" //indicado a não fazer isso

console.log(filho.atributo1,filho.atributo3,);

const veiculo ={
    velAtual:0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <=this.velMax){
            this.velAtual +=delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari ={
    modelo: 'f40',
    velMax: 324, 

}
const volvo = {
    modelo: 'volvo',
    status(){
        return `${this.modelo}: ${super.status()}`
        //sombreando/ super vai fazer status puxar a função status do prototype
    }
}

Object.setPrototypeOf(ferrari, veiculo);
Object.setPrototypeOf(volvo, veiculo);
//metodo de informar o prototype de um objeto 

console.log(ferrari, volvo);

volvo.acelerar(100);//informou valor a função 
console.log(volvo.status(200));

ferrari.acelerar(200);
console.log(ferrari.status(400));