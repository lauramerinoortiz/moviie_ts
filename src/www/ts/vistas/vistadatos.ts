"use strict" //activo modo estricto
import {Vista} from './vista.js'
import { Controlador } from '../controladores/app.js'
import { Pelicula } from './pelicula.js'
/**
 * Clase VistaDatos que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaDatos extends Vista {
     public div: HTMLElement
     public controlador:Controlador
     public eliminar:HTMLElement
     public modificar:HTMLElement
	/**
     * Contructor de la clase VistaDatos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div:HTMLElement, controlador:Controlador) {
		super(div)
          this.controlador = controlador

          this.div=<HTMLElement>document.getElementById('datos')
          this.eliminar=<HTMLElement>this.div.getElementsByTagName('button')[0]
          this.modificar=<HTMLElement>this.div.getElementsByTagName('button')[1]

          this.modificar.onclick=this.pulsarModificar.bind(this)

	}
     /**
      * Método que muestra en la tabla de datos, los datos de la pelicula
      * @param {Object} pelicula 
      */
     mostrarDatos(pelicula:Pelicula){
          //Buscamos los datos
          let nombre=<HTMLElement>document.getElementById("datosNombre")
          let descripcion=<HTMLElement>document.getElementById("datosDescripcion")
          let fecha=<HTMLElement>document.getElementById("datosFecha")
          let duracion=<HTMLElement>document.getElementById("datosDuracion")
          let plataformas=<HTMLElement>document.getElementById("datosPlataformas")
          let genero=<HTMLElement>document.getElementById("datosGenero")
          let vista=<HTMLElement>document.getElementById("datosVista")
          //Borramos el contenido que pudiera haber anteriormente
          nombre.innerHTML=''
          descripcion.innerHTML=''
          fecha.innerHTML=''
          duracion.innerHTML=''
          plataformas.innerHTML=''
          genero.innerHTML=''
          vista.innerHTML=''
          //Metemos los datos de la pelicula
          nombre.appendChild(document.createTextNode(pelicula.nombre))
          descripcion.appendChild(document.createTextNode(pelicula.descripcion))
          fecha.appendChild(document.createTextNode(pelicula.fecha))
          duracion.appendChild(document.createTextNode(pelicula.duracion))
          let plat=''
          for(let item of pelicula.plataforma){
               plat+=item+'; '
          }
          plataformas.appendChild(document.createTextNode(plat))
          genero.appendChild(document.createTextNode(pelicula.genero))
          if(pelicula.vista){
               vista.appendChild(document.createTextNode('Si'))
          }
          else{
               vista.appendChild(document.createTextNode('No'))
          }

          this.eliminar.onclick = this.pulsarEliminar.bind(this, pelicula.id)
     }

     /**
      * Método para cuando damos al boton eliminar
      */
     pulsarEliminar(id:number):void{
          this.controlador.ocultarVistas()
          this.controlador.mostrarEliminar(id)
     }

     /**
      * Método para cuando damos al boton modificar
      */
     pulsarModificar():void{
          this.controlador.ocultarVistas()
          this.controlador.mostrarModificar()
     }
}