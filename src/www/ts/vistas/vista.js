"use strict"; //activo modo estricto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vista = void 0;
/**
 * Clase Vista con métodos y atributos general que tendrán todas las Vistas
*/
class Vista {
    /**
     * Contructor de la clase Vista
     * @param {Objeto} divinicio div de la vista
     */
    constructor(divinicio) {
        this.div = divinicio;
    }
    /**
     * Método mostrar que pone el div de la Vista visualizándose u ocultándolo
     * @param {boolean} ver recibe un true o un false
     */
    mostrar(ver) {
        if (ver) {
            this.div.style.display = 'block';
            console.log('mostrando ', this.div);
        }
        else {
            this.div.style.display = 'none';
        }
    }
}
exports.Vista = Vista;
