function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}
function displayFecha(y,m,d){
	var cadena=y+"/"+m+"/"+d;
document.getElementById("fecha").value=cadena;
}
function muestraEdad(){
    var hoy = new Date(document.getElementById("f_actual").value);
    var cumpleanos = new Date(document.getElementById("f_nac").value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    alert(edad);
}
