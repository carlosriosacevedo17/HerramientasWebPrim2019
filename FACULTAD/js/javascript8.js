function displayDate() {
document.getElementById("fechaFooter").innerHTML=Date();
}

function Muestra() {
  var x = document.getElementById("form1");
  var y=x.getElementsByClassName("caja");
  var z=x.getElementsByClassName("rdb");
  var w=x.getElementsByClassName("estado");
  var c=x.getElementsByClassName("chkh");
  var text = "";
  var i;
  for (i = 0; i < y.length ;i++) {
    text += y[i].value + "<br>";
  }
  for (i = 0; i < z.length ;i++) {
  	if (z[i].checked)
      text += z[i].value + "<br>";
  }
  for (i = 0; i < c.length ;i++) {
  	if (c[i].checked)
      text += c[i].value + "<br>";
  }
  for (i = 0; i < w.length ;i++) {
  	  text += w[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML =
   text;
}