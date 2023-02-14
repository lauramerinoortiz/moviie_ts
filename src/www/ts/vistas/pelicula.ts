"use strict" //activo modo estricto
/**
 * Clase película que servirá de molde para crear objectos de ella
 */
export class Pelicula{
   public id:number
   public nombre: string
   public descripcion: string
   public fecha:string
   public duracion: number
   public vista: boolean
   public genero: string
   public plataforma:any
   public imagen: string

    /**
     * Constructor de la clase
     */
    constructor(){
        this.id=Date.now()
        this.nombre=''     //texto corto
        this.descripcion=''        //texto largo
        this.fecha=''             //date estreno
        this.duracion=0               //int
        this.vista=false          //boolean
        this.genero=''         //select
        this.plataforma=new Set()            //checkbox
        this.imagen=''         //imagen
    }

    /**
     * Método para setear el nombre
     * @param {String} nombre 
     */
    setNombre(nombre:string){
        this.nombre=nombre
    }

    /**
     * Método para setear la descripcion
     * @param {String} descripcion 
     */
    setDescripcion(descripcion:string){
        this.descripcion=descripcion
    }

    /**
     * Método para setear la fecha
     * @param {Date} fecha 
     */
    setFecha(fecha:string){
        this.fecha=fecha
    }

    /**
     * Método para setear la duracion
     * @param {Int} duracion 
     */
    setDuracion(duracion:number){
        this.duracion=duracion
    }

    /**
     * Método para setear el atributo vista
     * @param {Boolean} vista 
     */
    setVista(vista:boolean){
        this.vista=vista
    }

    /**
     * Método para setear el genero
     * @param {String} genero 
     */
    setGenero(genero:string){
        this.genero=genero
    }

    /**
     * Método para setear las plataformas en las que esta disponible la pelicula
     * @param {Set} plataforma 
     */
    setPlataforma(plataforma:any){
        let clon = new Set()
        for(let item of plataforma){
            clon.add(item)
        }
        this.plataforma=clon
    }

    /**
     * Método para setear la url de la imagen asociada
     * @param {String} imagen 
     */
    setImagen(imagen:string){
        this.imagen=imagen
    }
}