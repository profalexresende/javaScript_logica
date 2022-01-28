let doacao=parseFloat(prompt("Digite o valor da doação em dólares"));
let valorDolar=parseFloat(prompt("Digite a cotação do dólar"));
let valorEmReais=doacao*valorDolar;
alert (`Valor convertido: R$${valorEmReais}`);