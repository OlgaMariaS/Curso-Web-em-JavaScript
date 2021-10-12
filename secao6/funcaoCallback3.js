//Exemplo de callback no browser

//Quando ocorreu X coisa chama a FUNÇÃO X, isso é callback

document.getElementsByTagName('body')[0].onclick = function(click){
    console.log("Ocorreu o click");
}
