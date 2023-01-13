"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaModificar que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaModificar extends Vista {

	/**
     * Contructor de la clase VistaModificar
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.div=document.getElementById('modificar')

          this.cancelar=this.div.getElementsByTagName('button')[0]
          this.cancelar.onclick = this.pulsarCancelar.bind(this)

          this.aceptar=this.div.getElementsByTagName('button')[1]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)
	}

     /**
      * Método para cuando damos click a Cancelar
      */
     pulsarCancelar() {
          this.controlador.pulsarCancelar()
     }

     /**
      * Método para cuando damos click a Aceptar
      */
     pulsarAceptar() {
          this.controlador.pulsarCancelar()
     }
}