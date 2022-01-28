let kmInicial=parseFloat(prompt("Digite a KM Inicial"));
let kmFinal=parseFloat(prompt("Digite a KM Final"));
let litros=parseFloat(prompt("Digite a qtde de litros"));
let autonomia=(kmFinal-kmInicial)/litros;
alert (`Este veículo faz ${autonomia}km por litro`);