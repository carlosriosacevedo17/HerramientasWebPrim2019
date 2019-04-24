function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}

function crearBotones(){
var para = document.createElement("button");
var node = document.createTextNode("Nuevo Boton.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
}

