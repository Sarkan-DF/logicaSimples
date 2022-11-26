/*O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.*/

let custoFabrica = parseInt(prompt("Valor de curto de fabrica do carro: "));
const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;
let PrecoFinalConsumidor = 0;

PrecoFinalConsumidor = ((custoFabrica * percentualDistribuidor) + custoFabrica) + ((custoFabrica * percentualImpostos) + custoFabrica)

console.log(`O valor total do carro é: R$${PrecoFinalConsumidor},00`)