// Crie um programa que validade se uma pessoa pode entrar em uma festa
// As regras para a pessoa entrar são:
// A pessoa precisa ter 18 anos ou mais
// Ou caso a pessoa tenha menos de 18 anos,
// Deve estar acompanhada de um responsável maior de 18 anos


// ENTRADA
const idadePessoa = 17;
const estaComResposavel = true;
const estaComRG = true

// PROCESSAMENTO

// if - se
// else - senão
// if (idadePessoa >= 18) {
//     // SAIDA
//     console.log("Entrada Liberada");
// } else {
//     if (estaComResposavel){
//         console.log("Entrada Liberada");
//     } else{
//     console.log("Entrada Bloqueada");
//     }
// }


if (estaComRG){
    if (idadePessoa >= 18){
        console.log("Entrada Liberada");
    } else {
        if (estaComResposavel){
            console.log("Entrada Liberada");
        } else{
            console.log("Entrada Bloqueada");
        }
    }
} else {
    console.log("Entrada Bloqueada");
}

// if (estaComRG && (idadePessoa >= 18 || estaComResposavel)){
//     console.log("Entrada Liberada");
// } else {
//     console.log("Entrada Liberada");
// }