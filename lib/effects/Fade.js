'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fade = void 0;

var _effect = require("./effect");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
var Fade = /*#__PURE__*/function (_Effect) {
  _inherits(Fade, _Effect);

  var _super = _createSuper(Fade);

  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {Sprite}
   */

  /**
   * The color to fade to.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The opacity to set the filter to.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The easing function to use.
   * 
   * @private
   * 
   * @property {Function}
   */

  /**
   * Indicates whether its fading in or out.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default true
   */

  /**
   * The initial opacity of the filter as of the start of this effect.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * @param {Container} container A reference to the container to apply the fade effect to.
   * @param {Sprite} sprite A reference to the PIXI Sprite to use for the fade effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} [easing] The easing function to use.
   */
  function Fade(container, sprite, color, opacity, duration, easing) {
    var _this;

    _classCallCheck(this, Fade);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_filter", void 0);

    _defineProperty(_assertThisInitialized(_this), "_color", void 0);

    _defineProperty(_assertThisInitialized(_this), "_opacity", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _defineProperty(_assertThisInitialized(_this), "_fadeOut", true);

    _defineProperty(_assertThisInitialized(_this), "_initialOpacity", void 0);

    _this._color = color;
    _this._opacity = opacity;
    _this.duration = duration;
    _this._easing = easing || _this.easeLinear;
    _this._filter = sprite;
    _this._filter.width = _this.container.width;
    _this._filter.height = _this.container.height;
    _this._filter.alpha = 0;

    _this.container.addChild(_this._filter);

    _this._filter.tint = _this._color;
    _this._initialOpacity = _this._filter.alpha;
    if (_this._filter.alpha > _this._opacity) _this._fadeOut = false;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(Fade, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet()) {
        this._filter.alpha = this._opacity;
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = (this.current - this.started) / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var fadeAmount = 1 * percentageThroughAnimation;
      this._filter.alpha = this._fadeOut ? fadeAmount : this._initialOpacity - fadeAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the fade effect is done or not.
     * 
     * @returns {boolean} Returns true if the fade effect is done or not.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this._fadeOut && this._filter.alpha >= this._opacity - 0.01 || !this._fadeOut && this._filter.alpha <= this._opacity + 0.01) return true;
      return false;
    }
  }]);

  return Fade;
}(_effect.Effect);

