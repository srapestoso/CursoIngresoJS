function mostrar()
{
var notas;
var sexo;
var acu=0;
var avar=0;
var baja=10;
var sexmin;

for(a=0;a<5;a++){

    notas = parseInt(prompt("Ingrese el valor de la nota"));
        while (notas < 0 || notas > 10 || isNaN(notas) || notas == null || notas == ""){
            notas = parseInt(prompt("Dato invalido, reingrese"));
        }
    sexo = prompt("Ingrese el sexo");
        while (sexo != "f" && sexo != "m"){
            sexo = prompt("Dato invalido, reingrese");
        }

    acu = acu + notas;

            //if (a==0){
               // baja = notas;
               // sexmin = sexo;
            //}
                if (notas < baja){
                    baja = notas;
                    sexmin = sexo;
                }
        
        if (sexo == "m" && notas >= 6){
            avar++;
        }    
    }
    alert("El promedio es " + acu/a + " La nota más baja y el sexo " + baja + " " + sexmin);
    alert("Cantidad de varonovichs con nota mayor a 6 es " + avar);
}


/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
, el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/