//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {//SI ESTA OCULTO
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto menuluego de seleccionar opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//creo las barritas de una barra particular identificada por si id.
function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//seleccione todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascipt = document.getElementById("javascript");
crearBarra(javascipt);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let pascal = document.getElementById("pascal");
crearBarra(pascal);
let rubi = document.getElementById("rubi");
crearBarra(rubi);

//Ahora voy a guardad cant barritas utilizo un arreglo, cada posicion pertenece a un elemento.
//-1 ya que no estan pintadas al inicio.
let contadores = [-1, -1, -1, -1, -1, -1];
//variable de bandera para saber si ya ejecuta la animacion.
let entro = false;

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro == false) {
        entro = true;
        const intervalHtml = setInterval(function () {
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function () {
            pintarBarra(javascipt, 11, 1, intervalJavascript);
        }, 100);
        const intervalWordpress = setInterval(function () {
            pintarBarra(wordpress, 16, 0, intervalWordpress);
        }, 100);
        const intervalPhotoshop = setInterval(function () {
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        }, 100);
        const intervalPascal = setInterval(function () {
            pintarBarra(pascal, 16, 4, intervalPascal);
        }, 100);
        const intervalRubi = setInterval(function () {
            pintarBarra(rubi, 11, 5, intervalRubi);
        }, 100);
    }
}

//tiene una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (X < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval)
    }
}

//detecto scroling mouse aplica animacion de barra
window.onscroll = function () {
    efectoHabilidades();
}