// Taller en Clase - TypeScript
// Parte 1: Tipos de Datos
// Declaración de Variables:
// Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano,
// arreglo, objeto, etc.
// Uso de Tipos de Literales:
// Utilicen tipos de literales para limitar los valores de una variable.
//______________________________________________________________
let numerico : number = 2; /* declaracion de tipo numerico */
let cadenas : string = "Hola mundo"; /* declaracion string o cadena de caracteres*/
let booleanos: boolean = true; /* declaracion de tipo booleano true o false*/

let arreglo: number[] = [1,2,3,4] /*corchetes cuadrados son para arreglos en typeScript importante ver que el corchete cuadrado al definir la variable es la cajita donde ingresan datos*/

type objeto = {a:string, b: number, c: boolean, d:any, f:string[]} /**/
let objeto: object= {a:"nathalia",b:52,c:false,d:"@↓hioo",f:["A","D","C"]};
console.log(`Tengo ${numerico} mascotas y un loro que dice ${cadenas} cada ${arreglo[2]} horas`); /* las `` son las literales y se utiliza para concatenar y limitar valores y se usa con ${} */
console.log(objeto)


// Parte 2: Condicionales
// Estructuras Condicionales:
// Resuelvan un problema utilizando estructuras condicionales (if, else if, else).
let mascota : string [] = ["perro","gatito","loro"]
let mascota2 : string [] = ["perrito","gato","loro"]
let mascota3 : string [] = ["perrito","gatito","loro"]
if(mascota2[0]==="perro"){
    console.log(`felicidades tienes un ${mascota2[0]}`)
}
else if (mascota2[1]==="gato"){
    console.log(`ojo te rasguña el ${mascota2[1]}`)
}
else {
    console.log(`ese ${mascota2[2]} no deja de decir ${cadenas}`)
}

// Parte 3: Funciones
// Funciones Básicas:
// Creen funciones básicas con diferentes tipos de parámetros y tipos de retorno.

function saludo(): void {
    console.log("¡Hola!");
}
function restar(a: number, b: number): number {
        let ejemplo: number = a-b
        return ejemplo;
}
console.log(`${restar(5,9)}`)
saludo()

// Funciones con Parámetros Opcionales y Predeterminados:

function saludar(nombre: string, salud?: string): void {
    if (salud) {
        console.log(`${salud}, ${nombre}!`);
    } else {
        console.log(`Hola, ${nombre}!`);
    }
}
saludar("hello")
// Creen funciones que utilicen parámetros opcionales y con valores
// predeterminados.

function despedirse(nombre: string ="coloca tu nombre", adios?: string): void {
    if (adios) {
        console.log(`${adios}, ${nombre}!`);
    } else {
        console.log(`Hola, ${nombre}!`);
    }
}
despedirse()