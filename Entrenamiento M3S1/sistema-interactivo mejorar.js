//variable para nombre
let nombre;
do {
    nombre = prompt("¿Cuál es tu nombre?").trim(); // Se elimina espacios al inicio y al final del nombre
     
    if (!nombre) {
        console.log("Ingrese un nombre válido.");
    }else{
        console.log(`Hola ${nombre}, bienvenido.`);
    }
} while (!nombre); // Repite hasta que nombre no este vacio

//variable para edad
let edad;
do {
    edad = prompt("¿Cuál es tu edad?").trim(); // Se elimina espacios al inicio y al final de la edad
    edad = parseInt(edad); // Se convierte edad a numero

    if (!edad || isNaN(edad) || edad < 0) {
        console.log("La edad debe ser un número positivo.");
    } else {
        console.log(`Puedes continuar, ${nombre}.`);
    }
}
while (!edad || isNaN(edad) || edad < 0); // Repite hasta que se ingrese una edad valida

// Mensaje final

if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad, aprende y disfruta de tu juventud.`);
}
else {
    alert(`Hola ${nombre}, eres mayor de edad, Preparate porque tu vida comienza ahora.`);
}