"use strict"
import {Idb} from '../controladores/idb.js'
export class Modelo{
    /**
	 * Constructor de la clase
	 * @param {Object} controlador para que el modelo mire al controlador
	 */
	constructor(controlador) {
		this.controlador = controlador
		this.idb=new Idb()
	}

	nuevaPelicula( pelicula){
		this.idb.nuevaPelicula(pelicula)
	}
}