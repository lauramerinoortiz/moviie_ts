"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaCategorias que muestra el CRUD de categorías y subcategorías
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaListado extends Vista {

	/**
     * Contructor de la clase VistaCategorias
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador

          this.listado=document.getElementById('listado')
          this.pelicula1=document.getElementById('peli1')
          this.pelicula2=document.getElementById('peli2')
          this.pelicula3=document.getElementById('peli3')
          this.pelicula4=document.getElementById('peli4')
          this.pelicula5=document.getElementById('peli5')
          this.pelicula6=document.getElementById('peli6')

          this.pelicula1.onclick=this.pulsarPelicula.bind(this)
          this.pelicula2.onclick=this.pulsarPelicula.bind(this)
          this.pelicula3.onclick=this.pulsarPelicula.bind(this)
          this.pelicula4.onclick=this.pulsarPelicula.bind(this)
          this.pelicula5.onclick=this.pulsarPelicula.bind(this)
          this.pelicula6.onclick=this.pulsarPelicula.bind(this)
	}

     pulsarPelicula(){
          this.controlador.pulsarPelicula()
     }
}