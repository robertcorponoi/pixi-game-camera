'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fade = void 0;

var _effect = require("./effect");

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
   * @param {Function} easing The easing function to use.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL2ZhZGUudHMiXSwibmFtZXMiOlsiRmFkZSIsImNvbnRhaW5lciIsInNwcml0ZSIsImNvbG9yIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2NvbG9yIiwiX29wYWNpdHkiLCJfZWFzaW5nIiwiZWFzZUxpbmVhciIsIl9maWx0ZXIiLCJ3aWR0aCIsImhlaWdodCIsImFscGhhIiwiYWRkQ2hpbGQiLCJ0aW50IiwiX2luaXRpYWxPcGFjaXR5IiwiX2ZhZGVPdXQiLCJjcml0ZXJpYU1ldCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRGlmZlBlcmNlbnRhZ2UiLCJzdGFydGVkIiwicGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24iLCJmYWRlQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdhQSxJOzs7OztBQUNYOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7QUFPQSxnQkFBWUMsU0FBWixFQUFrQ0MsTUFBbEMsRUFBa0RDLEtBQWxELEVBQWlFQyxPQUFqRSxFQUFrRkMsUUFBbEYsRUFBb0dDLE1BQXBHLEVBQXVIO0FBQUE7O0FBQUE7O0FBQ3JILDhCQUFNTCxTQUFOOztBQURxSDs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwrREFsQnBHLElBa0JvRzs7QUFBQTs7QUFHckgsVUFBS00sTUFBTCxHQUFjSixLQUFkO0FBQ0EsVUFBS0ssUUFBTCxHQUFnQkosT0FBaEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtJLE9BQUwsR0FBZUgsTUFBTSxJQUFJLE1BQUtJLFVBQTlCO0FBRUEsVUFBS0MsT0FBTCxHQUFlVCxNQUFmO0FBRUEsVUFBS1MsT0FBTCxDQUFhQyxLQUFiLEdBQXFCLE1BQUtYLFNBQUwsQ0FBZVcsS0FBcEM7QUFDQSxVQUFLRCxPQUFMLENBQWFFLE1BQWIsR0FBc0IsTUFBS1osU0FBTCxDQUFlWSxNQUFyQztBQUNBLFVBQUtGLE9BQUwsQ0FBYUcsS0FBYixHQUFxQixDQUFyQjs7QUFFQSxVQUFLYixTQUFMLENBQWVjLFFBQWYsQ0FBd0IsTUFBS0osT0FBN0I7O0FBRUEsVUFBS0EsT0FBTCxDQUFhSyxJQUFiLEdBQW9CLE1BQUtULE1BQXpCO0FBQ0EsVUFBS1UsZUFBTCxHQUF1QixNQUFLTixPQUFMLENBQWFHLEtBQXBDO0FBRUEsUUFBSSxNQUFLSCxPQUFMLENBQWFHLEtBQWIsR0FBcUIsTUFBS04sUUFBOUIsRUFBd0MsTUFBS1UsUUFBTCxHQUFnQixLQUFoQjtBQW5CNkU7QUFvQnRIO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLUixPQUFMLENBQWFHLEtBQWIsR0FBcUIsS0FBS04sUUFBMUI7QUFDQSxhQUFLWSxRQUFMLENBQWNDLFFBQWQ7QUFFQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLckIsUUFBaEU7O0FBQ0EsVUFBTXNCLDBCQUEwQixHQUFHLEtBQUtsQixPQUFMLENBQWFnQixrQkFBYixDQUFuQzs7QUFFQSxVQUFNRyxVQUFVLEdBQUcsSUFBSUQsMEJBQXZCO0FBQ0EsV0FBS2hCLE9BQUwsQ0FBYUcsS0FBYixHQUFxQixLQUFLSSxRQUFMLEdBQWdCVSxVQUFoQixHQUE2QixLQUFLWCxlQUFMLEdBQXVCVyxVQUF6RTtBQUVBLFVBQUksS0FBS0MsTUFBVCxFQUFpQixLQUFLQyxFQUFMLEdBQVVDLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBL0I7QUFDbEI7QUFFRDs7Ozs7Ozs7a0NBS3VCO0FBQ3JCLFVBQUssS0FBS2QsUUFBTCxJQUFpQixLQUFLUCxPQUFMLENBQWFHLEtBQWIsSUFBc0IsS0FBS04sUUFBTCxHQUFnQixJQUF4RCxJQUFrRSxDQUFDLEtBQUtVLFFBQU4sSUFBa0IsS0FBS1AsT0FBTCxDQUFhRyxLQUFiLElBQXNCLEtBQUtOLFFBQUwsR0FBZ0IsSUFBOUgsRUFBcUksT0FBTyxJQUFQO0FBQ3JJLGFBQU8sS0FBUDtBQUNEOzs7O0VBcEh1QnlCLGMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJ0BwaXhpL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BwaXhpL2Rpc3BsYXknO1xyXG5cclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSAnLi9lZmZlY3QnO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFubmluZyBlZmZlY3QgdGhhdCBtYWtlcyB0aGUgY2FtZXJhIGZvY3VzIG9uIGEgcG9pbnQgaW4gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGYWRlIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2FtZXJhJ3MgZmlsdGVyLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtTcHJpdGV9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmlsdGVyOiBTcHJpdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb2xvciB0byBmYWRlIHRvLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29sb3I6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG9wYWNpdHkgdG8gc2V0IHRoZSBmaWx0ZXIgdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9vcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBwcml2YXRlIF9lYXNpbmc6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBpdHMgZmFkaW5nIGluIG9yIG91dC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmFkZU91dCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIG9wYWNpdHkgb2YgdGhlIGZpbHRlciBhcyBvZiB0aGUgc3RhcnQgb2YgdGhpcyBlZmZlY3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsT3BhY2l0eTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NvbnRhaW5lcn0gY29udGFpbmVyIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgdG8gYXBwbHkgdGhlIGZhZGUgZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7U3ByaXRlfSBzcHJpdGUgQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgU3ByaXRlIHRvIHVzZSBmb3IgdGhlIGZhZGUgZWZmZWN0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xvciBUaGUgaGV4IG9mIHRoZSBjb2xvciB0byBmYWRlIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVhc2luZyBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHVzZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lciwgc3ByaXRlOiBTcHJpdGUsIGNvbG9yOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWFzaW5nPzogRnVuY3Rpb24pIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuX29wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgdGhpcy5fZWFzaW5nID0gZWFzaW5nIHx8IHRoaXMuZWFzZUxpbmVhcjtcclxuXHJcbiAgICB0aGlzLl9maWx0ZXIgPSBzcHJpdGU7XHJcblxyXG4gICAgdGhpcy5fZmlsdGVyLndpZHRoID0gdGhpcy5jb250YWluZXIud2lkdGg7XHJcbiAgICB0aGlzLl9maWx0ZXIuaGVpZ2h0ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0O1xyXG4gICAgdGhpcy5fZmlsdGVyLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLl9maWx0ZXIpO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlci50aW50ID0gdGhpcy5fY29sb3I7XHJcbiAgICB0aGlzLl9pbml0aWFsT3BhY2l0eSA9IHRoaXMuX2ZpbHRlci5hbHBoYTtcclxuXHJcbiAgICBpZiAodGhpcy5fZmlsdGVyLmFscGhhID4gdGhpcy5fb3BhY2l0eSkgdGhpcy5fZmFkZU91dCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHRoaXMgZWZmZWN0IG9uIGEgZnJhbWUgYnkgZnJhbWUgYmFzaXMuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JpdGVyaWFNZXQoKSkge1xyXG4gICAgICB0aGlzLl9maWx0ZXIuYWxwaGEgPSB0aGlzLl9vcGFjaXR5O1xyXG4gICAgICB0aGlzLmZpbmlzaGVkLmRpc3BhdGNoKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24gPSB0aGlzLl9lYXNpbmcodGltZURpZmZQZXJjZW50YWdlKTtcclxuXHJcbiAgICBjb25zdCBmYWRlQW1vdW50ID0gMSAqIHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uO1xyXG4gICAgdGhpcy5fZmlsdGVyLmFscGhhID0gdGhpcy5fZmFkZU91dCA/IGZhZGVBbW91bnQgOiB0aGlzLl9pbml0aWFsT3BhY2l0eSAtIGZhZGVBbW91bnQ7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUkFGKSB0aGlzLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgZmFkZSBlZmZlY3QgaXMgZG9uZSBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZmFkZSBlZmZlY3QgaXMgZG9uZSBvciBub3QuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHRoaXMuX2ZhZGVPdXQgJiYgdGhpcy5fZmlsdGVyLmFscGhhID49IHRoaXMuX29wYWNpdHkgLSAwLjAxKSB8fCAoIXRoaXMuX2ZhZGVPdXQgJiYgdGhpcy5fZmlsdGVyLmFscGhhIDw9IHRoaXMuX29wYWNpdHkgKyAwLjAxKSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59Il19