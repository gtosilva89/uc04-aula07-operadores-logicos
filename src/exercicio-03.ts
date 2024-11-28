// 3 - Escreva um programa que informe
// a categoria de um jogador de futebol, considerando sua idade:
// infantil (até 13 anos),
// juvenil (até 17 anos) ou
// sênior (acima de 17 anos).

//ENTRADA
const idadeJogador = 50;

// PROCESSAMENTO
let categoria = "";

if (idadeJogador <= 13){
    categoria = "Infantil";
} else {
    if (idadeJogador <= 17){
        categoria = "Juvenil";
    }else{
        categoria = "Boleiro";
    }
}

//SAIDA
console.log("Categoria Indicada: ", categoria);