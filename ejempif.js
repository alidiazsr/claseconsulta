// Comentarios en JavaScript

// Este es un comentario de una sola línea

/*
  Este es un comentario
  de múltiples líneas
*/

/* Script es un bloque de código que se ejecuta en el navegador o 
en un entorno de JavaScript como Node.js. 
Los archivos en programación se llaman scripts porque contienen 
código que se ejecuta para realizar tareas específicas. */

// Ejemplos de estructuras de control en JavaScript
// If pregunta si una condición es verdadera o falsa y ejecuta un bloque de código
// en consecuencia.
// Ejemplo Saber si una persona es mayor de edad o no usando if
// Estructura condicional if
// Declaremos una variable para almacenar la edad de una persona
let edad = 18;

// if (edad >= 18) {
//     // Si la condición es verdadera, se ejecuta este bloque de código
//   console.log("Eres mayor de edad.");
// } else {
//   // Si la condición es falsa, se ejecuta este bloque de código
//   console.log("Eres menor de edad.");
// }

// Para comentar usar las teclas Ctrl + / en Windows o Ctrl + }
// en Mac para comentar o descomentar una línea de código rápidamente.
// Ejemplo de if anidado notas de un estudiante

// let nota = 85;
// if (nota >= 90) {
//      console.log("Excelente");
//     } else if (nota >= 80) {
//         console.log("Muy bien"); 
//         } else if (nota >= 70) {
//             console.log("Bien");
//             } else if (nota >= 60) {
//                 console.log("Suficiente");
//                 } else {
//                     console.log("Insuficiente");
//                 }



// Estructura de bucle switch
// El switch evalúa una expresión y ejecuta el bloque de código correspondiente
// al valor de la expresión. Es útil para manejar múltiples casos de manera más 
// clara que con múltiples if-else.
// Ejemplo: Evaluar el día de la semana usando switch
// let dia = "Domingo";

// switch (dia) {
//   case "Lunes":
//     console.log("Hoy es lunes. Arranca la semana con energía.😍");
//     break;
//   case "Martes":
//     console.log("Hoy es martes. Vive el día con entusiasmo.😊");
//     break; 
//   case "Miércoles":
//     console.log("Hoy es miércoles. Mitad de semana, sigue adelante.😎");
//     break;
//   case "Jueves":
//     console.log("Hoy es jueves. Casi es fin de semana, mantén el ritmo.💪");
//     break;
//   case "Viernes":
//     console.log("Hoy es viernes. ¡El fin de semana está cerca!🎉");
//     break;
//   case "Sábado":
//     console.log("Hoy es sábado. Disfruta tu día de descanso.😌");
//     break;
//   case "Domingo":
//     console.log("Hoy es domingo. Descansa y recarga energías para la semana.🌞");
//     break;
//   default:
//     console.log("Día no válido.");
// }

// break se utiliza para salir de un bloque de código en estructuras de control 
// como switch o bucles.
// Si no se incluye break, el programa continuará ejecutando los siguientes casos 
// incluso si no coinciden con la expresión evaluada, lo que puede llevar a 
// resultados inesperados.

// Estructura de bucle While
// El bucle while ejecuta un bloque de código Mientras una condición sea verdadera.
// Ejemplo: Contar del 1 al 5 usando while

// let contador = 1;
// console.log("Contando del 1 al 5 usando while:"); // Imprime un mensaje en la consola para indicar el inicio del conteo
// while (contador <= 5) {// Mientras el contador sea menor o igual a 5, 
// // se ejecutará este bloque de código
//   console.log(contador); // Imprime el valor actual del contador en la consola
//   contador++; // Incrementamos el contador para evitar un bucle infinito
//   //contador++ es equivalente a contador = contador + 1, lo que significa que
// // estamos aumentando el valor de contador en 1 en cada iteración del bucle.
// }  


// Estructura de bucle For 
// El bucle for es una estructura de control que se utiliza para repetir un bloque de 
// código un número específico de veces. 
// Se compone de tres partes: la inicialización, la condición y la actualización (incremento).
// Ejemplo: Contar del 1 al 5 usando for
// console.log("Contando del 1 al 5 usando for:"); // Imprime un mensaje en la consola para indicar el inicio del conteo
// for (let i = 1; i <= 5; i++) {
//     console.log("Vuelta número:"); // Imprime el valor actual de i en la consola
//     console.log(i); // Imprime el valor actual de i en la consola
// }

// Combinando estructuras de control

// Pedimos al usuario que ingrese un número del 1 al 7 para mostrar el día de la semana correspondiente
// parseInt se utiliza para convertir la entrada del usuario (que es una cadena de texto) 
// en un número entero, lo que nos permite usarlo en la estructura switch para determinar 
// el día de la semana.
const prompt = require('prompt-sync')(); // Importamos la biblioteca prompt-sync para permitir la entrada de datos en la consola

// formato para importar rapidamente una biblioteca en JavaScript usando require('nombre-de-la-biblioteca') y asignarla a una variable, en este caso, prompt, para poder utilizarla posteriormente en el código. Esto es común en entornos de Node.js para manejar la entrada de datos desde la consola.

let contadorIntento = 1; // Variable para contar el número de intentos
while (contadorIntento <= 3) { // Permitir hasta 3 intentos
    let numeroDia = parseInt(prompt("Ingresa un número del 1 al 7 para conocer el día de la semana:"));
    switch (numeroDia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:  
            console.log("Domingo");
            break;
        default:
            console.log("Número no válido.");
    }
    contadorIntento++; // Incrementar el contador de intentos
}
