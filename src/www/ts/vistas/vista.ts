"use strict" //activo modo estricto
/**
 * Clase Vista con métodos y atributos general que tendrán todas las Vistas 
*/
export class Vista{
	public div:HTMLDivElement
	/**
	 * Contructor de la clase Vista
	 * @param {Objeto} divinicio div de la vista
	 */
	constructor(divinicio:HTMLDivElement){
		this.div=divinicio
	}
	
	/**
	 * Método mostrar que pone el div de la Vista visualizándose u ocultándolo
	 * @param {boolean} ver recibe un true o un false
	 */
	mostrar(ver:boolean){
		if(ver){
			this.div.style.display='block'
			console.log('mostrando ', this.div)
		}
		else{
			this.div.style.display='none'
		}
	}
}