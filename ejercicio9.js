/*Escribe un programa que muestre los números de 1 a 12 en una columna. 
En la columna de al lado de 
los números impares mostrar el cuadrado de
 ese valor y en la de los pares mostrar el cubo.*/


numb =0 ;
for (i=1 ; i < 13; i++) {
    
    Math.pow (i);
    
    if (i % 2 !== 0) {
        //sacamos en consola el resultado
        console.log(`El cuadrado de ${i} es ${numb * i}`);
        //si el resto de dividir i / 2 es 0 entramos en el else ya que i es par
      } else {
        //sacamos el resultado en la consola
        console.log(`El cubo de ${i} es igual a ${i * i * i}`);
      }
    }

