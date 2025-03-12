// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array que almacenará lista de amigos
let amigos = []

//Funcion que agrega al array amigos, los nombres ingresados por el usuario
function agregarAmigo() {
    //Tomamos el elemento que ingresa el usuario
    let amigoDigitado = document.getElementById("amigo").value;

    //Verificamos si el espacio esta vacío o no
    if(amigoDigitado.trim() === ""){
        alert("Por favor, inserte un nombre.");
    } else {
        //En caso de si haber un nombre, lo agregamos al array
        amigos.push(amigoDigitado);
        //Limpiamos el campo donde se digitan los nombres
        document.getElementById("amigo").value = "";
        //Llamamos a la funcion mostrar amigos
        mostrarListaAmigos()
    }
}

//Funcion que se encarga de mostrar los nombres digitados por el usuario, 
// agregando cada nombre como un li a la lista
function mostrarListaAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    //Iteramos el array con el nombre de los amigos
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];

        //Creamos cada linea de la lista y agregamos un nombre del array amigos
        let crearListaHTML = document.createElement("li");
        crearListaHTML.textContent = element;
        listaDeAmigos.appendChild(crearListaHTML);
    }
}

//Funcion para elegir el amigo secreto
function sortearAmigo() {

    //Verificamos que el array no este vacío
    if(amigos.length === 0) {
        alert("Ingrese un nombre antes de realizar el sorteo.");
    } else {
        //Buscamos un índice random que no supere la cantidad de elementos en el array amigos
        let numeroAzar = Math.floor(Math.random() * amigos.length);
        let opcionAmigoSecreto = document.getElementById("resultado");
        opcionAmigoSecreto.innerHTML = amigos[numeroAzar];
    }
}