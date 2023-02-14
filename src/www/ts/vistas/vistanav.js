define(["require", "exports"], function (require, exports) {
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
