var frutas = [];

function displayDate() {
  document.getElementById("fechaFooter").innerHTML = Date();
  document.getElementById("grafica").style.display = "none";
}

function validateForm() {
  var x = document.forms["myForm"]["frutas"].value;
  if (x == "") {
    alert("El campo Frutas debe estar lleno");
    return false;
  }
}

function muestraVector(){
	var cadena=" ";
	for(i=0;i<frutas.length;i++)
	 cadena+=frutas[i]+"<br>";
	document.getElementById("grafica").innerHTML=cadena;
}

function carga(){
	document.getElementById("grafica").style.display = "block";
	frutas.push(document.forms["myForm"]["frutas"].value);
	muestraVector();
}

function descarga(){
	if (frutas.length>0)
	 {
	  document.getElementById("grafica").style.display = "block";
	  frutas.pop();
	  muestraVector();
	 }
	else
     document.getElementById("grafica").style.display = "none";
}