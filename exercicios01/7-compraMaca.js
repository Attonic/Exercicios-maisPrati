// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 seforem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let maca = Number(prompt("Digite a quantidade de Maçãs: "));


function calcMaca(maca){
    let total = 0;
    if(maca < 12){
        total = maca * 0.30;
    }else if( maca >= 12){
        total = maca * 0.25;
    }
    return total.toFixed(2);
}

console.log(`O Valor total de ${maca} Maçãs é R$ ${calcMaca(maca)}`);