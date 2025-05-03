// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um numero de 1 a 10: "));

console.log(`Tabuada de Soma ${num}`);
for(let i = 1; i <= 10; i++){
    console.log(`${num} + ${i} = ${i + num}`);
}

console.log(`Tabuada de Subtração ${num}`);
for(let i = 1; i <= 10; i++){
    console.log(`${num} + ${i} = ${i - num}`);
}

console.log(`Tabuada de Divisão ${num}`);
for(let i = 1; i <= 10; i++){
    console.log(`${num} / ${i} = ${i / num}`);
}

console.log(`Tabuada de Multiplicação ${num}`);
for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${i * num}`);
}