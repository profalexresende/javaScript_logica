let l1=parseInt(prompt("Digite o Lado 1:"));
let l2=parseInt(prompt("Digite o Lado 2:"));
let l3=parseInt(prompt("Digite o Lado 3:"));
//Checar se os valores formam um triangulo
if(l1<l2+l3 && l2<l1+l3 && l3<l1+l2){
    if(l1==l2 && l2==l3){
        document.getElementById("saida").innerHTML=
    "Triângulo Equilátero.";
    }
    else if(l1!=l2 && l1!=l3 && l2!=l3){
        document.getElementById("saida").innerHTML=
    "Triângulo Escaleno.";
    }
    else{
        document.getElementById("saida").innerHTML=
    "Triângulo Isósceles.";
    }
}
else{
    document.getElementById("saida").innerHTML=
    "Os valores informados não formam um triângulo.";
}