/*
Ejercicio 1: Calculo de Salario con Horas Extra (Estructura Secuencial y Condicional)

• Planteamiento: Elaborar un algoritmo que calcule el salario semanal de un trabajador a partir de las horas trabajadas y el valor 
pactado por hora. Si el trabajador labora mas de 40 horas a la semana, las horas adicionales deben pagarse como horas extra con un recargo
del 50% sobre el valor hora normal.

• Estructuras aplicadas: Secuencial y Condicional Simple/Doble (Si / Sino).

• Requerimiento para el aprendiz:
    o Entradas: Horas trabajadas en la semana y valor de la hora normal.
    o Proceso: Determinar si hay horas extra (> 40), calcular el pago de horas
                normales y el pago con recargo de las horas extra.
    o Salida: Salario bruto y desglose del pago por horas extra.
*/


function salarioSemanal() {
    let nombre = prompt("Ingrese su nombre: ");
    let horas = parseInt(prompt("Ingrese las horas trabajadas en la semana: "));
    let valorHora = parseFloat(prompt("Ingrese el valor de la hora normal: "));

    let pagoHorasNormales = 0;
    let pagoHorasExtra = 0;
    let cantidadHorasExtra = 0;

    if (horas > 0 && horas <= 40) {
        pagoHorasNormales = horas * valorHora;
    } else if (horas > 40 && horas <= 112) {
        // tome 112 horas en teoria que trabaje 16 horas diarias (16h * 7 dias)
        cantidadHorasExtra = horas - 40;
        pagoHorasNormales = 40 * valorHora;
        pagoHorasExtra = cantidadHorasExtra * (valorHora * 1.5);
    } else {
        return "Número de horas inválido, ingrese un numero valido";
    }

    let salarioBruto = pagoHorasNormales + pagoHorasExtra;


    return alert(`Hola ${nombre}, trabajaste ${horas} horas esta semana.
             Pago por horas normales: ${pagoHorasNormales},
             Pago por horas extra: ${pagoHorasExtra},
             Salario Total: ${salarioBruto}`) ;
}

salarioSemanal(nombre, horas, valorHora);
