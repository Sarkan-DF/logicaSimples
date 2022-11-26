/*Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

let votosTotais = parseInt(prompt("Valor total de votos: "));
let votosBracos = parseInt(prompt("Quantos votos brancos: "));
let votosNulos = parseInt(prompt("Quantos votos nulos: "));
let votosValidos = 0;
let percentualVotosBrancos = 0;
let percentualVotosNulos = 0;
let percentualVotosValidos = 0;

votosValidos = votosTotais - (votosBracos + votosNulos)

percentualVotosValidos = (votosValidos / votosTotais) * 100
percentualVotosBrancos = (votosBracos / votosTotais) * 100
percentualVotosNulos = (votosNulos / votosTotais) * 100

console.log(`Total de votos são: ${votosTotais}`)

console.log(`Total de votos validos são: ${votosValidos}`)
console.log(`O percentual de votos validos são: ${percentualVotosValidos}%`)

console.log(`Total de votos branco são: ${votosBracos}`)
console.log(`O percentual de votos brancos são: ${percentualVotosBrancos}%`)

console.log(`Total de votos nulos são: ${votosNulos}`)
console.log(`O percentual de votos nulos são: ${percentualVotosNulos}%`)

