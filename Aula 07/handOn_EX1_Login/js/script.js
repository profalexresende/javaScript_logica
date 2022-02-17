function efetuarLogin(){
    let login=document.getElementById("login").value;
    let senha=document.getElementById("senha").value;
    if(login=="ADM" && senha=="123"){
        document.getElementById("mensagem").innerHTML=
        "<font color=#00FF00>Seja bem vindo</font>";
    }
    else{
        document.getElementById("mensagem").innerHTML=
        "<font color=#FF0000>Login incorreto</font>";
    }
}