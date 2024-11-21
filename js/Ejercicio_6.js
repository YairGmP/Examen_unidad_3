/*Haga un formulario que convierta de grados Celsius a grados Fahrenheit. Para ello, 
tendré que multiplicar por 9/5 y sumar 32. Tenga en cuenta que 30 grados Celsius 
son 86 grados Fahrenheit. */

let opcion1;

do {
    opcion1 = prompt("¿Deseas convertir grados Celsius a grados Fahrenheit?\n1. Si\n0. No")

    if(opcion1 === "1"){
        // Para que el usuario introduzca la temperatura
        const celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

        if (!isNaN(celsius)) {
        // Aplicamos la formula que se nos dio en la instruccion e una variale que se sera nuestro convertidor.
        const fahrenheit = (celsius * 9/5) + 32;
        alert(`${celsius} grados Celsius son ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
    } else {
        alert("Introduce un valor numérico.");
    }
    }else if ( opcion !== "0"){
        alert("Opción no válida. Por favor, selecciona 1 o 0.");
    }


} while( opcion1 !== "0");
alert("BYE BYE");


