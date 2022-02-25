function principal(){
    let altura = document.getElementById("txtAltura").value;
    calcularPeso(altura);
}

function calcularPeso(altura) {
    let peso = 0;
    let sexo=document.getElementById("sexo");
    let selecionado=sexo.options[sexo.selectedIndex].value;
    if (selecionado=="Masculino") {
        peso = 72.7 * altura - 58;
    }
    else {
        peso = 62.1 * altura - 44.7;
    }

    alert(`Seu peso ideal é: ${peso.toFixed(2).toString()}`);
}