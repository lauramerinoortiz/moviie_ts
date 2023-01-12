"use strict"
/**
 *	Implementa una vista del menú de navegación.
 */
export class VistaNav{
	/**
	 *	Constructor de la clase.
	 *	@param {HTMLElement} nav Nav de HTML en el que se desplegará la vista.
	 *	@param {Object} controlador Controlador de la vista del administrador.
	 */
	constructor(nav, controlador) {
		this.controlador = controlador
		this.nav = nav
		
		this.liListado = this.nav.getElementsByTagName('li')[1]
		this.liNuevo = this.nav.getElementsByTagName('li')[2]
		
		this.liListado.onclick = this.pulsarListado.bind(this)
		this.liNuevo.onclick = this.pulsarNuevo.bind(this)
	}

	/**
	 *	Atención a la pulsación sobre el enlace del listado
	 */
	pulsarListado() {
		this.controlador.pulsarNavListado()
	}

	/**
	 *	Atención a la pulsación sobre el enlace de categorías
	 */
	pulsarNuevo() {
		this.controlador.pulsarNavNuevo()
	}

}