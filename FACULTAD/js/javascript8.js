function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}

function Muestra() {
  var x = document.forms["form1"];
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML =
   text;
}