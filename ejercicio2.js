/* Clasificación de Clientes y Descuentos (Estructura Condicional Múltiple)
• Planteamiento: Una empresa otorga descuentos en las compras de sus clientes
según su categoría:
o Categoría A: 20% de descuento.
o Categoría B: 15% de descuento.
o Categoría C: 10% de descuento.
o Cualquier otra categoría: No aplica descuento (0%). El algoritmo debe recibir
el monto total de la compra y la letra de la categoría del cliente, e indicar el
valor del descuento otorgado y el monto final a pagar.
• Estructuras aplicadas: Condicional Múltiple (Según / Casos o Si - Sino Si).
• Requerimiento para el aprendiz:
o Entradas: Monto total de la compra y categoría del cliente ('A', 'B', 'C' u otra).
o Proceso: Evaluar la categoría, calcular el valor del porcentaje
correspondiente y restar el descuento del total.
o Salida: Descuento aplicado y total neto a pagar*/

function calcularDescuento() {
    let montoCompra = parseFloat(prompt("Ingrese el monto total de la compra: "));
    let categoria = prompt("Ingrese la categoría del cliente (A, B, C u otra): ");

    let porcentaje=0;

    switch (categoria.toUpperCase()){
        case "A":
            porcentaje= 0.2;
            break;
        case "B":
            porcentaje= 0.15;
            break;
        case "C":
            porcentaje= 0.1;
            break;
        default:
            porcentaje=0;
            break;    
    }

    let totalPago= montoCompra - (montoCompra*porcentaje);
    let descuento=porcentaje*100;
    alert(`El valor inicial de la compra es: ${montoCompra}. El descuento aplicado es del ${descuento}%. Total a pagar: ${totalPago}`); 
    return; 
}