/*Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/

const salarioFixo = parseFloat(prompt("Salário fixo: "));
const comissaoFixa = parseFloat(prompt("Comissão fixa: "));
const carrosVendidos = parseInt(prompt("Quantos carros vendeu: "));
const valorTotalCarrosVendidos = parseFloat(prompt("Valor total dos carros vendidos: "));

const comissaoFixaTotal = comissaoFixa * carrosVendidos
const comissaoFlex = (valorTotalCarrosVendidos * 5) / 100


console.log(`O sálario do vendedor é R$${salarioFixo + comissaoFixaTotal + comissaoFlex}.`)


