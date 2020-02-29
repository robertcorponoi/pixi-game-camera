'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
var Options =
/**
 * A reference to the PIXI.Sprite object.
 * 
 * This is necessary for some effects such as fade effects.
 * 
 * @property {PIXI.Sprite}
 */

/**
 * A reference to the PIXI.Texture object.
 * 
 * This is used along with the PIXI.Sprite option to set textures for some of the effects.
 * 
 * @property {PIXI.Texture}
 */

/**
 * A reference to the PIXI ticker if it's being used.
 * 
 * If the PIXI ticker is not used then updates will have to be called manually.
 * 
 * @property {PIXI.Ticker}
 */

/**
 * @param {Object} options The optionas passed to camera-pixi on initialization.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "sprite", void 0);

  _defineProperty(this, "texture", void 0);

  _defineProperty(this, "ticker", void 0);

  Object.assign(this, options);
};

exports["default"] = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLE87QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7OztBQUdBLGlCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG4vKipcclxuICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgcGFzc2VkIHRvIGNhbWVyYS1waXhpIG9uIGluaXRpYWxpemF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkuU3ByaXRlIG9iamVjdC5cclxuICAgKiBcclxuICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3Igc29tZSBlZmZlY3RzIHN1Y2ggYXMgZmFkZSBlZmZlY3RzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7UElYSS5TcHJpdGV9XHJcbiAgICovXHJcbiAgc3ByaXRlPzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgUElYSS5UZXh0dXJlIG9iamVjdC5cclxuICAgKiBcclxuICAgKiBUaGlzIGlzIHVzZWQgYWxvbmcgd2l0aCB0aGUgUElYSS5TcHJpdGUgb3B0aW9uIHRvIHNldCB0ZXh0dXJlcyBmb3Igc29tZSBvZiB0aGUgZWZmZWN0cy5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BJWEkuVGV4dHVyZX1cclxuICAgKi9cclxuICB0ZXh0dXJlPzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgUElYSSB0aWNrZXIgaWYgaXQncyBiZWluZyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIElmIHRoZSBQSVhJIHRpY2tlciBpcyBub3QgdXNlZCB0aGVuIHVwZGF0ZXMgd2lsbCBoYXZlIHRvIGJlIGNhbGxlZCBtYW51YWxseS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BJWEkuVGlja2VyfVxyXG4gICAqL1xyXG4gIHRpY2tlcj86IFBJWEkuVGlja2VyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9uYXMgcGFzc2VkIHRvIGNhbWVyYS1waXhpIG9uIGluaXRpYWxpemF0aW9uLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcbn0iXX0=