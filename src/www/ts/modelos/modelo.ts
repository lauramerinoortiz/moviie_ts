"use strict"
import { Controlador } from '../controladores/app.js'
import {Idb} from '../controladores/idb.js'
import { Pelicula } from '../vistas/pelicula.js'
export class Modelo{
	public controlador:Controlador
	public idb:Idb
    /**
	 * Constructor de la clase
	 * @param {Object} controlador para que el modelo mire al controlador
	 */
	constructor(controlador:Controlador, callback:Function) {
		this.controlador = controlador
		this.idb=new Idb(callback)
	}

	/**
	 * Método que le pasa al idb un objeto de pelicula para que lo añana a la base de datos
	 * @param {Object} pelicula 
	 */
	nuevaPelicula( pelicula:Pelicula):void{
		this.idb.nuevaPelicula(pelicula)
	}

	/**
	 * Método que pide el idb el listado de registros
	 * @returns lista que es un array
	 */
	pulsarListado():Array<any>{
		this.idb.listadoPeliculas()
		let lista=this.idb.lista
		return lista
	}

	/**
	 * Método que manda al ibd unos valos y busca en la bbdd y devuelve el listado que coincide
	 * @param {Boolean} vista 
	 * @param {String} genero 
	 * @param {Method} callback 
	 * @returns array 
	 */
	buscar(vista:boolean, genero:string, callback:Function): Array<any>{
		let lista=this.idb.buscar(vista, genero, callback)
		return lista
	}

	/**
	 * Método que manda al idb un nombre para buscar sus datos en la bbdd
	 * @param {String} nombre 
	 */
	buscarNombre(nombre:string, callback:Function):void{
		this.idb.buscarNombre(nombre, callback)
	}

	/**
	 * Método que recibe los datos y los envia al idb para que modifique un registro
	 * @param {Int} id 
	 * @param {Object} pelicula 
	 * @param {Method} callback 
	 */

	modificarPelicula(id:number, pelicula:Pelicula, callback:Function):void{
		console.log(id)
		this.idb.modificarPelicula(id, pelicula, callback)
		
	}

	/**
	 * Método que elimina un dato del idb 
	 * @param {Int} id 
	 * @param {Method} callback 
	 */
	eliminar(id:number, callback:Function):void{
		this.idb.eliminar(id, callback)
	}
}