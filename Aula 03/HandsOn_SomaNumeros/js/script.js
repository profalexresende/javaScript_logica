function calcular(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let res=0;
    if(n1<n2){
        for(let i=n1+1;i<n2;i++){
            res=res+i; //res+=i;
        }
        document.getElementById("result").innerHTML=res.toString();
    }
    else{
        document.getElementById("result").innerHTML=
        "O primeiro número deve ser menor que o segundo!!!!!!";
    }
}