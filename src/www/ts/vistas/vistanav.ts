"use strict"
/**
 *	Implementa una vista del menú de navegación.
 */
export class VistaNav{
	public nav:HTMLDivElement
	public controlador:any
	private liLogo:HTMLElement
	private liListado:HTMLElement
	private liNuevo:HTMLElement
	private liBuscar:HTMLElement
	/**
	 *	Constructor de la clase.
	 *	@param {HTMLElement} nav Nav de HTML en el que se desplegará la vista.
	 *	@param {Object} controlador Controlador de la vista del administrador.
	 */
	constructor(nav:HTMLDivElement, controlador:any) {
		this.controlador = controlador
		this.nav = nav
		
		this.liLogo = this.nav.getElementsByTagName('li')[0]
		this.liListado = this.nav.getElementsByTagName('li')[1]
		this.liNuevo = this.nav.getElementsByTagName('li')[2]
		this.liBuscar = this.nav.getElementsByTagName('li')[3]
		
		this.liListado.onclick = this.pulsarListado.bind(this)
		this.liNuevo.onclick = this.pulsarNuevo.bind(this)
		this.liLogo.onclick = this.pulsarListado.bind(this)
		this.liBuscar.onclick = this.pulsarBuscar.bind(this)
	}

	/**
	 *	Atención a la pulsación sobre el enlace del listado
	 */
	pulsarListado():void {
		this.controlador.pulsarListado()
	}


	/**
	 *	Atención a la pulsación sobre el enlace de nuevo
	 */
	pulsarNuevo():void{
		this.controlador.pulsarNavNuevo()
	}

	/**
	 *	Atención a la pulsación sobre el enlace de buscar
	 */
	 pulsarBuscar():void {
		this.controlador.pulsarNavBuscar()
	}

}