
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function cargar_paises()
{
 var arreglo = ["AUSTRALIA", "MÉXICO",
  "ARGENTINA","VENEZUELA", "BRASIL"];
 arreglo.sort();
 for(var i in arreglo)
  { 
   document.getElementById("paises").innerHTML +=
   "<option value='"+arreglo[i]+"'>"+arreglo[i]+
   "</option>"; 
  }
}

function soloLetras(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toUpperCase();
 letras = " ÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
 especiales = "8-37-39-46";
 tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
           tecla_especial = true;
           break;
        }
    }
  if(letras.indexOf(tecla)==-1 &&
     !tecla_especial){
           return false;
       }
}
function soloLetrasNumeros(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toUpperCase();
 letras = " ÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
 especiales = "8-37-39-46";
 tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
           tecla_especial = true;
           break;
        }
    }
  if(letras.indexOf(tecla)==-1 &&
     !tecla_especial){
           return false;
       }
}

function displayDate() {
  document.getElementById("fechaFooter").innerHTML =
   Date();
}

function limpiarCajas(){
  document.getElementById("nombre").value="";
    document.getElementById("paterno").value="";
    document.getElementById("materno").value="";
    document.getElementById("grafica").style.display = "none";
}