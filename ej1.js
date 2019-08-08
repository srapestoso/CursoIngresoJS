function ej2(){

    var nombre;
    var edad;
    var pg=0;
    var pp=0;
    var cont = 0;
    var acpg = 0;
    var acpp = 0;
    var continuar = "si";
    var acedad=0;
    var proedad;
    var contpost=0;
    var tenismax;
    var tenismin;
    var tenismaxg=0;
    var tenisminp=0;
    var record=0;

    while (continuar == "si") {

        nombre = prompt("Ingrese un nombre");

            while (nombre == isNaN){
             nombre = prompt("Dato invalido, reingrese");
            }
    
        edad = parseInt(prompt("Ingrese edad"));

            while (edad == isNaN){
                edad = parseInt(prompt("Dato invalido, reingrese"));
            }

        pg = prompt("Ingrese pg");

            while (pg == isNaN){
                pg = prompt("Dato invalido, reingrese");
            }

        pp = prompt("Ingrese edad");

            while (pp == isNaN){
                pp = prompt("Dato invalido, reingrese");
            }

        cont++;

        acedad = acedad + edad;
        
        if(pg>pp){
            record ++;
        }
            if ( record > 0 ) {

                contpost++;

            }

            if (cont == 1){
            tenismin = nombre;
            tenismax = nombre;
            tenismaxg = pg;
            tenisminp = pp;
            }

            if (pg > tenismaxg){

                tenismaxg = pg;
                tenismax = nombre;
            }

            if ( pp > tenisminp ){
                tenismin = nombre;
                tenisminp = pp;
            }

        continuar = prompt("Desea continuar?");

    }

    proedad = acedad/cont;

    document.write("Promedio de edad = " + proedad);
    document.write("Cantidad de record positivo = " + record);
    document.write("Tenista con mas victorias = " + tenismax);
    document.write("Tenista con mas derrotas = " + tenismin);

}
