// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite uma idade: "));

function classifiaIdade(idade){
    if(idade > 0 && idade <= 12){
        console.log(`Idade: ${idade} = Criança`);
    }else if(idade > 12 && idade <= 18){
        console.log(`Idade: ${idade} = Adolescente`);
    }else if(idade > 18 && idade <=59){
        console.log(`Idade: ${idade} = Adulto`);
    }else if(idade > 59){
        console.log(`Idade: ${idade} = Idoso`);
    }
}

classifiaIdade(idade);
