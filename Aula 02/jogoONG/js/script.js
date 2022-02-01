//pessoas até 11 não podem jogar
//pessoas com 12 anos, somente com a permissão dos pais
//acima de 12 anos, pode jogar
let idade=parseInt(prompt("Digite a sua idade"));
if(idade<12){
    alert ("Sua idade não permite que você jogue!");
}
else if (idade==12){
    alert ("Você pode jogar com a permissão dos pais!");
}
else{
    alert ("Você pode jogar!");
}