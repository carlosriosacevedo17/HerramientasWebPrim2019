function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}
function displayFecha(y,m,d){
	var cadena=y+"/"+m+"/"+d;
document.getElementById("fecha").value=cadena;
}
function muestraEdad(){
 var f_actual=document.getElementById("f_actual").value;
 var f_nac=document.getElementById("f_nac").value;
 alert(f_actual);
 alert(f_nac);
}