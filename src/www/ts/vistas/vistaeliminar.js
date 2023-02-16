"use strict"; //activo modo estricto
Object.defineProperty(exports, "__esModule", { value: true });
exports.VistaEliminar = void 0;
const vista_js_1 = require("./vista.js");
/**
 * Clase VistaNueva que muestra el mensaje de confirmacion para eliminar
 * Gestiona los elementos y métodos de esta Vista
 */
class VistaEliminar extends vista_js_1.Vista {
    /**
     * Contructor de la clase VistaEliminar
     * @param {HTMLElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
    constructor(div, controlador) {
        super(div);
        this.id = 0;
        this.controlador = controlador;
        this.div = document.getElementById('eliminar');
        this.cancelar = this.div.getElementsByTagName('button')[0];
        this.cancelar.onclick = this.pulsarCancelar.bind(this);
        this.aceptar = this.div.getElementsByTagName('button')[1];
        this.aceptar.onclick = this.pulsarAceptar.bind(this);
    }
    /**
     * Método para cuando pulsamos el boton cancelar
     */
    pulsarCancelar() {
        this.controlador.pulsarCancelar();
    }
    /**
     * Método para cuando pulsamos el boton aceptar
     */
    pulsarAceptar() {
        this.controlador.eliminar(this.id);
    }
    /**
     * Método que setea el id
     * @param {Int} id
     */
    setId(id) {
        this.id = id;
    }
}
exports.VistaEliminar = VistaEliminar;
