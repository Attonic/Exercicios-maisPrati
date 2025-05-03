// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.


const prompt = require("prompt-sync")();
console.log("Calculo IMC");
let altura = Number(prompt("Digite sua altua: "));
let peso = Number(prompt("Digite seu peso: "));

function calculoImc(altura, peso){
    let imc = peso / (altura * altura);
    if(imc < 18.5){
        console.log(`${imc.toFixed(2)} = Magreza`)
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log(`${imc.toFixed(2)} = Normal`)
    }else if(imc >= 25 && imc <= 29.9){
        console.log(`${imc.toFixed(2)} = Sobrepeso`)
    }else if(imc >= 30 && imc < 39.9){
        console.log(`${imc.toFixed(2)} = Obesidade`)
    }else{
        console.log(`${imc.toFixed(2)} = Obesidade grave`)
    }


}

calculoImc(altura, peso);
