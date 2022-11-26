// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = parseInt(prompt("Digite o numero que deseja saber se é par ou impar: "))

if(numero % 2 == 0){
    mensagem = "Número é par!"
}else{
    mensagem = "Número é impar!"
}

console.log(mensagem);