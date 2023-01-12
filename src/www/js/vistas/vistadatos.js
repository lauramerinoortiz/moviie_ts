"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaNueva que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaDatos extends Vista {

	/**
     * Contructor de la clase VistaDatos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador

          this.div=document.getElementById('datos')
          this.eliminar=this.div.getElementsByTagName('button')[0]
          this.modificar=this.div.getElementsByTagName('button')[1]

          this.eliminar.onclick = this.pulsarEliminar.bind(this)
          this.modificar.onclick=this.pulsarModificar.bind(this)

	}

     pulsarEliminar(){
          this.controlador.ocultarVistas()
          this.controlador.mostrarEliminar()
     }

     pulsarModificar(){
          this.controlador.ocultarVistas()
          this.controlador.mostrarModificar()
     }
}