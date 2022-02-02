let mes = parseInt(prompt("Digite o número do mês"));
let sMes; //variável string para o mês
switch (mes) {
    case 1:
        sMes = "Janeiro";
        break;
    case 2:
        sMes = "Fevereiro";
        break;
    case 3:
        sMes = "Março";
        break;
    case 4:
        sMes = "Abril";
        break;
    case 5:
        sMes = "Maio";
        break;
    case 6:
        sMes = "Junho";
        break;
    case 7:
        sMes = "Julho";
        break;
    case 8:
        sMes = "Agosto";
        break;
    case 9:
        sMes = "Setembro";
        break;
    case 10:
        sMes = "Outubro";
        break;
    case 11:
        sMes = "Novembro";
        break;
    case 12:
        sMes = "Dezembro";
        break;
    default:
        sMes = "Mês inválido"
        break;
}
document.getElementById("saida").innerHTML=sMes;