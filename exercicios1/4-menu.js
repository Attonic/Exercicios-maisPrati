// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();
let op = 0;

do{
   
    console.log("\nDigite 1 para primeira opção");
    console.log("Digite 2 para segunda opção");
    console.log("Digite 3 para terceira opção");
    console.log("Digite 4 para quarta opção");
    console.log("Digite 0 para sair opção\n");
    

    op = Number(prompt("Digite um numero de Opção: "));

    switch(op){
        case 1:
            console.log("Primeira opção selecionada!");
            break
        case 2:
            console.log("Segunda opção selecioanda!");
            break
        case 3: 
            console.log("Terceira opção selecionada!");
            break
        case 4: 
            console.log("Quarta opção selecioanda!");
            break
        case 0:
            console.log("Saiu");
            break
        default:
            console.log("Digite uma opção correta");
            break
    }
        

}while(op != 0);