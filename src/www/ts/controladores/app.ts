"use strict" //activo modo estricto
import {Modelo} from '../modelos/modelo.js'
import {VistaNav} from '../vistas/vistanav.js'
import {VistaListado} from '../vistas/vistalistado.js'
import {VistaNueva} from '../vistas/vistanueva.js'
import {VistaDatos} from '../vistas/vistadatos.js'
import {VistaEliminar} from '../vistas/vistaeliminar.js'
import {VistaModificar} from '../vistas/vistamodificar.js'
import {VistaBuscar} from '../vistas/vistabuscar.js'
import { Pelicula } from '../vistas/pelicula.js'

/**
 * Clase Controlador que administra las vistas
 */
export class Controlador {
	public modelo!:Modelo
	public nav!: HTMLDivElement
	public vistaNav!: VistaNav
	public divlistado!: HTMLElement
	public vistaListado!:VistaListado
	public divnueva!: HTMLElement
	public vistaNueva!:VistaNueva
	public divdatos!: HTMLElement
	public vistaDatos!:VistaDatos
	public divEliminar!: HTMLElement
	public vistaEliminar!:VistaEliminar
	public divModificar!: HTMLElement
	public vistaModificar!:VistaModificar
	public divBuscar!: HTMLElement
	public vistaBuscar!:VistaBuscar

	/**
	 * Constructor de la clase Controlador
	 * Cuando carga la web ejecuta el método iniciar
	 */
	constructor() {
		window.onload=this.iniciar.bind(this)
	}

	/**
	 * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
	 */
	iniciar() {
		console.log('¡Bienvenido a Moviie! La diversión te espera fuera de la consola.')
		this.modelo=new Modelo(this, this.iniciar2.bind(this))
	}

	iniciar2(){
		this.nav = <HTMLDivElement>document.getElementsByTagName('nav')[0]
		this.vistaNav = new VistaNav(this.nav, this)

        this.divlistado=<HTMLElement>document.getElementById('inicio')
		this.vistaListado=new VistaListado(this.divlistado, this)

		this.divnueva=<HTMLElement>document.getElementById('nueva')
		this.vistaNueva=new VistaNueva(this.divnueva, this)
        
        this.divdatos=<HTMLElement>document.getElementById('datos')
		this.vistaDatos=new VistaDatos(this.divdatos, this)

		this.divEliminar=<HTMLDivElement>document.getElementById('eliminar')
        this.vistaEliminar=new VistaEliminar(this.divEliminar,  this)

        this.divModificar=<HTMLDivElement>document.getElementById('modificar')
        this.vistaModificar=new VistaModificar(this.divModificar, this)

		this.divBuscar=<HTMLDivElement>document.getElementById('buscar')
        this.vistaBuscar=new VistaBuscar(this.divBuscar, this)
		
        this.ocultarVistas()
		this.pulsarListado()
	}

	/**
	 * Método que oculta todas las vistas
	 */
	ocultarVistas():void {
		this.vistaListado.mostrar(false)
		this.vistaNueva.mostrar(false)
        this.vistaDatos.mostrar(false)
        this.vistaEliminar.mostrar(false)
        this.vistaModificar.mostrar(false)
		this.vistaBuscar.mostrar(false)
	}

	/**
	 * Método pulsarListado que oculta las vistas y muestra la del inicio
	 */
	pulsarNavListado():void {
		this.ocultarVistas()
		this.vistaListado.mostrar(true)
		this.vistaNueva.pulsarBorrar()
	}

    /**
	 * Método pulsarNuevo que oculta las vistas y muestra la del formulario de alta
	 */
	pulsarNavNuevo():void {
		this.ocultarVistas()
		this.vistaNueva.mostrar(true)
		this.vistaNueva.pulsarBorrar()
	}

	/**
	 * Método pulsarBuscar que oculta las vistas y muestra la del busqueda
	 */
	pulsarNavBuscar():void {
		this.ocultarVistas()
		this.vistaBuscar.mostrar(true)
	}

    /**
     * Método cuando pulsamos una pelicula
     */
    pulsarPelicula(nombre:string):void{
		this.modelo.buscarNombre(nombre, this.mostrarDatos.bind(this))
    }
	
	/**
	 * Método que manda la pelicula a la vista para mostrar sus datos
	 * @param {Object} pelicula 
	 */
	mostrarDatos(pelicula:Pelicula):void{
		this.ocultarVistas()
		this.vistaDatos.mostrar(true)
		this.vistaModificar.mostrarDatos(pelicula)
		this.vistaDatos.mostrarDatos(pelicula)
	}

    /**
     * Método cuando pulsamos un boton cancelar
     */
    pulsarCancelar():void{
        this.pulsarNavListado()
    }

    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarEliminar(id:number):void{
        this.ocultarVistas()
		this.vistaEliminar.setId(id)
        this.vistaEliminar.mostrar(true)
    }

	/**
	 * Método que manda un id a la bbdd para borrar el registro asociado
	 * @param {Int} id 
	 */
	eliminar(id:number):void{
		this.modelo.eliminar(id, this.iniciar.bind(this))
	}

    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarModificar():void{
        this.ocultarVistas()
		this.vistaModificar.mostrar(true)
    }

	/**
	 * Método para añadir una pelicula a la base de datos
	 * @param {Object} pelicula 
	 */
	nuevaPelicula(pelicula:Pelicula):void{
		this.modelo.nuevaPelicula( pelicula)
	}

	/**
	 * Método getModelo, devuelve el modelo de la aplicación
	 * @return {Modelo} El modelo de la aplicación
	 **/
	getModelo() :Modelo{
		return this.modelo
	}

	/**
	 * Método que coge el listado y lo lleva a la vista para que lo muestre
	 */
	pulsarListado():void{
		let lista=this.modelo.pulsarListado()
		this.vistaListado.mostrarListado(lista)
		this.pulsarNavListado()
	}

	/**
	 * Método que llama a la base de datos a que busque
	 * @param {Boolean} vista 
	 * @param {String} genero 
	 */
	pulsarBuscar(vista:boolean, genero:string):void{
		let lista=this.modelo.buscar(vista, genero, this.mandarLista.bind(this))
	}

	/**
	 * Método que manda a la vista la lista de elementos de la bsuqueda
	 * @param {Array} lista 
	 */
	mandarLista(lista:Array<any>):void{
		this.vistaBuscar.listar(lista)
	}

	/**
	 * Método que coge el listado y lo lleva a la vista para que lo muestre
	 */
	obtenerListado(nombre:string):void{
		let lista=this.modelo.pulsarListado()
		console.log(lista)
		this.vistaListado.mostrarListado(lista)
		this.pulsarPelicula(nombre)
	}

	/**
	 * Método que mandar al modelo los datos de la pelicula modificada y su id
	 * @param {Int} id 
	 * @param {Object} pelicula 
	 */
	modificarPelicula(id:number, pelicula:Pelicula):void{
		console.log(id)
		this.modelo.modificarPelicula(id, pelicula, this.obtenerListado.bind(this, pelicula.nombre))
	}
}
const app= new Controlador()

