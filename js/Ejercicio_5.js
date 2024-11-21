/*Haz un formulario que convierta de euros a dólares. Supondremos que un euro son 
1,10 dólares y que un dólar son 0,91 euros. */


// Tipo de cambio
const euroadolar = 1.10;
const dolaraeuro = 0.91;

// Variable para almacenar la opción seleccionada
let opcion; 

do {
    // Solicitar la opción de conversión al usuario
    opcion = prompt("¿Qué conversión deseas realizar?\n1. De Euros a Dólares\n2. De Dólares a Euros\n0. Salir");

    if (opcion === "1") {
        // Conversión de Euros a Dólares
        const euros = parseFloat(prompt("Introduce la cantidad en euros:"));
        if (!isNaN(euros) && euros > 0) {
            const dolares = (euros * euroadolar).toFixed(2);
            alert(`${euros} euros son ${dolares} dólares.`);
        } else {
            alert("Introduce un valor válido.");
        }
    } else if (opcion === "2") {
        // Conversión de Dólares a Euros
        const dolares = parseFloat(prompt("Introduce la cantidad en dólares:"));
        if (!isNaN(dolares) && dolares > 0) {
            const euros = (dolares * dolaraeuro).toFixed(2);
            alert(`${dolares} dólares son ${euros} euros.`);
        } else {
            alert("Introduce un valor válido.");
        }
    } else if (opcion !== "0") {
        alert("Opción no válida. Por favor, selecciona 1, 2 o 0.");
    }
} while (opcion !== "0"); // Salir solo si elige la opción 0

alert("BYE BYE");