exports.Fade = Fade;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL2ZhZGUudHMiXSwibmFtZXMiOlsiRmFkZSIsImNvbnRhaW5lciIsInNwcml0ZSIsImNvbG9yIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2NvbG9yIiwiX29wYWNpdHkiLCJfZWFzaW5nIiwiZWFzZUxpbmVhciIsIl9maWx0ZXIiLCJ3aWR0aCIsImhlaWdodCIsImFscGhhIiwiYWRkQ2hpbGQiLCJ0aW50IiwiX2luaXRpYWxPcGFjaXR5IiwiX2ZhZGVPdXQiLCJjcml0ZXJpYU1ldCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRGlmZlBlcmNlbnRhZ2UiLCJzdGFydGVkIiwicGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24iLCJmYWRlQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ2FBLEk7Ozs7O0FBQ1g7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsZ0JBQVlDLFNBQVosRUFBa0NDLE1BQWxDLEVBQWtEQyxLQUFsRCxFQUFpRUMsT0FBakUsRUFBa0ZDLFFBQWxGLEVBQW9HQyxNQUFwRyxFQUF1SDtBQUFBOztBQUFBOztBQUNySCw4QkFBTUwsU0FBTjs7QUFEcUg7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsK0RBbEJwRyxJQWtCb0c7O0FBQUE7O0FBR3JILFVBQUtNLE1BQUwsR0FBY0osS0FBZDtBQUNBLFVBQUtLLFFBQUwsR0FBZ0JKLE9BQWhCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLSSxPQUFMLEdBQWVILE1BQU0sSUFBSSxNQUFLSSxVQUE5QjtBQUVBLFVBQUtDLE9BQUwsR0FBZVQsTUFBZjtBQUVBLFVBQUtTLE9BQUwsQ0FBYUMsS0FBYixHQUFxQixNQUFLWCxTQUFMLENBQWVXLEtBQXBDO0FBQ0EsVUFBS0QsT0FBTCxDQUFhRSxNQUFiLEdBQXNCLE1BQUtaLFNBQUwsQ0FBZVksTUFBckM7QUFDQSxVQUFLRixPQUFMLENBQWFHLEtBQWIsR0FBcUIsQ0FBckI7O0FBRUEsVUFBS2IsU0FBTCxDQUFlYyxRQUFmLENBQXdCLE1BQUtKLE9BQTdCOztBQUVBLFVBQUtBLE9BQUwsQ0FBYUssSUFBYixHQUFvQixNQUFLVCxNQUF6QjtBQUNBLFVBQUtVLGVBQUwsR0FBdUIsTUFBS04sT0FBTCxDQUFhRyxLQUFwQztBQUVBLFFBQUksTUFBS0gsT0FBTCxDQUFhRyxLQUFiLEdBQXFCLE1BQUtOLFFBQTlCLEVBQXdDLE1BQUtVLFFBQUwsR0FBZ0IsS0FBaEI7QUFuQjZFO0FBb0J0SDtBQUVEO0FBQ0Y7QUFDQTs7Ozs7V0FDRSxrQkFBUztBQUFBOztBQUNQLFVBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3RCLGFBQUtSLE9BQUwsQ0FBYUcsS0FBYixHQUFxQixLQUFLTixRQUExQjtBQUNBLGFBQUtZLFFBQUwsQ0FBY0MsUUFBZDtBQUVBO0FBQ0Q7O0FBRUQsV0FBS0MsT0FBTCxHQUFlQyxXQUFXLENBQUNDLEdBQVosRUFBZjtBQUVBLFVBQU1DLGtCQUFrQixHQUFHLENBQUMsS0FBS0gsT0FBTCxHQUFlLEtBQUtJLE9BQXJCLElBQWdDLEtBQUtyQixRQUFoRTs7QUFDQSxVQUFNc0IsMEJBQTBCLEdBQUcsS0FBS2xCLE9BQUwsQ0FBYWdCLGtCQUFiLENBQW5DOztBQUVBLFVBQU1HLFVBQVUsR0FBRyxJQUFJRCwwQkFBdkI7QUFDQSxXQUFLaEIsT0FBTCxDQUFhRyxLQUFiLEdBQXFCLEtBQUtJLFFBQUwsR0FBZ0JVLFVBQWhCLEdBQTZCLEtBQUtYLGVBQUwsR0FBdUJXLFVBQXpFO0FBRUEsVUFBSSxLQUFLQyxNQUFULEVBQWlCLEtBQUtDLEVBQUwsR0FBVUMscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsT0FBRCxDQUEvQjtBQUNsQjtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSx1QkFBdUI7QUFDckIsVUFBSyxLQUFLZCxRQUFMLElBQWlCLEtBQUtQLE9BQUwsQ0FBYUcsS0FBYixJQUFzQixLQUFLTixRQUFMLEdBQWdCLElBQXhELElBQWtFLENBQUMsS0FBS1UsUUFBTixJQUFrQixLQUFLUCxPQUFMLENBQWFHLEtBQWIsSUFBc0IsS0FBS04sUUFBTCxHQUFnQixJQUE5SCxFQUFxSSxPQUFPLElBQVA7QUFDckksYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFwSHVCeUIsYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnQHBpeGkvc3ByaXRlJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHBpeGkvZGlzcGxheSc7XHJcblxyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tICcuL2VmZmVjdCc7XHJcblxyXG4vKipcclxuICogQSBwYW5uaW5nIGVmZmVjdCB0aGF0IG1ha2VzIHRoZSBjYW1lcmEgZm9jdXMgb24gYSBwb2ludCBpbiB0aGUgY29udGFpbmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZhZGUgZXh0ZW5kcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW1lcmEncyBmaWx0ZXIuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1Nwcml0ZX1cclxuICAgKi9cclxuICBwcml2YXRlIF9maWx0ZXI6IFNwcml0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIHRvIGZhZGUgdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jb2xvcjogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgb3BhY2l0eSB0byBzZXQgdGhlIGZpbHRlciB0by5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wYWNpdHk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGVhc2luZyBmdW5jdGlvbiB0byB1c2UuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Vhc2luZzogRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGl0cyBmYWRpbmcgaW4gb3Igb3V0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBwcml2YXRlIF9mYWRlT3V0ID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgb3BhY2l0eSBvZiB0aGUgZmlsdGVyIGFzIG9mIHRoZSBzdGFydCBvZiB0aGlzIGVmZmVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2luaXRpYWxPcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgZmFkZSBlZmZlY3QgdG8uXHJcbiAgICogQHBhcmFtIHtTcHJpdGV9IHNwcml0ZSBBIHJlZmVyZW5jZSB0byB0aGUgUElYSSBTcHJpdGUgdG8gdXNlIGZvciB0aGUgZmFkZSBlZmZlY3QuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbG9yIFRoZSBoZXggb2YgdGhlIGNvbG9yIHRvIGZhZGUgdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vhc2luZ10gVGhlIGVhc2luZyBmdW5jdGlvbiB0byB1c2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHNwcml0ZTogU3ByaXRlLCBjb2xvcjogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZz86IEZ1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLl9vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2Vhc2luZyA9IGVhc2luZyB8fCB0aGlzLmVhc2VMaW5lYXI7XHJcblxyXG4gICAgdGhpcy5fZmlsdGVyID0gc3ByaXRlO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlci53aWR0aCA9IHRoaXMuY29udGFpbmVyLndpZHRoO1xyXG4gICAgdGhpcy5fZmlsdGVyLmhlaWdodCA9IHRoaXMuY29udGFpbmVyLmhlaWdodDtcclxuICAgIHRoaXMuX2ZpbHRlci5hbHBoYSA9IDA7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fZmlsdGVyKTtcclxuXHJcbiAgICB0aGlzLl9maWx0ZXIudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5faW5pdGlhbE9wYWNpdHkgPSB0aGlzLl9maWx0ZXIuYWxwaGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpbHRlci5hbHBoYSA+IHRoaXMuX29wYWNpdHkpIHRoaXMuX2ZhZGVPdXQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5fZmlsdGVyLmFscGhhID0gdGhpcy5fb3BhY2l0eTtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZSA9ICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQpIC8gdGhpcy5kdXJhdGlvbjtcclxuICAgIGNvbnN0IHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uID0gdGhpcy5fZWFzaW5nKHRpbWVEaWZmUGVyY2VudGFnZSk7XHJcblxyXG4gICAgY29uc3QgZmFkZUFtb3VudCA9IDEgKiBwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbjtcclxuICAgIHRoaXMuX2ZpbHRlci5hbHBoYSA9IHRoaXMuX2ZhZGVPdXQgPyBmYWRlQW1vdW50IDogdGhpcy5faW5pdGlhbE9wYWNpdHkgLSBmYWRlQW1vdW50O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGZhZGUgZWZmZWN0IGlzIGRvbmUgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGZhZGUgZWZmZWN0IGlzIGRvbmUgb3Igbm90LlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhTWV0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCh0aGlzLl9mYWRlT3V0ICYmIHRoaXMuX2ZpbHRlci5hbHBoYSA+PSB0aGlzLl9vcGFjaXR5IC0gMC4wMSkgfHwgKCF0aGlzLl9mYWRlT3V0ICYmIHRoaXMuX2ZpbHRlci5hbHBoYSA8PSB0aGlzLl9vcGFjaXR5ICsgMC4wMSkpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==