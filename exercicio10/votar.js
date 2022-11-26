let anoAtual = parseInt(prompt("Digite o ano atual: "));
let anonascimento = parseInt(prompt("Digite o ano de seu nascimento: "));
let mensagem = "";

votar = anoAtual - anonascimento

if(votar >= 15){
    mensagem = "Você pode votar!"
}else{
    mensagem = "Você não pode votar!"
}

console.log(mensagem)