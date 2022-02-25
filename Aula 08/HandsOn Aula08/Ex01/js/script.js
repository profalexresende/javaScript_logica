function calcularPeso() {
    let peso = 0;
    let altura = document.getElementById("txtAltura").value;
    let radios = document.getElementsByName("sexo");
    if (radios[0].checked) {
        peso = 72.7 * altura - 58;
    }
    else {
        peso = 62.1 * altura - 44.7;
    }

    alert(`Seu peso ideal é: ${peso.toFixed(2).toString()}`);
}