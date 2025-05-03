// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite a nota (0 a 10): "));
if(num >= 0 && num <= 4){
    console.log(`Nota ${num}, Reprovado`);
}else if(num >= 5 && num < 7){
    console.log(`Nota ${num}, Recuperação`);
}else{
    console.log(`Nota ${num}, Aprovado`);
}