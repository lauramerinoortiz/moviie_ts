"use strict" //activo modo estricto
import { Controlador } from '../controladores/app.js'
import { Pelicula } from './pelicula.js'
import {Vista} from './vista.js'
/**
 * Clase VistaNueva que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaNueva extends Vista {
     public div:HTMLElement
     public controlador:Controlador
     public nombre:HTMLInputElement
     public descripcion:HTMLInputElement
     public fecha:HTMLInputElement
     public duracion:HTMLInputElement
     public imagen:HTMLInputElement
     public borrar:HTMLElement
     public aceptar:HTMLElement
     public netflix:HTMLInputElement
     public hbo:HTMLInputElement
     public disney:HTMLInputElement
     public amazon:HTMLInputElement
     public plataformas:Set<string>
     public error:HTMLElement
     public insertado:HTMLElement
     public vista:boolean

	/**
     * Contructor de la clase VistaNueva
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div:HTMLElement, controlador:Controlador) {
		super(div)
          this.controlador = controlador
          this.div=document.getElementById('nueva')!

          this.nombre=<HTMLInputElement>document.getElementById('nombre')
          this.descripcion=<HTMLInputElement>document.getElementById('descripcion')
          this.fecha=<HTMLInputElement>document.getElementById('fecha')
          this.duracion=<HTMLInputElement>document.getElementById('duracion')
          this.imagen=<HTMLInputElement>document.getElementById('imagen')

          this.borrar=this.div.getElementsByTagName('button')[0]
          this.borrar.onclick = this.pulsarBorrar.bind(this)

          this.aceptar=this.div.getElementsByTagName('button')[1]
          this.aceptar.onclick = this.pulsarAceptar.bind(this)

          this.netflix=<HTMLInputElement>document.getElementById('netflix')
          this.netflix.onclick=this.anadirPlataforma.bind(this,'Netflix')

          this.hbo=<HTMLInputElement>document.getElementById('hbo')
          this.hbo.onclick=this.anadirPlataforma.bind(this, 'Hbo')

          this.disney=<HTMLInputElement>document.getElementById('disney')
          this.disney.onclick=this.anadirPlataforma.bind(this, 'Disney')

          this.amazon=<HTMLInputElement>document.getElementById('amazon')
          this.amazon.onclick=this.anadirPlataforma.bind(this,'Amazon')

          this.plataformas=new Set()
          this.error=<HTMLDivElement>document.getElementById('camposrellenosEditar')
          this.insertado=<HTMLDivElement>document.getElementById('insertado')
          this.vista=false
	}

     /**
      * Método para cuando damos al boton borrar que limpia el formulario
      */
     pulsarBorrar():void{
          this.nombre.value=''
          this.descripcion.value=''
          this.fecha.value=''
          this.duracion.value=''
          this.imagen.value=''
          document.getElementsByTagName('select')[0].value='Drama'
  
          
          this.netflix.checked=false
          this.hbo.checked=false
          this.disney.checked=false
          this.amazon.checked=false
          this.plataformas.clear()
          let error=document.getElementById('camposrellenos')!
          error.style.display='none'
          let insertado=document.getElementById('insertado')!
          insertado.style.display='none'
          this.nombre.style.borderColor="#808080"
          this.descripcion.style.borderColor="#808080"
          this.fecha.style.borderColor="#808080"
          this.duracion.style.borderColor="#808080"
     }

     /**
      * Método para cuando damos al boton aceptar
      */
     pulsarAceptar():void{
          let error=document.getElementById('camposrellenos')!
          error.style.display='none'
          
          this.insertado.style.display='none'
          this.nombre.style.borderColor="#808080"
          this.descripcion.style.borderColor="#808080"
          this.fecha.style.borderColor="#808080"
          this.duracion.style.borderColor="#808080"

          let nombre=this.nombre.value

          let descripcion=this.descripcion.value
          
          let fecha=this.fecha.value
          
          let duracion=this.duracion.value

          let imagen=this.imagen.value

          this.vista=false
          let vistaSi=<HTMLInputElement>document.getElementById('vistaSi')
          let vistaNo=<HTMLInputElement>document.getElementById('vistaNo')
          if(vistaSi.checked){
               this.vista=true
          }
          if(vistaNo.checked){
               this.vista=false
          }

          let genero=<HTMLSelectElement>document.getElementById('genero')
          let opcion=genero.options[genero.selectedIndex].value
          
          if(nombre==''){
               error.style.display='block'
               this.nombre.style.borderColor="red"
          }
          else if(descripcion==''){
               error.style.display='block'
               this.descripcion.style.borderColor="red"
          }
          else if(fecha==''){
               error.style.display='block'
               this.fecha.style.borderColor="red"
          }
          else if(duracion==''){
               error.style.display='block'
               this.duracion.style.borderColor="red"
          }
          else{
               let pelicula= new Pelicula()
               pelicula.setNombre(nombre)
               pelicula.setDescripcion(descripcion)
               pelicula.setFecha(fecha)
               pelicula.setDuracion(duracion)
               pelicula.setVista(this.vista)
               pelicula.setGenero(opcion)
               pelicula.setPlataforma(this.plataformas)
               pelicula.setImagen(imagen)
               
               this.controlador.nuevaPelicula(pelicula)
               this.pulsarBorrar()
               this.insertado.style.display='block'
          }

     }

     /**
      * Método que se ejecuta al pulsar cualquier checkbox, eliminandolo del Set si existe o añadiendolo
      */
     anadirPlataforma(elemento:string):void{
          if(this.plataformas.has(elemento)){
               this.plataformas.delete(elemento)
          }
          else{
               this.plataformas.add(elemento)
          }

          console.log(this.plataformas)
     }

}