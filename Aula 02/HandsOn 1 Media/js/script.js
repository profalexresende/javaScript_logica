let n1=parseFloat(prompt("Digite a primeira nota"));
let n2=parseFloat(prompt("Digite a segunda nota"));
let n3=parseFloat(prompt("Digite a terceira nota"));
let media=(n1+n2+n3)/3;
if (media<4){
    document.getElementById("media").innerHTML=`REPROVADO com média ${media}`
}else if (media<7){
    document.getElementById("media").innerHTML=
    "EM PROVA FINAL com média " + media
}
else {
    document.getElementById("media").innerHTML=`APROVADO com média ${media}`
}