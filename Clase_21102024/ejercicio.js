
let arrTareas = [];


document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const tarea = document.getElementById("inputTarea").value.trim();
    if (tarea) {
        AgregarTarea(tarea); 
        Mostrar(); 
        document.getElementById("inputTarea").value = ''; 
    }
});


let AgregarTarea = (tarea) => {
    arrTareas.push(tarea); 
    console.log(arrTareas); 
};


let EliminarTarea = (index) => {
    arrTareas.splice(index, 1); 
    Mostrar(); 
};


let Mostrar = () => {
    const listaTareasDiv = document.getElementById("listaTareas");
    listaTareasDiv.innerHTML = ''; 

  
    arrTareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement("div");
        tareaDiv.textContent = tarea;

       
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => EliminarTarea(index); 
        
        tareaDiv.appendChild(botonEliminar);
        listaTareasDiv.appendChild(tareaDiv);
    });
};