const valores=[100,30,20];

function minhaFuncao(primeiro,soma){
    return primeiro+soma;
}

alert (valores.reduce(minhaFuncao));