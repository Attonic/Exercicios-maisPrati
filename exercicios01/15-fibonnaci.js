//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let n1 = 0;
let n2 = 1;
let n3 = 0;
for(let i = 0; i <= 10; i++){
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}