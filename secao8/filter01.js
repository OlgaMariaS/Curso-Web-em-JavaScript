//Filter é fitrar, não modifica nada só seleciona 

const produtos =[
    {nome:'Notebook', preco:2500, fragil: true},
    {nome:'Celular', preco: 1800, fragil: true},
    {nome:'Impressora', preco:1500, fragil:false},
    {nome:'Cadeira Gamer', preco:899, fragil:false}
]

console.log(produtos.filter(function(produtos){
    return produtos.fragil == true && produtos.preco > 1700
}))