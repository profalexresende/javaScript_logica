let n1=parseFloat(prompt("Digite a nota 1:"));
let n2=parseFloat(prompt("Digite a nota 2:"));
let media=(n1+n2)/2;
let dadas=parseInt(prompt("Digite a qtde de aulas dadas:"));
let assistidas=parseInt(prompt("Digite a qtde de aulas assistidas:"));
let freq=(assistidas/dadas)*100;

if(media>=7 && freq>=75){
    document.getElementById("situacao").innerHTML=
    `Aprovado com média ${media} e frequência de ${freq}%`;
}
else{
    document.getElementById("situacao").innerHTML=
    `Retido com média ${media} e frequência de ${freq}%`;
}
