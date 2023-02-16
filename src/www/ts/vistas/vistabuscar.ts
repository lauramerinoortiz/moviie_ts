"use strict" //activo modo estricto
import { Controlador } from '../controladores/app.js'
import {Vista} from './vista.js'
/**
 * Clase VistaBuscar que muestra el formulario para buscar una pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaBuscar extends Vista {
     public div:HTMLElement
     private controlador:Controlador
     private aceptar:HTMLInputElement
	/**
     * Contructor de la clase VistaBuscar
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div: HTMLElement, controlador: Controlador) {
		super(div)
          this.controlador = controlador

          this.div=document.getElementById('buscar')!

          this.aceptar=<HTMLInputElement>this.div.getElementsByTagName('button')[0]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)
	}

     /**
      * Método para cuando pulsamos el boton aceptar
      */
     pulsarAceptar():void{
          let vista=false
          let vistaSi=<HTMLInputElement>document.getElementById('vistaSiBuscar')
          let vistaNo=<HTMLInputElement>document.getElementById('vistaNoBuscar')
          if(vistaSi.checked){
               vista=true
          }
          if(vistaNo.checked){
               vista=false
          }

          let genero=<HTMLSelectElement>document.getElementById('generoBuscar')!
          let opcion=genero.options[genero.selectedIndex].value
          this.controlador.pulsarBuscar(vista, opcion)
     }

     /**
      * Método que saca las peliculas según la lista de resultados que recibe
      * @param {Array} lista 
      */
     listar(lista:any):void{
          let resul:any=document.getElementById('resul')
          resul.innerHTML = ""        //vaciamos el div
          if(lista==''){      //si la lista viene vacia porque no hay coincidencias
               let vacio=document.createElement('h2')
               vacio.appendChild(document.createTextNode('No hay datos que coincidan'))
               resul.appendChild(vacio)
          }
          else{
               for(let item of lista){
                    let div=document.createElement('div')
                    div.className='pelicula'
                    if(item.imagen!=''){
                         div.style.backgroundImage="url('"+item.imagen+"')"
                    }
                    else{
                         div.style.backgroundImage="url('assets/recursos/fondo.png')"
                    }

                    let oculto=document.createElement('div')
                    oculto.className='oculto'
                    div.appendChild(oculto)

                    let titulo=document.createElement('h2')
                    div.appendChild(titulo)
                    titulo.appendChild(document.createTextNode(item.nombre))
                    resul.appendChild(div)
                    div.onclick=this.pulsarPelicula.bind(this, item.nombre)
               }
          }
     }

     /**
      * Método para cuando damos click a una pelicula
      */
     pulsarPelicula(nombre:string):void{
          this.controlador.pulsarPelicula(nombre)
     }
}