function mostrar()
{
  //Corregir
  var planeta;

  planeta = prompt("Ingrese un planeta");

  switch(planeta){

    case "tierra":
    alert("Acá vivimos");
    break;
    case "mercurio":
    case "venus":
    alert("Acá hace más calor");
    break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    alert("Acá hace más frio");
    break;

  }

}
