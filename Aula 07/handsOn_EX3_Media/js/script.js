let n1;
let n2;
let n3;
let media;
let nomeAluno;

function principal(){
    document.getElementById("titulo").innerHTML="Média Escolar";
}

function calcularMedia(){
    nomeAluno=document.getElementById("nomeAluno").value;
    
    media=(n1+n2+n3)/3;
    
    if(media>=7){
        document.getElementById("saida").innerHTML=
            `${nomeAluno}, sua média é ${media.toFixed(1).toString()} 
            e você está <font color="#00FF00"><n>APROVADO!</n></font>`;
    }
    else if(media>=5){
        document.getElementById("saida").innerHTML=
            `${nomeAluno}, sua média é ${media.toFixed(1).toString()} 
            e você está <font color="#FAD921"><n>RECUPERAÇÃO!</n></font>`;
    }
    else {
        document.getElementById("saida").innerHTML=
            `${nomeAluno}, sua média é ${media.toFixed(1).toString()} 
            e você está <font color="#FF0000"><n>RETIDO!</n></font>`;
    }
}

function validarNotas(){
    n1=parseFloat(document.getElementById("nota1").value);
    n2=parseFloat(document.getElementById("nota2").value);
    n3=parseFloat(document.getElementById("nota3").value);

    if(isNaN(n1) || n1<0 || n1>10){
        document.getElementById("saida").innerHTML=
        `Digite uma nota válida no campo Nota 1`;
        return;
    }

    if(isNaN(n2) || n2<0 || n2>10){
        document.getElementById("saida").innerHTML=
        `Digite uma nota válida no campo Nota 2`;
        return;
    }

    if(isNaN(n3) || n3<0 || n3>10){
        document.getElementById("saida").innerHTML=
        `Digite uma nota válida no campo Nota 3`;
        return;
    }
    calcularMedia();
}