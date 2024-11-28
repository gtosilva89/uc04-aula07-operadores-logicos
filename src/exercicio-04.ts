// 4 - Escreva um programa que leia três números do teclado
// e os imprima na tela na ordem inversa da entrada.

// const numeros: number[] = [10,4,22];


// while
let repeticoes = 1;
while (repeticoes < 10) {
    console.log("Sou eu de novo");// repeticoes = repeticoes + 1;
    repeticoes++; // autoincremento
}

// do/while
repeticoes = 10;

console.log("DO/WHILE");
do {
    console.log("Sou eu de novo + " + repeticoes);
    repeticoes--; //autoincremento
} while (repeticoes > 0);

// VALIDAÇÃO DE SENHAS

const senha = "senhasegura"
let tentativas = 0;
let senhaValida = false;
const senhas = ["errou","nadaaver","brincadeirabixo","senhaerrada","senhasegura"]

do {
    if(senha[tentativas] === senha) {
        senhaValida = true;
        console.log("Acertou");
    } else {
        console.log("A senha pertence a outra pessoa")
    }
    tentativas++
} while (tentativas < 5 && !senhaValida)

//for - para
const numeros: number[] = [10,4,22,53,654];
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

numeros.reverse();
console.log(numeros);