'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Effect2 = _interopRequireDefault(require("./Effect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var PanTo = /*#__PURE__*/function (_Effect) {
  _inherits(PanTo, _Effect);

  var _super = _createSuper(PanTo);

  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
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
   * @param {PIXI.Container} container A reference to the container to apply the fade effect to.
   * @param {PIXI.Sprite} filter A reference to the camera filter used to apply this effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function to use.
   */
  function PanTo(container, filter, color, duration, opacity, easing) {
    var _this;

    _classCallCheck(this, PanTo);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_filter", void 0);

    _defineProperty(_assertThisInitialized(_this), "_color", void 0);

    _defineProperty(_assertThisInitialized(_this), "_opacity", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _defineProperty(_assertThisInitialized(_this), "_fadeOut", true);

    _defineProperty(_assertThisInitialized(_this), "_initialOpacity", void 0);

    _this._filter = filter;
    _this._color = color;
    _this.duration = duration;
    _this._opacity = opacity;
    _this._easing = easing;
    _this._filter.tint = _this._color;
    _this._initialOpacity = _this._filter.alpha;
    if (_this._filter.alpha > _this._opacity) _this._fadeOut = false;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(PanTo, [{
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

  return PanTo;
}(_Effect2["default"]);

exports["default"] = PanTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL0ZhZGUudHMiXSwibmFtZXMiOlsiUGFuVG8iLCJjb250YWluZXIiLCJmaWx0ZXIiLCJjb2xvciIsImR1cmF0aW9uIiwib3BhY2l0eSIsImVhc2luZyIsIl9maWx0ZXIiLCJfY29sb3IiLCJfb3BhY2l0eSIsIl9lYXNpbmciLCJ0aW50IiwiX2luaXRpYWxPcGFjaXR5IiwiYWxwaGEiLCJfZmFkZU91dCIsImNyaXRlcmlhTWV0IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbiIsImZhZGVBbW91bnQiLCJ1c2VSQUYiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLEs7Ozs7O0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFPQSxpQkFBWUMsU0FBWixFQUF1Q0MsTUFBdkMsRUFBNERDLEtBQTVELEVBQTJFQyxRQUEzRSxFQUE2RkMsT0FBN0YsRUFBOEdDLE1BQTlHLEVBQWdJO0FBQUE7O0FBQUE7O0FBQzlILDhCQUFNTCxTQUFOOztBQUQ4SDs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwrREFsQjdHLElBa0I2Rzs7QUFBQTs7QUFHOUgsVUFBS00sT0FBTCxHQUFlTCxNQUFmO0FBQ0EsVUFBS00sTUFBTCxHQUFjTCxLQUFkO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLSyxRQUFMLEdBQWdCSixPQUFoQjtBQUNBLFVBQUtLLE9BQUwsR0FBZUosTUFBZjtBQUNBLFVBQUtDLE9BQUwsQ0FBYUksSUFBYixHQUFvQixNQUFLSCxNQUF6QjtBQUNBLFVBQUtJLGVBQUwsR0FBdUIsTUFBS0wsT0FBTCxDQUFhTSxLQUFwQztBQUVBLFFBQUksTUFBS04sT0FBTCxDQUFhTSxLQUFiLEdBQXFCLE1BQUtKLFFBQTlCLEVBQXdDLE1BQUtLLFFBQUwsR0FBZ0IsS0FBaEI7QUFYc0Y7QUFZL0g7QUFFRDs7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLFVBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3RCLGFBQUtSLE9BQUwsQ0FBYU0sS0FBYixHQUFxQixLQUFLSixRQUExQjtBQUNBLGFBQUtPLFFBQUwsQ0FBY0MsUUFBZDtBQUVBO0FBQ0Q7O0FBRUQsV0FBS0MsT0FBTCxHQUFlQyxXQUFXLENBQUNDLEdBQVosRUFBZjtBQUVBLFVBQU1DLGtCQUFrQixHQUFHLENBQUMsS0FBS0gsT0FBTCxHQUFlLEtBQUtJLE9BQXJCLElBQWdDLEtBQUtsQixRQUFoRTs7QUFDQSxVQUFNbUIsMEJBQTBCLEdBQUcsS0FBS2IsT0FBTCxDQUFhVyxrQkFBYixDQUFuQzs7QUFFQSxVQUFNRyxVQUFVLEdBQUcsSUFBSUQsMEJBQXZCO0FBQ0EsV0FBS2hCLE9BQUwsQ0FBYU0sS0FBYixHQUFxQixLQUFLQyxRQUFMLEdBQWdCVSxVQUFoQixHQUE2QixLQUFLWixlQUFMLEdBQXVCWSxVQUF6RTtBQUVBLFVBQUksS0FBS0MsTUFBVCxFQUFpQixLQUFLQyxFQUFMLEdBQVVDLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBL0I7QUFDbEI7QUFFRDs7Ozs7Ozs7a0NBS3VCO0FBQ3JCLFVBQUssS0FBS2QsUUFBTCxJQUFpQixLQUFLUCxPQUFMLENBQWFNLEtBQWIsSUFBc0IsS0FBS0osUUFBTCxHQUFnQixJQUF4RCxJQUFrRSxDQUFDLEtBQUtLLFFBQU4sSUFBa0IsS0FBS1AsT0FBTCxDQUFhTSxLQUFiLElBQXNCLEtBQUtKLFFBQUwsR0FBZ0IsSUFBOUgsRUFBcUksT0FBTyxJQUFQO0FBQ3JJLGFBQU8sS0FBUDtBQUNEOzs7O0VBNUdnQ29CLG1CIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5cclxuaW1wb3J0IEVmZmVjdCBmcm9tICcuL0VmZmVjdCc7XHJcblxyXG4vKipcclxuICogQSBwYW5uaW5nIGVmZmVjdCB0aGF0IG1ha2VzIHRoZSBjYW1lcmEgZm9jdXMgb24gYSBwb2ludCBpbiB0aGUgY29udGFpbmVyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuVG8gZXh0ZW5kcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW1lcmEncyBmaWx0ZXIuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BJWEkuU3ByaXRlfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ZpbHRlcjogUElYSS5TcHJpdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb2xvciB0byBmYWRlIHRvLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29sb3I6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG9wYWNpdHkgdG8gc2V0IHRoZSBmaWx0ZXIgdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9vcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBwcml2YXRlIF9lYXNpbmc6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBpdHMgZmFkaW5nIGluIG9yIG91dC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmFkZU91dCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIG9wYWNpdHkgb2YgdGhlIGZpbHRlciBhcyBvZiB0aGUgc3RhcnQgb2YgdGhpcyBlZmZlY3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsT3BhY2l0eTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgZmFkZSBlZmZlY3QgdG8uXHJcbiAgICogQHBhcmFtIHtQSVhJLlNwcml0ZX0gZmlsdGVyIEEgcmVmZXJlbmNlIHRvIHRoZSBjYW1lcmEgZmlsdGVyIHVzZWQgdG8gYXBwbHkgdGhpcyBlZmZlY3QuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbG9yIFRoZSBoZXggb2YgdGhlIGNvbG9yIHRvIGZhZGUgdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzaW5nIFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIGZpbHRlcjogUElYSS5TcHJpdGUsIGNvbG9yOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciwgZWFzaW5nOiBGdW5jdGlvbikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLl9maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgdGhpcy5fb3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICB0aGlzLl9lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICB0aGlzLl9maWx0ZXIudGludCA9IHRoaXMuX2NvbG9yO1xyXG4gICAgdGhpcy5faW5pdGlhbE9wYWNpdHkgPSB0aGlzLl9maWx0ZXIuYWxwaGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpbHRlci5hbHBoYSA+IHRoaXMuX29wYWNpdHkpIHRoaXMuX2ZhZGVPdXQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5fZmlsdGVyLmFscGhhID0gdGhpcy5fb3BhY2l0eTtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZSA9ICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQpIC8gdGhpcy5kdXJhdGlvbjtcclxuICAgIGNvbnN0IHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uID0gdGhpcy5fZWFzaW5nKHRpbWVEaWZmUGVyY2VudGFnZSk7XHJcblxyXG4gICAgY29uc3QgZmFkZUFtb3VudCA9IDEgKiBwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbjtcclxuICAgIHRoaXMuX2ZpbHRlci5hbHBoYSA9IHRoaXMuX2ZhZGVPdXQgPyBmYWRlQW1vdW50IDogdGhpcy5faW5pdGlhbE9wYWNpdHkgLSBmYWRlQW1vdW50O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGZhZGUgZWZmZWN0IGlzIGRvbmUgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGZhZGUgZWZmZWN0IGlzIGRvbmUgb3Igbm90LlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhTWV0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCh0aGlzLl9mYWRlT3V0ICYmIHRoaXMuX2ZpbHRlci5hbHBoYSA+PSB0aGlzLl9vcGFjaXR5IC0gMC4wMSkgfHwgKCF0aGlzLl9mYWRlT3V0ICYmIHRoaXMuX2ZpbHRlci5hbHBoYSA8PSB0aGlzLl9vcGFjaXR5ICsgMC4wMSkpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==