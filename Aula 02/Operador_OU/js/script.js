//Ler o total de uma venda e conceda 20% caso o valor da compra
//seja superior a R$1000 OU se o cupom desconto for
//DESCONTO20
let valorCompra=parseFloat(prompt("Valor da compra:"));
let cupom=prompt("Cupom desconto");
let valorFinal;
if (valorCompra>1000 || cupom=="DESCONTO20"){
    valorFinal=valorCompra-(valorCompra*0.2);
}
else{
    valorFinal=valorCompra;
}
alert (`Valor final da compra: R$ ${valorFinal}`);