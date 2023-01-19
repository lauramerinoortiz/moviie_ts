"use strict" //activo modo estricto

export class Pelicula{
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

    setNombre(nombre){
        this.nombre=nombre
    }

    setDescripcion(descripcion){
        this.descripcion=descripcion
    }

    setFecha(fecha){
        this.fecha=fecha
    }

    setDuracion(duracion){
        this.duracion=duracion
    }

    setVista(vista){
        this.vista=vista
    }

    setGenero(genero){
        this.genero=genero
    }

    setPlataforma(plataforma){
        let clon = new Set()
        for(let item of plataforma){
            clon.add(item)
        }
        this.plataforma=clon
    }

    setImagen(imagen){
        this.imagen=imagen
    }
}