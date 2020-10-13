/*
Escribe un programa que pida valores. 
Si introduce un valor negativo, mostrar un
mensaje diciendo que se ignoran los valores negativos.
Seguir pidiendo hasta que el usuario introduzca un 0, 
entonces mostrar la suma de los valores introducidos. 
*/

let num ;
let suma = 0;

    num = parseInt(window.prompt('Escribe valores'));
    for (i=0; i<num ; i++) {
    suma = suma + i;
    console.log(suma)}
