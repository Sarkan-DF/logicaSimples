// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome e a quantidade de
// letras que o nome possui, bem como a idade e o ano de nascimento
// do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
// 2000”.

let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));
let numeroLetras = 0;
let anoNascimento = 0;

numeroLetras = nome.length
anoNascimento = 2022 - idade

console.log(`Nome: ${nome}, ${numeroLetras} letras.`);
console.log(`Idade: ${idade} anos, nasceu em ${anoNascimento}.`);