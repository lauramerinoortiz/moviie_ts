"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaBuecar que muestra el formulario para buscar una pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaBuscar extends Vista {

	/**
     * Contructor de la clase VistaBuscar
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador

          this.div=document.getElementById('buscar')

          this.aceptar=this.div.getElementsByTagName('button')[0]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)

	}

     pulsarAceptar() {
          this.controlador.pulsarCancelar()
     }
}