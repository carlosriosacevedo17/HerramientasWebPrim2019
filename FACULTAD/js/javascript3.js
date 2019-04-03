function valida()
{
 var arreglo=[];
 var cadena="";
 var bandera=true;
 for(var i=0;i<=3;i++)
 {
  if (document.forms["form1"][i].value=="")
  {
  	bandera=false;
    break;
  }
  else
   cadena=cadena+" "+document.forms["form1"][i].value;
 }
 if (bandera==true)
 	alert(cadena);
 else
 	alert("error");
 return bandera;
}