"use strict"
import { Pelicula } from "../vistas/pelicula"

 //activo modo estricto


export class Idb{
    public bd:any
    public callback:Function
    public lista!:Array<any>
    public listaResultados!:Array<any>
    public result!:Pelicula

    constructor(callback:Function){
        this.bd
        this.iniciarBase()
        this.lista
        this.callback=callback
    }

    /**
     * Método que inicia la base de datos
     */
    iniciarBase(){
		const peticion =window.indexedDB.open("Peliculas")
		peticion.onsuccess= (evento:any) =>{			//si va bien crea una bbdd
			this.bd=evento.target.result;		//la guardamos
			const objectStore =this.bd.transaction('Tabla', 'readonly').objectStore('Tabla')
			const peticion = objectStore.getAll()
			peticion.onsuccess=(event:any)=>{
                console.log('Base de datos cargada')
				this.lista=event.target.result
                this.callback()
			}
		}
		peticion.onupgradeneeded =(event:any) =>{
			this.bd=event.target.result
			const objectStore= this.bd.createObjectStore('Tabla', {keyPath :'id'})		//Objeto para guardar los datos
            
        }
		peticion.onerror=function(){		//si va mal
			console.log('Fallo al cargar la base de datos.')
		}
	}

    /**
     * 
     * @param {Object} pelicula Objeto pelicula con sus atributos
     */
    nuevaPelicula( pelicula:Pelicula){
        console.log('Guardando a '+pelicula.nombre)
		const datos = this.bd.transaction('Tabla','readwrite').objectStore('Tabla')		//iniciamos una transaccion
		datos.add(pelicula)			//añadimos el objeto
        this.listadoPeliculas()
    }

    /**
     * Método que lee la base de datos y saca el listado
     */
    
    listadoPeliculas(){
        const objectStore =this.bd.transaction('Tabla', 'readonly').objectStore('Tabla')
		const peticion = objectStore.getAll()
		peticion.onsuccess=(event:any)=>{
            this.lista=event.target.result
            console.log(this.lista)
        }
        peticion.onerror=function(){		//si va mal
            console.log('Fallo al cargar la base de datos.')
        }
    }

    /**
     * Método que recibe los datos de busqueda y devuelve los resultados de la misma
     * @param {boolean} vista 
     * @param {String} genero 
     * @param {Method} callback 
     */
    buscar(vista:boolean, genero:string, callback:Function):void{
        const objectStore = this.bd.transaction("Tabla").objectStore("Tabla");
		this.listaResultados = []
		
		const cursor1 = objectStore.openCursor()
		cursor1.onsuccess = (evento:any) => {
			const cursor = evento.target.result;
			if (cursor) {
				let pelicula = cursor.value
				if (pelicula.vista == vista && pelicula.genero == genero)
					this.listaResultados.push(pelicula)
				    cursor.continue()
			} 
            else {
				callback(this.listaResultados)
			}
		}  
    }
    
    /**
     * Método que busca en la base de datos y extrae la película según el nombre
     * @param {String} nombre 
     * @param {Method} callback 
     */
    buscarNombre(nombre:string, callback:Function):void{
        const objectStore = this.bd.transaction("Tabla").objectStore("Tabla");
		this.result
		const cursor1 = objectStore.openCursor()
		cursor1.onsuccess = (evento:any) => {
			const cursor = evento.target.result;
			if (cursor) {
				let pelicula = cursor.value
				if (pelicula.nombre == nombre){
					this.result=pelicula
                }
				    cursor.continue()
			} 
            else {
				callback(this.result)
			}
		}  
    }

    /**
     * Método que busca en la base de datos y modifica la pelicula
     * @param {Int} id 
     * @param {String} pelicula 
     * @param {Method} callback 
     */
    modificarPelicula( id:number, pelicula:Pelicula, callback:Function):void{
        const objectStore =this.bd.transaction ('Tabla', 'readwrite').objectStore('Tabla')
        const peticion = objectStore.get(id)
        
        peticion.onerror=(event:any) =>{
            console.log('Falló la lectura')
        }
        peticion.onsuccess=(event:any) =>{
            const data = event.target.result
            console.log('Leído', data)
            //Datos cambiados
            data.nombre=pelicula.nombre
            data.descripcion=pelicula.descripcion
            data.fecha=pelicula.fecha
            data.duracion=pelicula.duracion
            data.vista=pelicula.vista
            data.genero=pelicula.genero
            data.plataforma=pelicula.plataforma
            data.imagen=pelicula.imagen

            const peticion2 = objectStore.put(data)
            this.listadoPeliculas()
            peticion2.onerror =(event:any) =>{
                console.log('No se pudo actualizar')
                
                callback()
            }
            peticion2.onsuccess =(event:any) => {
                console.log('Se actualizó')
                callback()
            }
        }
        
    }

    /**
     * Método que elimina un dato de la bbd según el id que tenga
     * @param {Int} id 
     * @param {Mehtod} callback 
     */
    eliminar(id:number, callback:Function):void{
        const datos = this.bd.transaction('Tabla','readwrite')		//iniciamos una transaccion
		let request = datos.objectStore("Tabla").delete(id);
        request.onsuccess=(event:any) => {
            console.log('Se borro')
            this.listadoPeliculas()
            callback()
        }
        
    }
}