function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}

function Muestra() {
  var x = document.getElementById("form1");
  var y=x.getElementsByClassName("caja");
  var text = "";
  var i;
  for (i = 0; i < y.length ;i++) {
    text += y[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML =
   text;
}