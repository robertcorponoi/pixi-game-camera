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
 * A zooming effect that involves the camera zooming in to a particular point on the container.
 */
var ZoomTo = /*#__PURE__*/function (_Effect) {
  _inherits(ZoomTo, _Effect);

  var _super = _createSuper(ZoomTo);

  /**
   * The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   */

  /**
   * A reference to the initial zoom level.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * Indicates whether the desired x zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * Indicates whether the desired y zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the zoomto effect to.
   * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  function ZoomTo(container, xZoomLevel, yZoomLevel, duration, easing) {
    var _this;

    _classCallCheck(this, ZoomTo);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_desiredZoomLevel", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialZoomLevel", void 0);

    _defineProperty(_assertThisInitialized(_this), "_xIsGreater", false);

    _defineProperty(_assertThisInitialized(_this), "_yIsGreater", false);

    _this._desiredZoomLevel = {
      x: xZoomLevel,
      y: yZoomLevel
    };
    _this.duration = duration;
    _this._easing = easing;
    _this._initialZoomLevel = {
      x: _this.container.scale.x,
      y: _this.container.scale.y
    };
    if (_this._desiredZoomLevel.x > _this._initialZoomLevel.x) _this._xIsGreater = true;
    if (_this._desiredZoomLevel.y > _this._initialZoomLevel.y) _this._yIsGreater = true;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(ZoomTo, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet() || this.current > this.duration) {
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = (this.current - this.started) / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var xZoomAmount = this._desiredZoomLevel.x * percentageThroughAnimation;
      var yZoomAmount = this._desiredZoomLevel.y * percentageThroughAnimation;
      this.container.scale.x = this._xIsGreater ? this._initialZoomLevel.x + xZoomAmount / 2 : this._initialZoomLevel.x - xZoomAmount;
      this.container.scale.y = this._yIsGreater ? this._initialZoomLevel.y + yZoomAmount / 2 : this._initialZoomLevel.y - yZoomAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the container's current zoom level is very close to the desired zoom level.
     * 
     * We can't use container zoom == desired zoom because with the game loop we might miss that exact moment so we check a very small window.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the zoom criteria is met or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.scale.x > this._desiredZoomLevel.x - 0.01 && this.container.scale.x < this._desiredZoomLevel.x + 0.01 && this.container.scale.y > this._desiredZoomLevel.y - 0.01 && this.container.scale.y < this._desiredZoomLevel.y + 0.01) return true;
      return false;
    }
  }]);

  return ZoomTo;
}(_Effect2["default"]);

exports["default"] = ZoomTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1pvb21Uby50cyJdLCJuYW1lcyI6WyJab29tVG8iLCJjb250YWluZXIiLCJ4Wm9vbUxldmVsIiwieVpvb21MZXZlbCIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2Rlc2lyZWRab29tTGV2ZWwiLCJ4IiwieSIsIl9lYXNpbmciLCJfaW5pdGlhbFpvb21MZXZlbCIsInNjYWxlIiwiX3hJc0dyZWF0ZXIiLCJfeUlzR3JlYXRlciIsImNyaXRlcmlhTWV0IiwiY3VycmVudCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbiIsInhab29tQW1vdW50IiwieVpvb21BbW91bnQiLCJ1c2VSQUYiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHcUJBLE07Ozs7O0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7O0FBT0Esa0JBQVlDLFNBQVosRUFBdUNDLFVBQXZDLEVBQTJEQyxVQUEzRCxFQUErRUMsUUFBL0UsRUFBaUdDLE1BQWpHLEVBQW1IO0FBQUE7O0FBQUE7O0FBQ2pILDhCQUFNSixTQUFOOztBQURpSDs7QUFBQTs7QUFBQTs7QUFBQSxrRUFsQjdGLEtBa0I2Rjs7QUFBQSxrRUFUN0YsS0FTNkY7O0FBR2pILFVBQUtLLGlCQUFMLEdBQXlCO0FBQUVDLE1BQUFBLENBQUMsRUFBRUwsVUFBTDtBQUFpQk0sTUFBQUEsQ0FBQyxFQUFFTDtBQUFwQixLQUF6QjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0ssT0FBTCxHQUFlSixNQUFmO0FBRUEsVUFBS0ssaUJBQUwsR0FBeUI7QUFBRUgsTUFBQUEsQ0FBQyxFQUFFLE1BQUtOLFNBQUwsQ0FBZVUsS0FBZixDQUFxQkosQ0FBMUI7QUFBNkJDLE1BQUFBLENBQUMsRUFBRSxNQUFLUCxTQUFMLENBQWVVLEtBQWYsQ0FBcUJIO0FBQXJELEtBQXpCO0FBRUEsUUFBSSxNQUFLRixpQkFBTCxDQUF1QkMsQ0FBdkIsR0FBMkIsTUFBS0csaUJBQUwsQ0FBdUJILENBQXRELEVBQXlELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFDekQsUUFBSSxNQUFLTixpQkFBTCxDQUF1QkUsQ0FBdkIsR0FBMkIsTUFBS0UsaUJBQUwsQ0FBdUJGLENBQXRELEVBQXlELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFWd0Q7QUFXbEg7QUFFRDs7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLFVBQUksS0FBS0MsV0FBTCxNQUFzQixLQUFLQyxPQUFMLEdBQWUsS0FBS1gsUUFBOUMsRUFBd0Q7QUFDdEQsYUFBS1ksUUFBTCxDQUFjQyxRQUFkO0FBQ0E7QUFDRDs7QUFFRCxXQUFLRixPQUFMLEdBQWVHLFdBQVcsQ0FBQ0MsR0FBWixFQUFmO0FBRUEsVUFBTUMsa0JBQTBCLEdBQUcsQ0FBQyxLQUFLTCxPQUFMLEdBQWUsS0FBS00sT0FBckIsSUFBZ0MsS0FBS2pCLFFBQXhFOztBQUNBLFVBQU1rQiwwQkFBa0MsR0FBRyxLQUFLYixPQUFMLENBQWFXLGtCQUFiLENBQTNDOztBQUVBLFVBQU1HLFdBQW1CLEdBQUcsS0FBS2pCLGlCQUFMLENBQXVCQyxDQUF2QixHQUEyQmUsMEJBQXZEO0FBQ0EsVUFBTUUsV0FBbUIsR0FBRyxLQUFLbEIsaUJBQUwsQ0FBdUJFLENBQXZCLEdBQTJCYywwQkFBdkQ7QUFFQSxXQUFLckIsU0FBTCxDQUFlVSxLQUFmLENBQXFCSixDQUFyQixHQUF5QixLQUFLSyxXQUFMLEdBQW1CLEtBQUtGLGlCQUFMLENBQXVCSCxDQUF2QixHQUEyQmdCLFdBQVcsR0FBRyxDQUE1RCxHQUFnRSxLQUFLYixpQkFBTCxDQUF1QkgsQ0FBdkIsR0FBMkJnQixXQUFwSDtBQUNBLFdBQUt0QixTQUFMLENBQWVVLEtBQWYsQ0FBcUJILENBQXJCLEdBQXlCLEtBQUtLLFdBQUwsR0FBbUIsS0FBS0gsaUJBQUwsQ0FBdUJGLENBQXZCLEdBQTJCZ0IsV0FBVyxHQUFHLENBQTVELEdBQWdFLEtBQUtkLGlCQUFMLENBQXVCRixDQUF2QixHQUEyQmdCLFdBQXBIO0FBRUEsVUFBSSxLQUFLQyxNQUFULEVBQWlCLEtBQUtDLEVBQUwsR0FBVUMscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsT0FBRCxDQUEvQjtBQUNsQjtBQUVEOzs7Ozs7Ozs7Ozs7a0NBU3VCO0FBQ3JCLFVBQ0csS0FBSzNCLFNBQUwsQ0FBZVUsS0FBZixDQUFxQkosQ0FBckIsR0FBeUIsS0FBS0QsaUJBQUwsQ0FBdUJDLENBQXZCLEdBQTJCLElBQXBELElBQTRELEtBQUtOLFNBQUwsQ0FBZVUsS0FBZixDQUFxQkosQ0FBckIsR0FBeUIsS0FBS0QsaUJBQUwsQ0FBdUJDLENBQXZCLEdBQTJCLElBQWpILElBQ0MsS0FBS04sU0FBTCxDQUFlVSxLQUFmLENBQXFCSCxDQUFyQixHQUF5QixLQUFLRixpQkFBTCxDQUF1QkUsQ0FBdkIsR0FBMkIsSUFBcEQsSUFBNEQsS0FBS1AsU0FBTCxDQUFlVSxLQUFmLENBQXFCSCxDQUFyQixHQUF5QixLQUFLRixpQkFBTCxDQUF1QkUsQ0FBdkIsR0FBMkIsSUFGbkgsRUFHRSxPQUFPLElBQVA7QUFFRixhQUFPLEtBQVA7QUFDRDs7OztFQXpHaUNxQixtQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuXHJcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9FZmZlY3QnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XHJcblxyXG4vKipcclxuICogQSB6b29taW5nIGVmZmVjdCB0aGF0IGludm9sdmVzIHRoZSBjYW1lcmEgem9vbWluZyBpbiB0byBhIHBhcnRpY3VsYXIgcG9pbnQgb24gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21UbyBleHRlbmRzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHpvb20gbGV2ZWwgdG8gem9vbSB0byB3aXRoIHZhbHVlcyBsYXJnZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBpbiBhbmQgdmFsdWVzIHNtYWxsZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBvdXQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9kZXNpcmVkWm9vbUxldmVsOiBWZWN0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlIGZvciB0aGlzIGVmZmVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWFzaW5nOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGluaXRpYWwgem9vbSBsZXZlbC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2luaXRpYWxab29tTGV2ZWw6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlc2lyZWQgeCB6b29tIGxldmVsIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB6b29tIGxldmVsIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBwcml2YXRlIF94SXNHcmVhdGVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXNpcmVkIHkgem9vbSBsZXZlbCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgem9vbSBsZXZlbCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeUlzR3JlYXRlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgem9vbXRvIGVmZmVjdCB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geFpvb21MZXZlbCBUaGUgem9vbSBsZXZlbCB0byB6b29tIGhvcml6b250YWxseSB3aXRoIHZhbHVlcyBsYXJnZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBpbiBhbmQgdmFsdWVzIHNtYWxsZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBvdXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlab29tTGV2ZWwgVGhlIHpvb20gbGV2ZWwgdG8gem9vbSB2ZXJ0aWNhbGx5IHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYXNpbmcgVGhlIGVhc2luZyBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIHhab29tTGV2ZWw6IG51bWJlciwgeVpvb21MZXZlbDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc6IEZ1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwgPSB7IHg6IHhab29tTGV2ZWwsIHk6IHlab29tTGV2ZWwgfTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2Vhc2luZyA9IGVhc2luZztcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsWm9vbUxldmVsID0geyB4OiB0aGlzLmNvbnRhaW5lci5zY2FsZS54LCB5OiB0aGlzLmNvbnRhaW5lci5zY2FsZS55IH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueCA+IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueCkgdGhpcy5feElzR3JlYXRlciA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5fZGVzaXJlZFpvb21MZXZlbC55ID4gdGhpcy5faW5pdGlhbFpvb21MZXZlbC55KSB0aGlzLl95SXNHcmVhdGVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkgfHwgdGhpcy5jdXJyZW50ID4gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmZpbmlzaGVkLmRpc3BhdGNoKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCB0aW1lRGlmZlBlcmNlbnRhZ2U6IG51bWJlciA9ICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQpIC8gdGhpcy5kdXJhdGlvbjtcclxuICAgIGNvbnN0IHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uOiBudW1iZXIgPSB0aGlzLl9lYXNpbmcodGltZURpZmZQZXJjZW50YWdlKTtcclxuXHJcbiAgICBjb25zdCB4Wm9vbUFtb3VudDogbnVtYmVyID0gdGhpcy5fZGVzaXJlZFpvb21MZXZlbC54ICogcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb247XHJcbiAgICBjb25zdCB5Wm9vbUFtb3VudDogbnVtYmVyID0gdGhpcy5fZGVzaXJlZFpvb21MZXZlbC55ICogcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb247XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuc2NhbGUueCA9IHRoaXMuX3hJc0dyZWF0ZXIgPyB0aGlzLl9pbml0aWFsWm9vbUxldmVsLnggKyB4Wm9vbUFtb3VudCAvIDIgOiB0aGlzLl9pbml0aWFsWm9vbUxldmVsLnggLSB4Wm9vbUFtb3VudDtcclxuICAgIHRoaXMuY29udGFpbmVyLnNjYWxlLnkgPSB0aGlzLl95SXNHcmVhdGVyID8gdGhpcy5faW5pdGlhbFpvb21MZXZlbC55ICsgeVpvb21BbW91bnQgLyAyIDogdGhpcy5faW5pdGlhbFpvb21MZXZlbC55IC0geVpvb21BbW91bnQ7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUkFGKSB0aGlzLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgY29udGFpbmVyJ3MgY3VycmVudCB6b29tIGxldmVsIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGRlc2lyZWQgem9vbSBsZXZlbC5cclxuICAgKiBcclxuICAgKiBXZSBjYW4ndCB1c2UgY29udGFpbmVyIHpvb20gPT0gZGVzaXJlZCB6b29tIGJlY2F1c2Ugd2l0aCB0aGUgZ2FtZSBsb29wIHdlIG1pZ2h0IG1pc3MgdGhhdCBleGFjdCBtb21lbnQgc28gd2UgY2hlY2sgYSB2ZXJ5IHNtYWxsIHdpbmRvdy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHpvb20gY3JpdGVyaWEgaXMgbWV0IG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBjcml0ZXJpYU1ldCgpOiBib29sZWFuIHtcclxuICAgIGlmIChcclxuICAgICAgKHRoaXMuY29udGFpbmVyLnNjYWxlLnggPiB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnggLSAwLjAxICYmIHRoaXMuY29udGFpbmVyLnNjYWxlLnggPCB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnggKyAwLjAxKSAmJlxyXG4gICAgICAodGhpcy5jb250YWluZXIuc2NhbGUueSA+IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueSAtIDAuMDEgJiYgdGhpcy5jb250YWluZXIuc2NhbGUueSA8IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueSArIDAuMDEpIFxyXG4gICAgKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59Il19