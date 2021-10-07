//PARAMETROS E RETORNOS SÃO OPCIONAIS

function area (largura, altura){
    const area = largura * altura;
    if(area > 200){
        console.log(`Area acima do permitido, area: ${area}m2`);
    } else{
        return area
    }
}

area(10,10);