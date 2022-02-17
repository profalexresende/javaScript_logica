function calcular(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let qtdePares=0;
    let i=n1+1;
    if(n1<n2){
        do{
            //verificar se um número é par
            if(i%2==0){
                qtdePares++;
            }
            i++;
        }while(i<n2);
        document.getElementById("result").innerHTML=qtdePares.toString();
    }
    else{
        document.getElementById("result").innerHTML=
        "O primeiro número deve ser menor que o segundo!!!!!!";
    }
}