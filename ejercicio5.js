/*Escribe un programa que muestre el resultado de sumar 
todos los números del 1 hasta el número introducido y 
que vuelva a pedirle al usuario otro número
 hasta que el usuario introduzca un 0.*/

 //Se repite la pregunta pero funciona .
let suma = 0;
let num = parseInt(window.prompt('introduce un numero'));

 for (let i =0; i<num ; i++){
    suma = suma + i;
    console.log(suma);
 }
 let num2 =parseInt(window.prompt('introduce 0'));
 num2 = num !== 0;

//ejercicio de la grabación. 
/*
let suma = 0;
let num;
do {
    num = parseInt(window.prompt('Escribe un numero'));
    for (let i = 0; i<num; i++ ) {
     suma = suma + 1;
     console.log(suma);
    }
}
while (num = !==0);
*/