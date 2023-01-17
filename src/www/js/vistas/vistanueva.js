"use strict" //activo modo estricto
import { Pelicula } from './pelicula.js'
import {Vista} from './vista.js'
/**
 * Clase VistaNueva que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaNueva extends Vista {

	/**
     * Contructor de la clase VistaNueva
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.div=document.getElementById('nueva')

          this.borrar=this.div.getElementsByTagName('button')[0]
          this.borrar.onclick = this.pulsarBorrar.bind(this)

          this.aceptar=this.div.getElementsByTagName('button')[1]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)

          this.netflix=document.getElementById('netflix')
          this.netflix.onclick=this.anadirPlataforma.bind(this,'Netflix')

          this.hbo=document.getElementById('hbo')
          this.hbo.onclick=this.anadirPlataforma.bind(this, 'Hbo')

          this.disney=document.getElementById('disney')
          this.disney.onclick=this.anadirPlataforma.bind(this, 'Disney')

          this.amazon=document.getElementById('amazon')
          this.amazon.onclick=this.anadirPlataforma.bind(this,'Amazon')

          this.plataformas=new Set()
	}

     /**
      * Método para cuando damos al boton borrar que limpia el formulario
      */
     pulsarBorrar() {
          document.getElementById('nombre').value=''
          document.getElementById('descripcion').value=''
          document.getElementById('fecha').value=''
          document.getElementById('duracion').value=''
          this.netflix.checked=false
          this.hbo.checked=false
          this.disney.checked=false
          this.amazon.checked=false
          this.plataformas.clear()
          let error=document.getElementById('camposrellenos')
          error.style.display='none'
          let insertado=document.getElementById('insertado')
          insertado.style.display='none'
     }

     /**
      * Método para cuando damos al boton aceptar
      */
     pulsarAceptar() {
          let error=document.getElementById('camposrellenos')
          error.style.display='none'
          let insertado=document.getElementById('insertado')
          insertado.style.display='none'

          let nombre=document.getElementById('nombre').value

          let descripcion=document.getElementById('descripcion').value
          
          let fecha=document.getElementById('fecha').value
          
          let duracion=document.getElementById('duracion').value

          let vista=null
          if(document.getElementById('vistaSi').checked){
               vista=true
          }
          if(document.getElementById('vistaNo').checked){
               vista=false
          }

          let genero=document.getElementById('genero')
          let opcion=genero.options[genero.selectedIndex].value
          
          if(nombre=='' || descripcion=='' || fecha=='' || duracion==''){
               error.style.display='block'
          }
          else{
               let pelicula= new Pelicula()
               pelicula.setNombre(nombre)
               pelicula.setDescripcion(descripcion)
               pelicula.setFecha(fecha)
               pelicula.setDuracion(duracion)
               pelicula.setVista(vista)
               pelicula.setGenero(opcion)
               pelicula.setPlataforma(this.plataformas)
               
               this.controlador.nuevaPelicula(pelicula)
               this.pulsarBorrar()
               insertado.style.display='block'
          }

     }

     /**
      * Método que se ejecuta al pulsar cualquier checkbox, eliminandolo del Set si existe o añadiendolo
      */
     anadirPlataforma(elemento){
          if(this.plataformas.has(elemento)){
               this.plataformas.delete(elemento)
          }
          else{
               this.plataformas.add(elemento)
          }

          console.log(this.plataformas)
     }

}