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
		this.idb.listadoPeliculas()
		let lista=this.idb.lista
		return lista
	}

	/**
	 * Método que manda al ibd unos valos y busca en la bbdd y devuelve el listado que coincide
	 * @param {Boolean} vista 
	 * @param {String} genero 
	 * @param {Method} callback 
	 * @returns 
	 */
	buscar(vista, genero, callback){
		let lista=this.idb.buscar(vista, genero, callback)
		return lista
	}

	/**
	 * Método que manda al idb un nombre para buscar sus datos en la bbdd
	 * @param {String} nombre 
	 */
	buscarNombre(nombre, callback){
		this.idb.buscarNombre(nombre, callback)
	}

	modificarPelicula(id, pelicula, callback){
		console.log(id)
		this.idb.modificarPelicula(id, pelicula, callback)
		
	}
}