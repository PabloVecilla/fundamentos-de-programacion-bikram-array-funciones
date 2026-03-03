// 1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = []; 

// 2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// 3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = []; 
for (let x = 0; x < 10; ++x) {
    if (x % 2 === 0) {
        arrayNumerosPares.push(x); 
    }
}

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]; 

// 5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
let suma = (num1, num2) => {
    return num1 + num2; 
} 

// 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
let potenciacion = (num1, num2) => {
    if (num2 === 0) return 1;
    else {
        let potencia = num1; 
        for (x = 1; x < num2; ++x) {
            potencia *= num1; 
        }
        return potencia;
    } 
}

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
function separarPalabras (string) {
    return string.split(" "); 
}

// 8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
let repetirString = (string, num) => {
    let newString = ""; 
    for (let x = 0; x < num; x++) {
        newString += string; 
    }
    return newString; 
}

// 9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo (num) {
    let divisores = []; 
    for (let x = 2; x <= Math.sqrt(num); ++x) {
        if (num % x === 0) {
            return false; 
        }
    }
    return true;
}

// 10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
let ordenarArray = (numArray) => {
    return [...numArray].sort((a, b) => a - b); 
}

// 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
let obtenerPares = (numArray) => {
    let numArrayEvens = []; 
    for (let num of numArray) {
        if (num % 2 === 0) numArrayEvens.push(num); 
    }
    return numArrayEvens; 
}

// 12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
let pintarArray = (array) => {
    return "[" + array.join(", ") + "]";  
}

// 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
let arrayMapi = (array, func) => {
    let functionToArray = []; 
    for (let element of array) {
        functionToArray.push(func(element)); 
    }
    return functionToArray; 
}

// 14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
let eliminarDuplicados = (array) => {
    let arraySinDuplicados = []; 
    for (let num of array) {
        if (!arraySinDuplicados.includes(num)) {
            arraySinDuplicados.push(num); 
        }
    }
    return arraySinDuplicados; 
}

// 15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = []; 
for (let x = 0; x > -10; --x) {
    arrayNumerosNeg.push(x); 
}

// 16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola', 'Mundo']; 

// 17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']; 

// 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]; 

// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
let multiplicacion = (a, b) => {
    return a*b; 
}

// 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(a, b) {
    return a / b; 
}

// 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num) {
    if (num % 2 === 0) return true; 
    else return false; 
}

// 22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
let resta = (a, b) => {
    return a - b; 
}
let arrayFunciones = [suma, resta, multiplicacion]; 

// 23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
let ordenarArray2 = (numArray) => {
    return [...numArray].sort((a, b) => b - a); 
}

// 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
function obtenerImpares (numArray) {
    let numArrayOdds = []; 
    for (let num of numArray) {
        if (num % 2 !== 0) {
            numArrayOdds.push(num); 
        } 
    }
    return numArrayOdds; 
}

// 25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
function sumarArray (numArray) {
    let sum = 0; 
    for (let num of numArray) {
        sum += num; 
    }
    return sum; 
}

// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray (numArray) {
    let multi = numArray[0]; 
    for (x = 1; x < numArray.length; ++x) {
        multi *= numArray[x]; 
    }
    return multi; 
}
