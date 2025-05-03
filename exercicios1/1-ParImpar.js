// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um numero sendo ele inteiro: "));
function vericarNumero(num){
    if(num % 2 === 0){
        console.log(`O número ${num} é Par`);
    }else{
        console.log(`O número ${num} é Impar`);
    }
}
vericarNumero(num);





























// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.