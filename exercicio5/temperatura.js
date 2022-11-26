/*Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.*/

let grausCelsius = parseInt(prompt("Digite a temperatura a converter de Celsius para Fahrenheit: "));
let grausFahrenheit = 0;

grausFahrenheit = grausCelsius * 1.8 + 32

console.log(`Convertendo ${grausCelsius} grau Celsius para Fahrenheit da: ${grausFahrenheit}`);