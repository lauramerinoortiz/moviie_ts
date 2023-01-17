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

	/**
	 * Método que le pasa al idb un objeto de pelicula para que lo añana a la base de datos
	 * @param {Object} pelicula 
	 */
	nuevaPelicula( pelicula){
		this.idb.nuevaPelicula(pelicula)
	}

	/**
	 * Método que pide el idb el listado de registros
	 * @returns lista que es un array
	 */
	pulsarListado(){
		let lista=this.idb.lista
		return lista
	}
}