/*Simulación de Caja Registradora e Inventario (Estructura Cíclica Indeterminada)
• Planteamiento: Desarrollar un algoritmo que simule el cobro continuo de productos
en una caja registradora. El sistema debe solicitar repetidamente el precio de cada
producto vendido hasta que el cajero ingrese el valor 0 (que indica el fin de la venta).
Al terminar, el programa debe reportar:
o El valor total a pagar por el cliente.
o La cantidad total de productos comprados.
o El precio del producto más costoso ingresado durante la venta.
• Estructuras aplicadas: Cíclica (Mientras / While o Repetir - Hasta Que) y
Condicionales.
• Requerimiento para el aprendiz:
o Entradas: Precios de productos ingresados uno a uno hasta ingresar 0.
o Proceso: Sumar precios en un acumulador, incrementar un contador de
artículos y comparar el precio mayor registrado en cada iteración.
o Salida: Total acumulado, total de artículos y precio máximo. */

function simularCajaRegistradora() {
    let totalPagar = 0;
    let cantidadProductos = 0;
    let productoMasCostoso = 0;

    let precio = Number(prompt("Ingrese el precio del producto (0 para terminar la venta):"));

  
    while (precio > 0) {
        totalPagar += precio;
        cantidadProductos++;

        if (precio > productoMasCostoso) {
            productoMasCostoso = precio;
        }
        precio = Number(prompt("Ingrese el precio del siguiente producto (0 para terminar):"));
    }

    return alert(`Total a pagar: ${totalPagar}\nCantidad de productos: ${cantidadProductos}\nProducto más costoso: ${productoMasCostoso}`);
}
