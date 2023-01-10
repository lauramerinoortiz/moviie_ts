/**
 * Clase pelicula con sus atributos y metodos asociados
 */
class Pelicula{
    /**
     * Contructor de la clase con sus atributos
     * @param {String} nombre 
     * @param {String} descripcion 
     * @param {int} duracion 
     * @param {Date} fecha 
     * @param {String} genero 
     * @param {Boolean} vista 
     * @param {String} plataforma 
     */
    constructor(nombre, descripcion, duracion, fecha, genero, vista, plataforma){
        this.nombre=nombre              //texto corto
        this.descripcion=descripcion        //texto largo
        this.duracion=duracion           //numero
        this.fecha=fecha                    //fecha
        this.genero=genero              //select
        this.vista=vista               //boolean
        this.plataforma=plataforma      //checkbox
    }
}