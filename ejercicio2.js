/*Crear un programa que muestre el valor de sumar 
todos los números desde 1 hasta el número que 
introduzca el usuario. Por ejemplo si introduce el 
8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8).*/


let num = parseInt(window.prompt('Escribe un numero.'));
let suma = 0;

for (let i= 1; num > i;i++) {
    suma = suma + i;
    console.log (suma);
}

let a = 0;
do {
    console.log (suma)
    suma = suma + i;
    i++;
}while (i < num);

let contador = 1;
while (contador < num) {
    suma = suma + x;
    contador++;
    console.log (suma);
}

