/* Control de Notas y Aprobaciones de un Grupo (Estructura Cíclica Determinada)
• Planteamiento: Se requiere un algoritmo que procese las calificaciones finales de un
grupo de (N) estudiantes (donde (N) es ingresado por el usuario). Para cada estudiante
se debe ingresar una nota entre 0.0 y 5.0. Al finalizar el ingreso de todas las notas, el
algoritmo debe mostrar:
1. El promedio general de notas del grupo.
2. El número total de estudiantes que aprobaron (nota mayor o igual a 3.0).
3. El número total de estudiantes que reprobaron.
• Estructuras aplicadas: Cíclica (Para / For) y Condicionales internas.
• Requerimiento para el aprendiz:
o Entradas: Cantidad de estudiantes (N) y las notas individuales de cada uno.
o Proceso: Acumular las notas en un ciclo Para, contar aprobados/reprobados
mediante condicionales y calcular el promedio (Suma / N).
o Salida: Promedio general, cantidad de aprobados y cantidad de reprobados. */


function controlNotas() {
    let n = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
    let sumaNotas = 0;
    let aprobados = 0;
    let reprobados = 0;

    for (let i = 1; i <= n; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i}: `));
        sumaNotas += nota;
        if (nota >= 3.0) {
            aprobados++;
        } else {
            reprobados++;
        }
    }

    let promedio = sumaNotas / n;

    alert(`Número de estudiantes aprobados: ${aprobados}`);
    alert(`Número de estudiantes reprobados: ${reprobados}`);
    alert(`Promedio general: ${promedio}`);
    return;
}