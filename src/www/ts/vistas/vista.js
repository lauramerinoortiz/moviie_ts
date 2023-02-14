define(["require", "exports"], function (require, exports) {
    "use strict"; //activo modo estricto
    exports.__esModule = true;
    exports.Vista = void 0;
    /**
     * Clase Vista con métodos y atributos general que tendrán todas las Vistas
    */
    var Vista = /** @class */ (function () {
        /**
         * Contructor de la clase Vista
         * @param {Objeto} divinicio div de la vista
         */
        function Vista(divinicio) {
            this.div = divinicio;
        }
        /**
         * Método mostrar que pone el div de la Vista visualizándose u ocultándolo
         * @param {boolean} ver recibe un true o un false
         */
        Vista.prototype.mostrar = function (ver) {
            if (ver) {
                this.div.style.display = 'block';
                console.log('mostrando ', this.div);
            }
            else {
                this.div.style.display = 'none';
            }
        };
        return Vista;
    }());
    exports.Vista = Vista;
});
