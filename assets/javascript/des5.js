let nombre = prompt("Ingresa tu nombre y apellido");
let dni= parseInt (prompt("Ingrese su número dni"));
console.log(nombre);
alert("¡Bienvenido! " + nombre);

let variable1 = prompt("Ingrese nota de matemáticas");
let variable2 = prompt("Ingrese nota de inglés");
let variable3 = prompt("Ingrese nota de bioquímica");
let variable4 = prompt("Ingrese nota de anatomía");

let p = (parseFloat(variable1) + parseFloat(variable2) + parseFloat(variable3) + parseFloat(variable4))/4;
alert("Su promedio es: "+p)

function Calcular() {
    let variable1 = document.getElementById('m1').value;
    let variable2 = document.getElementById('m2').value;
    let variable3 = document.getElementById('m3').value;
    let variable4 = document.getElementById('m4').value;

    let p = (parseFloat(variable1) + parseFloat(variable2) + parseFloat(variable3) + parseFloat(variable4))/4;
    document.getElementById('promedio').innerHTML = p;
}