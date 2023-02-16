"use strict" //activo modo estricto
/**
 * Clase película que servirá de molde para crear objectos de ella
 */
export class Pelicula{
   public id:number
   public nombre: string
   public descripcion: string
   public fecha:string
   public duracion: string
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
        this.duracion=''               //int
        this.vista=false          //boolean
        this.genero=''         //select
        this.plataforma=new Set()           //checkbox
        this.imagen=''         //imagen
    }

    /**
     * Método para setear el nombre
     * @param {String} nombre 
     */
    setNombre(nombre:string):void{
        this.nombre=nombre
    }

    /**
     * Método para setear la descripcion
     * @param {String} descripcion 
     */
    setDescripcion(descripcion:string):void{
        this.descripcion=descripcion
    }

    /**
     * Método para setear la fecha
     * @param {Date} fecha 
     */
    setFecha(fecha:string):void{
        this.fecha=fecha
    }

    /**
     * Método para setear la duracion
     * @param {Int} duracion 
     */
    setDuracion(duracion:string):void{
        this.duracion=duracion
    }

    /**
     * Método para setear el atributo vista
     * @param {Boolean} vista 
     */
    setVista(vista:boolean):void{
        this.vista=vista
    }

    /**
     * Método para setear el genero
     * @param {String} genero 
     */
    setGenero(genero:string):void{
        this.genero=genero
    }

    /**
     * Método para setear las plataformas en las que esta disponible la pelicula
     * @param {Set} plataforma 
     */
    setPlataforma(plataforma:any):void{
        let clon= new Set()
        for(let item of plataforma){
            clon.add(item)
        }
        this.plataforma=clon
    }

    /**
     * Método para setear la url de la imagen asociada
     * @param {String} imagen 
     */
    setImagen(imagen:string):void{
        this.imagen=imagen
    }
}