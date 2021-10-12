/* IIFE: Immediately Invoked Function Expression
 Funções auto-invocadas */

 (function() {
    console.log("Isso é executado na hora");
    console.log('Foge do escopo global fazendo esta function');
 }) // lembrar que a função deve ser declarada dentro de ()
 () // chama a função