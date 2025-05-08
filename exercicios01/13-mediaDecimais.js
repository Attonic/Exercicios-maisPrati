// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();
let media = 0, i = 0, soma = 0;
let num = null;
do{
    num = Number(prompt("Digite um numero Decimal, para sair digite 0: "));
    soma += num;
    i++;
}while(num != 0);

media = soma / (i -1);
console.log(`A media dos numeros digitados é: ${media}`);