var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
define("vistanav", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.VistaNav = void 0;
    /**
     *	Implementa una vista del menú de navegación.
     */
    var VistaNav = /** @class */ (function () {
        /**
         *	Constructor de la clase.
         *	@param {HTMLElement} nav Nav de HTML en el que se desplegará la vista.
         *	@param {Object} controlador Controlador de la vista del administrador.
         */
        function VistaNav(nav, controlador) {
            this.controlador = controlador;
            this.nav = nav;
            this.liLogo = this.nav.getElementsByTagName('li')[0];
            this.liListado = this.nav.getElementsByTagName('li')[1];
            this.liNuevo = this.nav.getElementsByTagName('li')[2];
            this.liBuscar = this.nav.getElementsByTagName('li')[3];
            this.liListado.onclick = this.pulsarListado.bind(this);
            this.liNuevo.onclick = this.pulsarNuevo.bind(this);
            this.liLogo.onclick = this.pulsarListado.bind(this);
            this.liBuscar.onclick = this.pulsarBuscar.bind(this);
        }
        /**
         *	Atención a la pulsación sobre el enlace del listado
         */
        VistaNav.prototype.pulsarListado = function () {
            this.controlador.pulsarListado();
        };
        /**
         *	Atención a la pulsación sobre el enlace de nuevo
         */
        VistaNav.prototype.pulsarNuevo = function () {
            this.controlador.pulsarNavNuevo();
        };
        /**
         *	Atención a la pulsación sobre el enlace de buscar
         */
        VistaNav.prototype.pulsarBuscar = function () {
            this.controlador.pulsarNavBuscar();
        };
        return VistaNav;
    }());
    exports.VistaNav = VistaNav;
});
define("vistaeliminar", ["require", "exports", "vista"], function (require, exports, vista_js_1) {
    "use strict"; //activo modo estricto
    exports.__esModule = true;
    exports.VistaEliminar = void 0;
    /**
     * Clase VistaNueva que muestra el mensaje de confirmacion para eliminar
     * Gestiona los elementos y métodos de esta Vista
     */
    var VistaEliminar = /** @class */ (function (_super) {
        __extends(VistaEliminar, _super);
        /**
         * Contructor de la clase VistaEliminar
         * @param {HTMLElement} div Div de la vista
         * @param {Object} controlador Controlador de la vista
         */
        function VistaEliminar(div, controlador) {
            var _this = _super.call(this, div) || this;
            _this.id = 0;
            _this.controlador = controlador;
            _this.div = document.getElementById('eliminar');
            _this.cancelar = _this.div.getElementsByTagName('button')[0];
            _this.cancelar.onclick = _this.pulsarCancelar.bind(_this);
            _this.aceptar = _this.div.getElementsByTagName('button')[1];
            _this.aceptar.onclick = _this.pulsarAceptar.bind(_this);
            return _this;
        }
        /**
         * Método para cuando pulsamos el boton cancelar
         */
        VistaEliminar.prototype.pulsarCancelar = function () {
            this.controlador.pulsarCancelar();
        };
        /**
         * Método para cuando pulsamos el boton aceptar
         */
        VistaEliminar.prototype.pulsarAceptar = function () {
            this.controlador.eliminar(this.id);
        };
        /**
         * Método que setea el id
         * @param {Int} id
         */
        VistaEliminar.prototype.setId = function (id) {
            this.id = id;
        };
        return VistaEliminar;
    }(vista_js_1.Vista));
    exports.VistaEliminar = VistaEliminar;
});
