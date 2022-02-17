let idade=parseInt(prompt("Digite sua idade"));
alert (verificarIdade(idade));

function verificarIdade(idade){
    if (idade<18){
        return "Você é menor de idade."
    }
    else{
        return "Você é maior de idade."
    }
}
