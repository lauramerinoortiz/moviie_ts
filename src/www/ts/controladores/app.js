"use strict"; //activo modo estricto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controlador = void 0;
const modelo_js_1 = require("../modelos/modelo.js");
const vistanav_js_1 = require("../vistas/vistanav.js");
const vistalistado_js_1 = require("../vistas/vistalistado.js");
const vistanueva_js_1 = require("../vistas/vistanueva.js");
const vistadatos_js_1 = require("../vistas/vistadatos.js");
const vistaeliminar_js_1 = require("../vistas/vistaeliminar.js");
const vistamodificar_js_1 = require("../vistas/vistamodificar.js");
const vistabuscar_js_1 = require("../vistas/vistabuscar.js");
/**
 * Clase Controlador que administra las vistas
 */
class Controlador {
    /**
     * Constructor de la clase Controlador
     * Cuando carga la web ejecuta el método iniciar
     */
    constructor() {
        window.onload = this.iniciar.bind(this);
    }
    /**
     * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
     */
    iniciar() {
        console.log('¡Bienvenido a Moviie! La diversión te espera fuera de la consola.');
        this.modelo = new modelo_js_1.Modelo(this, this.iniciar2.bind(this));
    }
    iniciar2() {
        this.nav = document.getElementsByTagName('nav')[0];
        this.vistaNav = new vistanav_js_1.VistaNav(this.nav, this);
        this.divlistado = document.getElementById('inicio');
        this.vistaListado = new vistalistado_js_1.VistaListado(this.divlistado, this);
        this.divnueva = document.getElementById('nueva');
        this.vistaNueva = new vistanueva_js_1.VistaNueva(this.divnueva, this);
        this.divdatos = document.getElementById('datos');
        this.vistaDatos = new vistadatos_js_1.VistaDatos(this.divdatos, this);
        this.divEliminar = document.getElementById('eliminar');
        this.vistaEliminar = new vistaeliminar_js_1.VistaEliminar(this.divEliminar, this);
        this.divModificar = document.getElementById('modificar');
        this.vistaModificar = new vistamodificar_js_1.VistaModificar(this.divModificar, this);
        this.divBuscar = document.getElementById('buscar');
        this.vistaBuscar = new vistabuscar_js_1.VistaBuscar(this.divBuscar, this);
        this.ocultarVistas();
        this.pulsarListado();
    }
    /**
     * Método que oculta todas las vistas
     */
    ocultarVistas() {
        this.vistaListado.mostrar(false);
        this.vistaNueva.mostrar(false);
        this.vistaDatos.mostrar(false);
        this.vistaEliminar.mostrar(false);
        this.vistaModificar.mostrar(false);
        this.vistaBuscar.mostrar(false);
    }
    /**
     * Método pulsarListado que oculta las vistas y muestra la del inicio
     */
    pulsarNavListado() {
        this.ocultarVistas();
        this.vistaListado.mostrar(true);
        this.vistaNueva.pulsarBorrar();
    }
    /**
     * Método pulsarNuevo que oculta las vistas y muestra la del formulario de alta
     */
    pulsarNavNuevo() {
        this.ocultarVistas();
        this.vistaNueva.mostrar(true);
        this.vistaNueva.pulsarBorrar();
    }
    /**
     * Método pulsarBuscar que oculta las vistas y muestra la del busqueda
     */
    pulsarNavBuscar() {
        this.ocultarVistas();
        this.vistaBuscar.mostrar(true);
    }
    /**
     * Método cuando pulsamos una pelicula
     */
    pulsarPelicula(nombre) {
        this.modelo.buscarNombre(nombre, this.mostrarDatos.bind(this));
    }
    /**
     * Método que manda la pelicula a la vista para mostrar sus datos
     * @param {Object} pelicula
     */
    mostrarDatos(pelicula) {
        this.ocultarVistas();
        this.vistaDatos.mostrar(true);
        this.vistaModificar.mostrarDatos(pelicula);
        this.vistaDatos.mostrarDatos(pelicula);
    }
    /**
     * Método cuando pulsamos un boton cancelar
     */
    pulsarCancelar() {
        this.pulsarNavListado();
    }
    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarEliminar(id) {
        this.ocultarVistas();
        this.vistaEliminar.setId(id);
        this.vistaEliminar.mostrar(true);
    }
    /**
     * Método que manda un id a la bbdd para borrar el registro asociado
     * @param {Int} id
     */
    eliminar(id) {
        this.modelo.eliminar(id, this.iniciar.bind(this));
    }
    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarModificar() {
        this.ocultarVistas();
        this.vistaModificar.mostrar(true);
    }
    /**
     * Método para añadir una pelicula a la base de datos
     * @param {Object} pelicula
     */
    nuevaPelicula(pelicula) {
        this.modelo.nuevaPelicula(pelicula);
    }
    /**
     * Método getModelo, devuelve el modelo de la aplicación
     * @return {Modelo} El modelo de la aplicación
     **/
    getModelo() {
        return this.modelo;
    }
    /**
     * Método que coge el listado y lo lleva a la vista para que lo muestre
     */
    pulsarListado() {
        let lista = this.modelo.pulsarListado();
        this.vistaListado.mostrarListado(lista);
        this.pulsarNavListado();
    }
    /**
     * Método que llama a la base de datos a que busque
     * @param {Boolean} vista
     * @param {String} genero
     */
    pulsarBuscar(vista, genero) {
        let lista = this.modelo.buscar(vista, genero, this.mandarLista.bind(this));
        return lista;
    }
    /**
     * Método que manda a la vista la lista de elementos de la bsuqueda
     * @param {Array} lista
     */
    mandarLista(lista) {
        this.vistaBuscar.listar(lista);
    }
    /**
     * Método que coge el listado y lo lleva a la vista para que lo muestre
     */
    obtenerListado(nombre) {
        let lista = this.modelo.pulsarListado();
        console.log(lista);
        this.vistaListado.mostrarListado(lista);
        this.pulsarPelicula(nombre);
    }
    /**
     * Método que mandar al modelo los datos de la pelicula modificada y su id
     * @param {Int} id
     * @param {Object} pelicula
     */
    modificarPelicula(id, pelicula) {
        console.log(id);
        this.modelo.modificarPelicula(id, pelicula, this.obtenerListado.bind(this, pelicula.nombre));
    }
}
exports.Controlador = Controlador;
const app = new Controlador();
