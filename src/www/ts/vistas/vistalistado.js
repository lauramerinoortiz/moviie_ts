"use strict"; //activo modo estricto
Object.defineProperty(exports, "__esModule", { value: true });
exports.VistaListado = void 0;
const vista_js_1 = require("./vista.js");
/**
 * Clase VistaListado que muestra el CRUD de categorías y subcategorías
 * Gestiona los elementos y métodos de esta Vista
 */
class VistaListado extends vista_js_1.Vista {
    /**
     * Contructor de la clase VistaListado
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
    constructor(div, controlador) {
        super(div);
        this.controlador = controlador;
        this.listado = document.getElementById('listado');
        this.peliculas = document.getElementsByClassName('pelicula');
    }
    /**
     * Método para cuando damos click a una pelicula
     */
    pulsarPelicula(nombre) {
        this.controlador.pulsarPelicula(nombre);
    }
    /**
     * Método que saca el listado de peliculas guardadas en la base de datos
     * @param {Array} lista
     */
    mostrarListado(lista) {
        this.listado.innerHTML = ""; //vaciamos el div
        if (lista == '') {
            let vacio = document.createElement('h1');
            vacio.appendChild(document.createTextNode('No hay datos aún. Dale ya a "Nueva" y añade una película.'));
            this.listado.appendChild(vacio);
        }
        else {
            let cabezado = document.createElement('h1');
            cabezado.appendChild(document.createTextNode('Listado de películas'));
            this.listado.appendChild(cabezado);
            for (let item of lista) {
                let div = document.createElement('div');
                div.className = 'pelicula';
                if (item.imagen != '') {
                    div.style.backgroundImage = "url('" + item.imagen + "')";
                }
                else {
                    div.style.backgroundImage = "url('assets/recursos/fondo.png')";
                }
                let oculto = document.createElement('div');
                oculto.className = 'oculto';
                div.appendChild(oculto);
                let titulo = document.createElement('h2');
                div.appendChild(titulo);
                titulo.appendChild(document.createTextNode(item.nombre));
                this.listado.appendChild(div);
                div.onclick = this.pulsarPelicula.bind(this, item.nombre);
            }
        }
    }
}
exports.VistaListado = VistaListado;
