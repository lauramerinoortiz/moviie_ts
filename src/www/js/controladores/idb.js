"use strict" //activo modo estricto


export class Idb{
    constructor(){
        this.bd
        this.conexion=null
        this.iniciarBase(this.bd)
        this.lista
    }

    /**
     * Método que inicia la base de datos
     * @param {*} bd 
     */
    iniciarBase(bd){
		const peticion =window.indexedDB.open("Peliculas")
		peticion.onsuccess= (evento) =>{			//si va bien crea una bbdd
			this.bd=evento.target.result;		//la guardamos
			const objectStore =this.bd.transaction('Tabla', 'readonly').objectStore('Tabla')
			const peticion = objectStore.getAll()
			peticion.onsuccess=(event)=>{
                console.log('Base de datos cargada')
				this.lista=event.target.result
                console.log(this.lista)
			}
		}
		peticion.onupgradeneeded =(event) =>{
			this.bd=event.target.result
			const objectStore= this.bd.createObjectStore('Tabla', {keyPath :'nombre'})		//Objeto para guardar los datos
            
        }
		peticion.onerror=function(){		//si va mal
			console.log('Fallo al cargar la base de datos.')
		}
	}

    /**
     * 
     * @param {Object} pelicula Objeto pelicula con sus atributos
     */
    nuevaPelicula( pelicula){
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
		peticion.onsuccess=(event)=>{
            this.lista=event.target.result
        }
        peticion.onerror=function(){		//si va mal
            console.log('Fallo al cargar la base de datos.')
        }
    }

    buscar(vista, genero, callback){
        const objectStore = this.bd.transaction("Tabla").objectStore("Tabla");
		this.listaResultados = []
		
		const cursor1 = objectStore.openCursor()
		cursor1.onsuccess = (evento) => {
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
    buscarNombre(nombre, callback){
        const objectStore = this.bd.transaction("Tabla").objectStore("Tabla");
		this.result 
		console.log('nombre a buscar:'+nombre)
		const cursor1 = objectStore.openCursor()
		cursor1.onsuccess = (evento) => {
			const cursor = evento.target.result;
			if (cursor) {
				let pelicula = cursor.value
				if (pelicula.nombre == nombre){
                    console.log('encontrada'+pelicula.nombre)
					this.result=pelicula
                }
				    cursor.continue()
			} 
            else {
                console.log(this.result)
				callback(this.result)
			}
		}  
    }
}