var arreglo=new Array(10);
var i=0;
function sumar(){
	document.getElementById("n1").value;
    document.getElementById("n2").value;
    document.getElementById("resultado").value=(parseInt(document.getElementById("n1").value)+parseInt(document.getElementById("n2").value))
}

function restar(){
	document.getElementById("n1").value;
    document.getElementById("n2").value;
    document.getElementById("resultado").value=(parseInt(document.getElementById("n1").value)-parseInt(document.getElementById("n2").value))
}

function multiplicar(){
	document.getElementById("n1").value;
    document.getElementById("n2").value;
    document.getElementById("resultado").value=(parseInt(document.getElementById("n1").value)*parseInt(document.getElementById("n2").value))
}
function limpiarCajas(){
	document.getElementById("n1").value=0;
    document.getElementById("n2").value=0;
    document.getElementById("resultado").value=0;
}

function limpiar(){
	document.getElementById("nombre").value="";
	document.getElementById("paterno").value="";
    document.getElementById("materno").value="";
    document.getElementById("grafica").style.display = "none";
    while (i>=0)
    {
    	arreglo[i]="";
    	i--;
    }
    i=0;
}

function carga(){
	document.getElementById('demo').style.fontSize='35px'
	document.getElementById('demo').innerHTML = "Hola Mundo!"
}

function soloNumeros(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toUpperCase();
 letras = "0123456789";
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

function Persona(nombre,paterno,materno){
	this.nombre=nombre;
	this.paterno=paterno;
	this.materno=materno;
	this.imprimirInfo=function(){
		return this.nombre+" "+this.paterno+" "+this.materno;
	}
}

function muestraTodos(contador){
	var cadena="";
   for (var i = 0; i <= contador; i++) 
   	cadena=cadena+(i+1)+".-"+arreglo[i].imprimirInfo()+"<br>";
   document.getElementById("grafica").innerHTML=cadena;
}
   	
function muestra(){
	if ((document.getElementById("nombre").value!="") && (document.getElementById("paterno").value!="") && (document.getElementById("materno").value!=""))
	{
	var P1= new Persona(document.getElementById("nombre").value,
	document.getElementById("paterno").value,
	document.getElementById("materno").value);
    arreglo[i]=P1;
    document.getElementById("grafica").style.display = "block";
    muestraTodos(i);
    i++;
    document.getElementById("nombre").value="";
	document.getElementById("paterno").value="";
    document.getElementById("materno").value="";

    }
}

function displayDate() {
  document.getElementById("fechaFooter").innerHTML = Date();
   document.getElementById("grafica").style.display = "none";
}

