//Baseado em um código, exiba o produto a ele vinculado
let codigo=parseInt(prompt("Digite o código:"));
let produto;
switch(codigo){
    case 1:
        produto="Coca-Cola";
        break;
    case 2:
        produto="Sorvete";
        break;
    case 3:
        produto="Chocolate";
        break;
    case 4:
        produto="Biscoito";
        break;
    default:
        produto="Código Inválido!!!"
        break;
}
alert (produto);