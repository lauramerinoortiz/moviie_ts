define("vista", ["require", "exports"], function (require, exports) {
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
define("pelicula", ["require", "exports"], function (require, exports) {
    "use strict"; //activo modo estricto
    exports.__esModule = true;
    exports.Pelicula = void 0;
    /**
     * Clase película que servirá de molde para crear objectos de ella
     */
    var Pelicula = /** @class */ (function () {
        /**
         * Constructor de la clase
         */
        function Pelicula() {
            this.id = Date.now();
            this.nombre = ''; //texto corto
            this.descripcion = ''; //texto largo
            this.fecha = ''; //date estreno
            this.duracion = 0; //int
            this.vista = false; //boolean
            this.genero = ''; //select
            this.plataforma = new Set(); //checkbox
            this.imagen = ''; //imagen
        }
        /**
         * Método para setear el nombre
         * @param {String} nombre
         */
        Pelicula.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        /**
         * Método para setear la descripcion
         * @param {String} descripcion
         */
        Pelicula.prototype.setDescripcion = function (descripcion) {
            this.descripcion = descripcion;
        };
        /**
         * Método para setear la fecha
         * @param {Date} fecha
         */
        Pelicula.prototype.setFecha = function (fecha) {
            this.fecha = fecha;
        };
        /**
         * Método para setear la duracion
         * @param {Int} duracion
         */
        Pelicula.prototype.setDuracion = function (duracion) {
            this.duracion = duracion;
        };
        /**
         * Método para setear el atributo vista
         * @param {Boolean} vista
         */
        Pelicula.prototype.setVista = function (vista) {
            this.vista = vista;
        };
        /**
         * Método para setear el genero
         * @param {String} genero
         */
        Pelicula.prototype.setGenero = function (genero) {
            this.genero = genero;
        };
        /**
         * Método para setear las plataformas en las que esta disponible la pelicula
         * @param {Set} plataforma
         */
        Pelicula.prototype.setPlataforma = function (plataforma) {
            var clon = new Set();
            for (var _i = 0, plataforma_1 = plataforma; _i < plataforma_1.length; _i++) {
                var item = plataforma_1[_i];
                clon.add(item);
            }
            this.plataforma = clon;
        };
        /**
         * Método para setear la url de la imagen asociada
         * @param {String} imagen
         */
        Pelicula.prototype.setImagen = function (imagen) {
            this.imagen = imagen;
        };
        return Pelicula;
    }());
    exports.Pelicula = Pelicula;
});
