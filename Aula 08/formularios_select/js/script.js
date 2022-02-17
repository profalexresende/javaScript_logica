function verificar(){
   let selectCidades=document.getElementById("cidades");
   let selecionado=selectCidades.options[selectCidades.selectedIndex].value;
   alert(selecionado);
}