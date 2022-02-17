function principal(){
    document.getElementById("titulo").innerHTML="Parcelamento de Produto";
    document.getElementById("produto").innerHTML="Baralho de Uno - R$25,00";
}

function calcularParcela(){
    let valorProduto=25;
    let numParcelas=parseFloat(document.getElementById("nParcelas").value);
    let valorParcela=(valorProduto/numParcelas).toFixed(2);
    document.getElementById("vParcela").innerHTML=
    `Valor da parcela: R$ ${valorParcela.toString()}`;
}