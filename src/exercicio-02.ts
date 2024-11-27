// 2 - Escreva um programa que resolva o seguinte problema:
// uma cópia de "xerox" custa R$0,25 por fola, mas acima de 100 folhas esse valor cai para R$ 0,20 por unidade.
// Dado o total de cópias, informe o valor a ser pago


//ENTRADA
const numeroCopias = 100;

//PROCESSAMENTO
let valorTotal = 0;

if (numeroCopias <= 100){
    valorTotal = numeroCopias * 0.25;
} else {
    valorTotal = numeroCopias * 0.20;
}

//SAIDA
console.log("O valor total para para " + numeroCopias + " cópias é R$ " + valorTotal + " reais.");