'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var easing = _interopRequireWildcard(require("d3-ease"));

var _Camera = _interopRequireDefault(require("./camera/Camera"));

var _Options = _interopRequireDefault(require("./options/Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A non-opinioned implementation for adding cameras to your PIXI application via containers.
 */
var PixiGameCamera = /*#__PURE__*/function () {
  /**
   * A reference to the options passed on initialization.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the easing functions that can be used.
   * 
   * @private
   * 
   * @property {*}
   */

  /**
   * @param {Object} [options]
   * @param {PIXI.Sprite} [options.sprite] A reference to the PIXI sprite object used for some effects such as fade.\
   * @param {PIXI.Texture} [options.texture] A reference to the PIXI.Texture object. This is used along with the PIXI.Sprite option to set textures for some of the effects.
   * @param {PIXI.Ticker} [options.ticker] A reference to the PIXI ticker if it's being used. If the PIXI ticker is not used then updates will have to be called manually.
   */
  function PixiGameCamera() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PixiGameCamera);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_EASING", easing);

    this._options = new _Options["default"](options);
  }
  /**
   * Returns the easing functions that can be selected from.
   * 
   * @returns {*}
   */


  _createClass(PixiGameCamera, [{
    key: "camera",

    /**
     * Creates a new camera that is focused on a container.
     *
     * @param {PIXI.Camera} container The container to focus the camera and its effects on.
     *
     * @returns {Camera}
     */
    value: function camera(container) {
      var cam = new _Camera["default"](container, this._options);
      return cam;
    }
  }, {
    key: "EASING",
    get: function get() {
      return this._EASING;
    }
  }]);

  return PixiGameCamera;
}();

exports["default"] = PixiGameCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQaXhpR2FtZUNhbWVyYSIsIm9wdGlvbnMiLCJlYXNpbmciLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJjb250YWluZXIiLCJjYW0iLCJDYW1lcmEiLCJfRUFTSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxjO0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFNQSw0QkFBa0M7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FSWEMsTUFRVzs7QUFDaEMsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFZSCxPQUFaLENBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQU9BOzs7Ozs7OzJCQU9PSSxTLEVBQW1DO0FBQ3hDLFVBQU1DLEdBQVcsR0FBRyxJQUFJQyxrQkFBSixDQUFXRixTQUFYLEVBQXNCLEtBQUtGLFFBQTNCLENBQXBCO0FBRUEsYUFBT0csR0FBUDtBQUNEOzs7d0JBYmlCO0FBQUUsYUFBTyxLQUFLRSxPQUFaO0FBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnZDMtZWFzZSc7XHJcblxyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vY2FtZXJhL0NhbWVyYSc7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBBIG5vbi1vcGluaW9uZWQgaW1wbGVtZW50YXRpb24gZm9yIGFkZGluZyBjYW1lcmFzIHRvIHlvdXIgUElYSSBhcHBsaWNhdGlvbiB2aWEgY29udGFpbmVycy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGlHYW1lQ2FtZXJhIHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBwYXNzZWQgb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVhc2luZyBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Kn1cclxuICAgKi9cclxuICBwcml2YXRlIF9FQVNJTkc6IGFueSA9IGVhc2luZztcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7UElYSS5TcHJpdGV9IFtvcHRpb25zLnNwcml0ZV0gQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgc3ByaXRlIG9iamVjdCB1c2VkIGZvciBzb21lIGVmZmVjdHMgc3VjaCBhcyBmYWRlLlxcXHJcbiAgICogQHBhcmFtIHtQSVhJLlRleHR1cmV9IFtvcHRpb25zLnRleHR1cmVdIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJLlRleHR1cmUgb2JqZWN0LiBUaGlzIGlzIHVzZWQgYWxvbmcgd2l0aCB0aGUgUElYSS5TcHJpdGUgb3B0aW9uIHRvIHNldCB0ZXh0dXJlcyBmb3Igc29tZSBvZiB0aGUgZWZmZWN0cy5cclxuICAgKiBAcGFyYW0ge1BJWEkuVGlja2VyfSBbb3B0aW9ucy50aWNrZXJdIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIHRpY2tlciBpZiBpdCdzIGJlaW5nIHVzZWQuIElmIHRoZSBQSVhJIHRpY2tlciBpcyBub3QgdXNlZCB0aGVuIHVwZGF0ZXMgd2lsbCBoYXZlIHRvIGJlIGNhbGxlZCBtYW51YWxseS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QgPSB7fSkge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZWFzaW5nIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBzZWxlY3RlZCBmcm9tLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xyXG4gIGdldCBFQVNJTkcoKTogYW55IHsgcmV0dXJuIHRoaXMuX0VBU0lORzsgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGNhbWVyYSB0aGF0IGlzIGZvY3VzZWQgb24gYSBjb250YWluZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BJWEkuQ2FtZXJhfSBjb250YWluZXIgVGhlIGNvbnRhaW5lciB0byBmb2N1cyB0aGUgY2FtZXJhIGFuZCBpdHMgZWZmZWN0cyBvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtDYW1lcmF9XHJcbiAgICovXHJcbiAgY2FtZXJhKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIpOiBDYW1lcmEge1xyXG4gICAgY29uc3QgY2FtOiBDYW1lcmEgPSBuZXcgQ2FtZXJhKGNvbnRhaW5lciwgdGhpcy5fb3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIGNhbTtcclxuICB9XHJcbn1cclxuIl19