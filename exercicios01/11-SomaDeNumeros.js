// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require("prompt-sync")();

let soma = 0;

for(let i = 0; i < 5; i++){
    let num = Number(prompt(`Digite o ${i+1}º numero: `));
    soma += num;
}

console.log(`A soma dos numeros digitados é: ${soma}`);