let numero=parseInt(prompt("Digite um número para ver o fatorial"));
alert (calcularFatorial(numero));

function calcularFatorial(valor){
    let fat=1;//inicializar o fat
    let i=1;
    while(i<=valor){
        fat=fat*i;
        i++;
    }
    return fat.toString();
}
