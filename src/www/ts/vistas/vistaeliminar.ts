"use strict" //activo modo estricto
import {Vista} from './vista.js'
import {Controlador} from '../controladores/app.js'

/**
 * Clase VistaNueva que muestra el mensaje de confirmacion para eliminar
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaEliminar extends Vista {
     private id: number
     private controlador:Controlador
     public div:HTMLElement|any
     private cancelar:HTMLElement
     private aceptar:HTMLElement
	/**
     * Contructor de la clase VistaEliminar
     * @param {HTMLElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div:HTMLElement, controlador:Controlador) {
		super(div)
          this.id=0
          this.controlador = controlador

          this.div=document.getElementById('eliminar')
          this.cancelar=this.div.getElementsByTagName('button')[0]
          this.cancelar.onclick = this.pulsarCancelar.bind(this)

          this.aceptar=this.div.getElementsByTagName('button')[1]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)
	}

     /**
      * Método para cuando pulsamos el boton cancelar
      */
     pulsarCancelar():void {
          this.controlador.pulsarCancelar()
     }

     /**
      * Método para cuando pulsamos el boton aceptar
      */
     pulsarAceptar():void{
          this.controlador.eliminar(this.id)
     }

     /**
      * Método que setea el id
      * @param {Int} id 
      */
     setId(id:number):void{
          this.id=id
     }
}