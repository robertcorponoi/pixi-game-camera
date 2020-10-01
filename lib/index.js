'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var easing = _interopRequireWildcard(require("d3-ease"));

var _Camera = _interopRequireDefault(require("./Camera"));

var _Options = _interopRequireDefault(require("./Options"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQaXhpR2FtZUNhbWVyYSIsIm9wdGlvbnMiLCJlYXNpbmciLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJjb250YWluZXIiLCJjYW0iLCJDYW1lcmEiLCJfRUFTSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBR0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxjO0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFNQSw0QkFBa0M7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FSWEMsTUFRVzs7QUFDaEMsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFZSCxPQUFaLENBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQU9BOzs7Ozs7OzJCQU9PSSxTLEVBQW1DO0FBQ3hDLFVBQU1DLEdBQUcsR0FBRyxJQUFJQyxrQkFBSixDQUFXRixTQUFYLEVBQXNCLEtBQUtGLFFBQTNCLENBQVo7QUFDQSxhQUFPRyxHQUFQO0FBQ0Q7Ozt3QkFaaUI7QUFBRSxhQUFPLEtBQUtFLE9BQVo7QUFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCAqIGFzIGVhc2luZyBmcm9tICdkMy1lYXNlJztcclxuXHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgbm9uLW9waW5pb25lZCBpbXBsZW1lbnRhdGlvbiBmb3IgYWRkaW5nIGNhbWVyYXMgdG8geW91ciBQSVhJIGFwcGxpY2F0aW9uIHZpYSBjb250YWluZXJzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGl4aUdhbWVDYW1lcmEge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIHBhc3NlZCBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7T3B0aW9uc31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWFzaW5nIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHsqfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX0VBU0lORzogYW55ID0gZWFzaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAgICogQHBhcmFtIHtQSVhJLlNwcml0ZX0gW29wdGlvbnMuc3ByaXRlXSBBIHJlZmVyZW5jZSB0byB0aGUgUElYSSBzcHJpdGUgb2JqZWN0IHVzZWQgZm9yIHNvbWUgZWZmZWN0cyBzdWNoIGFzIGZhZGUuXFxcclxuICAgKiBAcGFyYW0ge1BJWEkuVGV4dHVyZX0gW29wdGlvbnMudGV4dHVyZV0gQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkuVGV4dHVyZSBvYmplY3QuIFRoaXMgaXMgdXNlZCBhbG9uZyB3aXRoIHRoZSBQSVhJLlNwcml0ZSBvcHRpb24gdG8gc2V0IHRleHR1cmVzIGZvciBzb21lIG9mIHRoZSBlZmZlY3RzLlxyXG4gICAqIEBwYXJhbSB7UElYSS5UaWNrZXJ9IFtvcHRpb25zLnRpY2tlcl0gQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgdGlja2VyIGlmIGl0J3MgYmVpbmcgdXNlZC4gSWYgdGhlIFBJWEkgdGlja2VyIGlzIG5vdCB1c2VkIHRoZW4gdXBkYXRlcyB3aWxsIGhhdmUgdG8gYmUgY2FsbGVkIG1hbnVhbGx5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCA9IHt9KSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBlYXNpbmcgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHNlbGVjdGVkIGZyb20uXHJcbiAgICogXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgZ2V0IEVBU0lORygpOiBhbnkgeyByZXR1cm4gdGhpcy5fRUFTSU5HOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgY2FtZXJhIHRoYXQgaXMgZm9jdXNlZCBvbiBhIGNvbnRhaW5lci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UElYSS5DYW1lcmF9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIHRvIGZvY3VzIHRoZSBjYW1lcmEgYW5kIGl0cyBlZmZlY3RzIG9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0NhbWVyYX1cclxuICAgKi9cclxuICBjYW1lcmEoY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcik6IENhbWVyYSB7XHJcbiAgICBjb25zdCBjYW0gPSBuZXcgQ2FtZXJhKGNvbnRhaW5lciwgdGhpcy5fb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gY2FtO1xyXG4gIH1cclxufVxyXG4iXX0=