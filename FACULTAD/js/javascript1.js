var arreglo=new Array(10);
var i=0;
var estado=true;
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

function Persona(nombre,paterno,materno,correo,estado){
	this.nombre=nombre;
	this.paterno=paterno;
	this.materno=materno;
    this.correo=correo;
    this.estado=estado;
    this.imprimirInfo=function(){
		return this.nombre+" "+this.paterno+" "+this.materno+" "+this.correo+" "+this.estado;
	}
}

function muestraTodos(contador){
	var cadena="";
   for (var i = 0; i <= contador; i++) 
   	cadena=cadena+(i+1)+".-"+arreglo[i].imprimirInfo()+"<br>";
   document.getElementById("grafica").innerHTML=cadena;
}
   	
function muestra(){
	if ((document.getElementById("nombre").value!="") && 
    (document.getElementById("paterno").value!="") && 
    (document.getElementById("materno").value!="") &&
    (document.getElementById("correo").value!="") &&
     (estado!=false))
	{
	var P1= new Persona(document.getElementById("nombre").value,
	document.getElementById("paterno").value,
	document.getElementById("materno").value,
  document.getElementById("correo").value,
  document.getElementById("estado").value);
    arreglo[i]=P1;
    document.getElementById("grafica").style.display = "block";
    muestraTodos(i);
    i++;
    document.getElementById("nombre").value="";
	document.getElementById("paterno").value="";
    document.getElementById("materno").value="";
    document.getElementById("correo").value="";

    }
}

function displayDate() {
  document.getElementById("fechaFooter").innerHTML = Date();
   document.getElementById("grafica").style.display = "none";
   document.getElementById("municipio").style.display = "none";

}

function valida_correo(){
var campo=document.getElementById('correo').value;
var valido = document.getElementById('emailOK');
estado=true;

if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(campo)) 
      {
        valido.innerText = "Incorrecto";
        estado=false;
      }
else{
   valido.innerText = "";
 }
return estado;      
}

function carga_estados(){
  var estados=["Aguascalientes","Baja California",
  "Baja California Sur","Campeche","Colima","Puebla",
  "Guerrero","Morelos","Tlaxcala","Veracruz",
  "Ciudad de México","Estado de México","Querétaro"];
  estados.sort();
 for(var i in estados)
  { 
  	if (estados[i]=="Puebla")
   document.getElementById("estado").innerHTML +=
   "<option value='"+estados[i]+"' selected>"+estados[i]+
   "</option>"; 
   else
   	document.getElementById("estado").innerHTML +=
   "<option value='"+estados[i]+"'>"+estados[i]+
   "</option>";
  }
}

function graficaMunicipios(cmb,vector)
{
  vector.sort();
  for(var i in vector)
  {
    cmb.innerHTML +=
   "<option value='"+vector[i]+"'>"+vector[i]+
   "</option>"; 
  }
}

function cargarMunicipio(estado){
	document.getElementById("municipio").style.display = "block";
	var municipiosPuebla=["Atlixco","Puebla",
	"Teziutlán","Cholula","Izúcar de Matamoros",
	"Tlatlauquitepec","Amozoc","Tehuacán"];
	var municipiosTlaxcala=["Tenancingo","Nativitas",
	"Huamantla","Apizaco","Santa Ana Chiautempan"];
  removeOptions(document.getElementById("municipio"));
  switch (estado) {
  case 'Puebla':
    graficaMunicipios(document.getElementById("municipio"),
  	municipiosPuebla);
    break;
  case 'Tlaxcala':
    graficaMunicipios(document.getElementById("municipio"),
  	municipiosTlaxcala);
    break;
  }
}

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
      selectbox.remove(i);
}

