function calcular(){
    let preco=parseFloat(document.getElementById("preco").value);
    let qtde=parseInt(document.getElementById("qtde").value);
    let res=0;
    if(qtde>1){
        res=Math.floor(qtde*preco);
        alert (`Valor com desconto ${res}`);
    }
    else{
        res=preco;
    }
    document.getElementById("resposta").innerHTML=res.toString();
}