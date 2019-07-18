function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();

while ( sexo != "f" && sexo != "m"){

  sexo = prompt("Reingrese nuevamente el sexo");

}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
