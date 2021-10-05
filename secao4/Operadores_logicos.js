//ou, se, então, e...

/*
verdadeiro = v falso = f

v e v = v
v e f = f

v ou v = v
v ou f = f
f e f = f

*exclusivo: quando devem ser diferentes e um verdadeiro

v xor v = f
v xor f = v
f xor f = f
*/
function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2;
    const compraTV50 = trabalho2 && trabalho1;
    const compraTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !compraSorvete;

    return {compraSorvete, compraTV50, compraTV32, manterSaudavel}
}

console.log(compras(true, true));