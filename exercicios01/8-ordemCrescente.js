// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));


if(n1 == n2){
    console.log("Os numeros são iguais!")
}else if(n1 > n2){
    console.log(`O numero: ${n1} é maior que o numero: ${n2}`);
}else{
    console.log(`O numero: ${n2} é maior que o numero: ${n1}`);
}