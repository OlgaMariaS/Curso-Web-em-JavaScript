//Funcionamento do filter
Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(i=0; i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos =[
    {nome:'Notebook', preco:2500, fragil: true},
    {nome:'Celular', preco: 1800, fragil: true},
    {nome:'Impressora', preco:1500, fragil:false},
    {nome:'Cadeira Gamer', preco:899, fragil:false}
]

console.log(produtos.filter2(function(produtos){
    return produtos.fragil == true && produtos.preco > 1700
}))