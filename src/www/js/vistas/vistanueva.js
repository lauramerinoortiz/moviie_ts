"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaNueva que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaNueva extends Vista {

	/**
     * Contructor de la clase VistaNueva
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.div=document.getElementById('nueva')

          this.cancelar=this.div.getElementsByTagName('button')[0]
          this.cancelar.onclick = this.pulsarCancelar.bind(this)

          this.aceptar=this.div.getElementsByTagName('button')[1]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)
	}
     /**
      * Método para cuando damos al boton cancelar
      */
     pulsarCancelar() {
          this.controlador.pulsarCancelar()
     }

     /**
      * Método para cuando damos al boton aceptar
      */
     pulsarAceptar() {
          let nombre=document.getElementById('nombre').value
          console.log('nombre: ',nombre)

          let descripcion=document.getElementById('descripcion').value
          console.log('descripcion: ',descripcion)

          let fecha=document.getElementById('fecha').value
          console.log('fecha: ',fecha)

          let duracion=document.getElementById('duracion').value
          console.log('duracion: ',duracion)

          if(document.getElementById('vistaSi').checked){
               let vista=document.getElementById('vistaSi').value
               console.log('vista: ',vista)
          }
          else{
               let vista=document.getElementById('vistaNo').value
               console.log('vista: ',vista)
          }

          let genero=document.getElementsByTagName('select')
          console.log('genero: ',genero)
     }
}