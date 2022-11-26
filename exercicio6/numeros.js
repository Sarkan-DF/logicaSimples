let num1 = parseInt(prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo numero: "));
let mensagem = ""

if(num1 == num2){
    mensagem = "Numeros iguais!";
}else if(num1 > num2){
    mensagem = "Primeiro é maior";
}else{
    mensagem = "Segundo maior";
}

console.log(mensagem, num1, num2);