/*As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

let numerosMaças = parseInt(prompt("Digite o numero de maças que deseja comprar: "))
let valorMaçasDuzia = 0;
let valorMaçasAparte = 0;
let valorFinalPagar = 0;

numeroDivisao = numerosMaças / 12
numeroDivisao = parseInt(numeroDivisao)
numeroResto = numerosMaças % 12

valorMaçasDuzia = ((numeroDivisao * 12) * 0.25)
valorMaçasAparte = numeroResto * 0.30

valorFinalPagar = valorMaçasDuzia + valorMaçasAparte

valorFinalPagar = valorFinalPagar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log(`O valor total na compra de ${numerosMaças} e de ${valorFinalPagar}.`)