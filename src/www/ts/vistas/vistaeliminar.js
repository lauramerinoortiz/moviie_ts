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
define(["require", "exports", "./vista.js"], function (require, exports, vista_js_1) {
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
