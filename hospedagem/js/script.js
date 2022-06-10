function calcularDiarias(){
    let entrada=new Date(document.getElementById("inputEntrada").value);
    let saida=new Date(document.getElementById("inputSaida").value);
    let total=((saida.getTime()-entrada.getTime())/(1000 * 60 * 60 * 24))*350;
    document.getElementById("total").innerHTML=total.toString();
}