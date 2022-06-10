function fecharPedido(){
    let burger=parseInt( document.getElementById("inputBurger").value);
    let refri=parseInt( document.getElementById("inputRefri").value);
    let fritas=parseInt( document.getElementById("inputFritas").value);
    let total=(35*burger)+(5.5*refri)+(20.5*fritas);
    document.getElementById("total").innerHTML=total.toString();
}