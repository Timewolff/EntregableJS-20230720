var operando_a;
var operando_b;
var operacion;


function init(){
    alert("Hola Mundo!");
    //Variables
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multi = document.getElementById("multi");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");

    //Eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    };
      
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    };
      
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    };
      
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
     };
      
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    };
      
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    };
      
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    };
      
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    };
      
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    };
      
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    };
      
    reset.onclick = function(e) {
        resetear();
    };

    suma.onclick = function(e) {
    operando_a = resultado.textContent;
    operacion = "+";
    limpiar();
    };

    resta.onclick = function(e) {
    operando_a = resultado.textContent;
    operacion = "-";
    limpiar();
    };

    multi.onclick = function(e) {
    operando_a = resultado.textContent;
    operacion = "*";
    limpiar();
    };

    division.onclick = function(e) {
    operando_a = resultado.textContent;
    operacion = "/";
    limpiar();
    };

    igual.onclick = function(e) {
        operando_b = resultado.textContent;
        resolver();
    };
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operando_a = 0;
    operando_b = 0;
    operacion = ""
}

function resolver(){
    var res = 0
    switch (operacion) {
    case "+":
        res = parseFloat(operando_a) + parseFloat(operando_b);
        break;
    case "-":
        res = parseFloat(operando_a) - parseFloat(operando_b);
        break;
    case "*":
        res = parseFloat(operando_a) * parseFloat(operando_b);
        break;
    case "/":
        res = parseFloat(operando_a) / parseFloat(operando_b);
        break;
    }
    resetear();
    resultado.textContent = res;
}