// Estas dos barras indican que lo que sigue es un comentario, es decir, no se ejecuta como código
// Es útil para explicar el código o dejar notas para otros programadores
// Este es un comentario de una sola línea

/*
Este es un comentario de varias líneas
que puede abarcar varias líneas de texto.
Es útil para explicar secciones más largas de código o para dejar notas detalladas.
*/
// Para hacer comentarios se usa las teclas  Ctrl + } en la mayoría de los editores de código, 
// lo que convierte la línea o líneas seleccionadas en comentarios o las descomenta si ya lo son.


// Variables en JavaScript
// Una variable es un contenedor para almacenar datos. Estas variables tienen valor durante 
// la ejecución del programa y pueden cambiar su valor. 
// Para declarar una variable se utilizan las palabras clave var (desuso), let o const, seguidas del nombre
// de la variable.

// Tipos de variables
// varibles numericas
let edad = 25; // Variable de tipo número
let precio = 19.99; // Variable de tipo número
// variables de texto
let nombre = "Juan"; // Variable de tipo cadena de texto o string
let ciudad = "Madrid";
let miedad = "25"; // Aunque es un número, al estar entre comillas se considera una cadena de texto
// variables booleanas
let esEstudiante = true; // Variable de tipo booleano
// si es estudiante es true, entonces es estudiante, si es false, entonces no lo es
let tieneLicencia = false; 
// si tiene licencia es true, entonces tiene licencia, si es false, entonces no lo tiene


// 0 es la ausencia de luz y 1 es la presencia de luz, se manjaban con tarjetas perforadas, 
// donde el agujero representaba un 1 y la ausencia de agujero representaba un 0.
// En la actualidad, el sistema binario se utiliza en la informática para representar datos 
// y realizar operaciones lógicas. 
// Por ejemplo, en la memoria de una computadora, los datos se almacenan en forma de bits (dígitos binarios),
//  donde cada bit puede ser un 0 o un 1. 
// Además, las operaciones lógicas como AND, OR y NOT también se basan en el sistema binario para 
// procesar información.

// AND es una operación lógica que devuelve true si ambas condiciones son verdaderas, 
// de lo contrario devuelve false.
// Para entrar a un club, se requiere ser mayor de 18 años y tener una identificación válida.
// Para poder manejar un automóvil, se requiere tener una licencia de conducir válida 
// y ser mayor de 18 años. En ambos casos, ambas condiciones deben cumplirse para que la acción
//  sea permitida, lo que ejemplifica el uso de la operación lógica AND.

// tabla de verdad AND
// A     B     A AND B
// true  true   true
// true  false  false
// false true   false
// false false  false



// OR es una operación lógica que devuelve true si al menos una de las condiciones es verdadera,
//  de lo contrario devuelve false.

// Para nadar en una piscina, se requiere que el agua este tibia o que haga calor.
// Para poder entrar a un concierto, se requiere tener una entrada válida o ser un invitado especial. 
// En ambos casos, al menos una de las condiciones debe cumplirse para que la acción sea permitida, 
// lo que ejemplifica el uso de la operación lógica OR.

// tabla de verdad OR
// A     B     A OR B
// true  true   true
// true  false  true
// false true   true
// false false  false



// NOT es una operación lógica que invierte el valor de una condición, es decir, 
// devuelve true si la condición es falsa y viceversa.

// tabla de verdad NOT
// A     NOT A
// true  false
// false true

// let es una palabra clave que se utiliza para declarar variables que pueden cambiar su valor 
// a lo largo del programa.
// const es una palabra clave que se utiliza para declarar variables que no pueden cambiar su valor 
// una vez asignado, es decir, son constantes. 
// Si intentamos cambiar el valor de una variable declarada con const, obtendremos un error.

// Ejemplo de uso de const
const PI = 3.14159; // Declaramos una constante para el valor de pi
// PI = 3.14; // Esto generaría un error porque no se puede cambiar el valor de una constante

// Array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Un array se declara utilizando corchetes [] y los elementos se separan por comas.
let frutas = ["manzana", "banana", "naranja"];