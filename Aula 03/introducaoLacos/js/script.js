function calcularTabuada() {
    let num = parseInt(document.getElementById("num").value);
    let i = 1;
    let res;
    let result="";
    while (i <= 10) {
        res = num * i;
        result += res + "<br>";
        i++;//i=i+1;
    }
    document.getElementById("resultado").innerHTML=result;
}