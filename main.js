const pantalla = document.getElementById("pantalla");
const boton_ac = document.getElementById("boton_ac");
const boton_mas_menos = document.getElementById("boton_mas_menos");
const boton_division = document.getElementById("boton_division");
const boton_multiplicacion = document.getElementById("boton_multiplicacion");
const boton_resta = document.getElementById("boton_resta");
const boton_suma = document.getElementById("boton_suma");
const boton_igual = document.getElementById("boton_igual");
const boton_uno = document.getElementById("boton_uno");
const boton_dos = document.getElementById("boton_dos");
const boton_tres = document.getElementById("boton_tres");
const boton_cuatro = document.getElementById("boton_cuatro");
const boton_cinco = document.getElementById("boton_cinco");
const boton_seis = document.getElementById("boton_seis");
const boton_siete = document.getElementById("boton_siete");
const boton_ocho = document.getElementById("boton_ocho");
const boton_nueve = document.getElementById("boton_nueve");
const boton_cero = document.getElementById("boton_cero");
const boton_punto = document.getElementById("boton_punto");

let entradaActual = "";
let valorAnterior = "";
let operador = "";
let operacionRealizada = false;

function realizarOperacion() {
  if (operador === "suma") {
    entradaActual = (Number(valorAnterior) + Number(entradaActual)).toString();
  }
  if (operador === "resta") {
    entradaActual = (Number(valorAnterior) - Number(entradaActual)).toString();
  }
  if (operador === "multiplicacion") {
    entradaActual = (Number(valorAnterior) * Number(entradaActual)).toString();
  }
  if (operador === "division") {
    if (Number(entradaActual) === 0) {
      entradaActual = "Error";
    } else {
      entradaActual = (
        Number(valorAnterior) / Number(entradaActual)
      ).toString();
    }
  }
  pantalla.value = entradaActual;
}

boton_suma.addEventListener("click", () => {
  if (entradaActual) {
    realizarOperacion();
  }
  valorAnterior = entradaActual;
  operador = "suma";
  entradaActual = "";
});

boton_resta.addEventListener("click", () => {
  if (entradaActual) {
    realizarOperacion();
  }
  valorAnterior = entradaActual;
  operador = "resta";
  entradaActual = "";
});

boton_multiplicacion.addEventListener("click", () => {
  if (entradaActual) {
    realizarOperacion();
  }
  valorAnterior = entradaActual;
  operador = "multiplicacion";
  entradaActual = "";
});

boton_division.addEventListener("click", () => {
  if (entradaActual) {
    realizarOperacion();
  }
  valorAnterior = entradaActual;
  operador = "division";
  entradaActual = "";
});

boton_igual.addEventListener("click", () => {
  if (operador) {
    realizarOperacion();
    operador = "";
  }
});

function agregarNumero(numero) {
  if (operacionRealizada) {
    entradaActual = "";
    operacionRealizada = false;
  }
  entradaActual += numero;
  pantalla.value = entradaActual;
}

boton_uno.addEventListener("click", () => agregarNumero("1"));
boton_dos.addEventListener("click", () => agregarNumero("2"));
boton_tres.addEventListener("click", () => agregarNumero("3"));
boton_cuatro.addEventListener("click", () => agregarNumero("4"));
boton_cinco.addEventListener("click", () => agregarNumero("5"));
boton_seis.addEventListener("click", () => agregarNumero("6"));
boton_siete.addEventListener("click", () => agregarNumero("7"));
boton_ocho.addEventListener("click", () => agregarNumero("8"));
boton_nueve.addEventListener("click", () => agregarNumero("9"));
boton_cero.addEventListener("click", () => agregarNumero("0"));

boton_punto.addEventListener("click", () => {
  if (!entradaActual.includes(".")) {
    entradaActual += ".";
    pantalla.value = entradaActual;
  }
});

boton_mas_menos.addEventListener("click", () => {
  entradaActual = (Number(entradaActual) * -1).toString();
  pantalla.value = entradaActual;
});

boton_ac.addEventListener("click", () => {
  entradaActual = "";
  pantalla.value = "0";
});
