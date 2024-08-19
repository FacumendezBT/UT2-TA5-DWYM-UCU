window.onload = function () {
    const btn = document.getElementById('btn');
    const inputAnio = document.getElementById('input');

    btn.addEventListener('click', function () {
        let anio = inputAnio.value;
        leapYears(anio);
    });
}
/**
 * Si el numero pasado por parametro corresponde a un año bisiesto, imprime true, de lo contrario imprime false.
 * Un año bisiesto es aquel que es divisible entre 4, o si es divisible entre 100 y también es divisible entre 400.
 * @param {number} anio - Año a evaluar.
 */
function leapYears(anio) {
    if (anio % 4 === 0 || (anio % 100 === 0 && anio % 400 === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}