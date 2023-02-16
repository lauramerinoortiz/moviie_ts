"use strict"; //activo modo estricto
Object.defineProperty(exports, "__esModule", { value: true });
exports.VistaModificar = void 0;
const pelicula_js_1 = require("./pelicula.js");
const vista_js_1 = require("./vista.js");
/**
 * Clase VistaModificar que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
class VistaModificar extends vista_js_1.Vista {
    /**
     * Contructor de la clase VistaModificar
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
    constructor(div, controlador) {
        super(div);
        this.controlador = controlador;
        this.div = document.getElementById('modificar');
        this.nombre = document.getElementById('nombreEditar');
        this.descripcion = document.getElementById('descripcionEditar');
        this.fecha = document.getElementById('fechaEditar');
        this.duracion = document.getElementById('duracionEditar');
        this.imagen = document.getElementById('imagenEditar');
        this.netflix = document.getElementById('netflixEditar');
        this.netflix.onclick = this.anadirPlataforma.bind(this, 'Netflix');
        this.hbo = document.getElementById('hboEditar');
        this.hbo.onclick = this.anadirPlataforma.bind(this, 'Hbo');
        this.disney = document.getElementById('disneyEditar');
        this.disney.onclick = this.anadirPlataforma.bind(this, 'Disney');
        this.amazon = document.getElementById('amazonEditar');
        this.amazon.onclick = this.anadirPlataforma.bind(this, 'Amazon');
        this.cancelar = this.div.getElementsByTagName('button')[0];
        this.cancelar.onclick = this.pulsarCancelar.bind(this);
        this.plataformas = new Set(); //Set para guardar los datos introducidos
        this.aceptar = this.div.getElementsByTagName('button')[1];
        this.error = document.getElementById('camposrellenosEditar');
        this.vista = false;
    }
    /**
     * Método para cuando damos click a Cancelar
     */
    pulsarCancelar() {
        this.controlador.pulsarCancelar();
    }
    /**
     * Método para cuando damos click a Aceptar
     */
    pulsarAceptar(id) {
        console.log(id);
        if (this.nombre.value == '') {
            this.error.style.display = 'block';
            this.nombre.style.borderColor = "red";
        }
        else if (this.descripcion.value == '') {
            this.error.style.display = 'block';
            this.descripcion.style.borderColor = "red";
        }
        else if (this.fecha.value == '') {
            this.error.style.display = 'block';
            this.fecha.style.borderColor = "red";
        }
        else if (this.duracion.value == '') {
            this.error.style.display = 'block';
            this.duracion.style.borderColor = "red";
        }
        else {
            //Coger los datos del formulario
            let peliculaNueva = new pelicula_js_1.Pelicula();
            peliculaNueva.setNombre(this.nombre.value);
            peliculaNueva.setDescripcion(this.descripcion.value);
            peliculaNueva.setFecha(this.fecha.value);
            peliculaNueva.setDuracion(this.duracion.value);
            peliculaNueva.setImagen(this.imagen.value);
            peliculaNueva.setPlataforma(this.plataformas);
            this.vista = false;
            let vistaSi = document.getElementById('vistaSi');
            let vistaNo = document.getElementById('vistaNo');
            if (vistaSi.checked) {
                this.vista = true;
            }
            if (vistaNo.checked) {
                this.vista = false;
            }
            let genero = document.getElementById('generoEditar');
            let opcion = genero.options[genero.selectedIndex].value;
            peliculaNueva.setVista(this.vista);
            peliculaNueva.setGenero(opcion);
            this.controlador.modificarPelicula(id, peliculaNueva);
        }
    }
    /**
     * Método para cuando damos al boton borrar que limpia el formulario
     */
    pulsarBorrar() {
        this.nombre.value = '';
        this.descripcion.value = '';
        this.fecha.value = '';
        this.duracion.value = '';
        this.imagen.value = '';
        document.getElementsByTagName('select')[0].value = 'Drama';
        this.netflix.checked = false;
        this.hbo.checked = false;
        this.disney.checked = false;
        this.amazon.checked = false;
        this.plataformas.clear();
        this.error.style.display = 'none';
        this.nombre.style.borderColor = "#808080";
        this.descripcion.style.borderColor = "#808080";
        this.fecha.style.borderColor = "#808080";
        this.duracion.style.borderColor = "#808080";
    }
    /**
     * Método que muestra los datos de la pelicula introducidos en el formulario
     * @param {Oject} pelicula
     */
    mostrarDatos(pelicula) {
        this.pulsarBorrar();
        this.nombre.value = pelicula.nombre;
        this.descripcion.value = pelicula.descripcion;
        this.fecha.value = pelicula.fecha;
        this.duracion.value = pelicula.duracion;
        this.imagen.value = pelicula.imagen;
        for (let item of pelicula.plataforma) {
            this.plataformas.add(item);
        }
        let gen = document.getElementById('generoEditar');
        gen.value = pelicula.genero;
        if (this.plataformas.has('Netflix')) {
            this.netflix.checked = true;
        }
        if (this.plataformas.has('Hbo')) {
            this.hbo.checked = true;
        }
        if (this.plataformas.has('Amazon')) {
            this.amazon.checked = true;
        }
        if (this.plataformas.has('Disney')) {
            this.disney.checked = true;
        }
        this.aceptar.onclick = this.pulsarAceptar.bind(this, pelicula.id);
    }
    /**
     * Método que se ejecuta al pulsar cualquier checkbox, eliminandolo del Set si existe o añadiendolo
     */
    anadirPlataforma(elemento) {
        if (this.plataformas.has(elemento)) {
            this.plataformas.delete(elemento);
        }
        else {
            this.plataformas.add(elemento);
        }
    }
}
exports.VistaModificar = VistaModificar;
