// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um numero: "))

function fatorialNumro(num){
    let total = 1;
    for(let i = 1; i <= num; i++){
        total *= i;    
    }
    return total;
}

console.log(`O valor fatorial de ${num} é: ${fatorialNumro(num)}`);