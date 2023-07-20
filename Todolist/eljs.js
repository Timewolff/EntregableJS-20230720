const boton_anadir = document.querySelector('.boton_anadir');
var inputValue = document.querySelector('.input');
const contenedor = document.querySelector('.contenedor');

if(window.localStorage.getItem("tareas") == undefined){
    var tareas = [];
    window.localStorage.setItem("tareas", JSON.stringify(tareas));
}

var tareasEX = window.localStorage.getItem("tareas");
var tareas = JSON.parse(tareasEX);

//fecha
document.addEventListener('DOMContentLoaded', function() {
    // Obtener la fecha actual
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let anno = hoy.getFullYear();
    
    // Formato de la fecha
    let formato_fecha = `${dia}-${mes}-${anno}`;
    let elementoFecha = document.querySelector('.fecha');
    elementoFecha.textContent = formato_fecha;
  });

// Saludo dinamico
document.addEventListener('DOMContentLoaded', function() {
    var saludoDiv = document.getElementById('saludo');
    var horaActual = new Date().getHours();
  
    var mensaje;
  
    if (horaActual >= 6 && horaActual < 12) {
      mensaje = 'Buenos días ☀️';
    } else if (horaActual >= 12 && horaActual < 19) {
      mensaje = 'Buenas tardes 🌤️';
    } else {
      mensaje = 'Buenas noches 🌔';
    }
  
    saludoDiv.textContent = mensaje;
    saludoDiv.classList.add('saludo');
  });
  

// El proceso de la lista de tareas
class tarea{
    constructor(tarea_nombre){
        this.crear_tarea(tarea_nombre);
    }
    crear_tarea(tarea_nombre){
        var input = document.createElement('input');
        input.value= tarea_nombre;
        input.disabled = true;
        input.classList.add('entrada_tarea');
        input.type = "text";

        var itemBox = document.createElement('div');
        itemBox.classList.add('tarea');

        var icono = document.createElement('i');
        icono.classList.add('far', 'fa-circle');

        // icono de listo
        var icono_listo = document.createElement('i');
        icono_listo.classList.add('far', 'check-circle');

        var boton_eliminar = document.createElement('boton');
        boton_eliminar.innerHTML = "BORRAR";
        boton_eliminar.classList.add('boton_eliminar');
        boton_eliminar.addEventListener('click',() => this.borrar(itemBox, tarea_nombre));

        var boton_completar = document.createElement('boton');
        boton_completar.appendChild(icono);
        boton_completar.classList.add('boton_completar');
        boton_completar.addEventListener('click',() => this.listo(input, tarea_nombre, icono, icono_listo, itemBox, boton_completar));
        

        contenedor.appendChild(itemBox);
        // estructura en que aparece los elementos al agregar una tarea
        itemBox.appendChild(boton_completar);
        itemBox.appendChild(input);
        itemBox.appendChild(boton_eliminar);
    }

    listo(input, tarea_nombre, icono, icono_listo, itemBox, boton_completar) {
        // Cambia el fondo
        itemBox.classList.toggle('tarea_completa');
        input.classList.toggle('entrada_tarea_completa');
        boton_completar.classList.toggle('boton_completar_completo');
    
        // Cambia el icono de acuerdo al estado del input completado
        
        let indexof = tareas.indexOf(tarea_nombre);
        tareas[indexof] = input.value;
        window.localStorage.setItem("tareas", JSON.stringify(tareas));
    }
    
    borrar(itemBox, tarea_nombre){
        // eliminar tarea
        itemBox.parentNode.removeChild(itemBox);
        let index = tareas.indexOf(tarea_nombre);
        tareas.splice(index, 1);
        window.localStorage.setItem("tareas", JSON.stringify(tareas));
    }
}

function check(){
    if(tarea.value != ""){
        new tarea(tarea.value);
        tarea.value = "";
    }
}

boton_anadir.addEventListener('click', check);
// para que funcione presionando el enter
window.addEventListener('keydown', (e) =>{
    if(e.which == 13){
        check();
    }
})


function check(){
	if(inputValue.value != ""){
		new tarea(inputValue.value);
        tareas.push(inputValue.value);
        window.localStorage.setItem("tareas", JSON.stringify(tareas));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < tareas.length ; v++){
    new tarea(tareas[v]);
}
