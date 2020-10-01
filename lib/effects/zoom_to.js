'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomTo = void 0;

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
   * @param {Container} container A reference to the container to apply the zoomto effect to.
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

    _this.duration = duration;
    _this._desiredZoomLevel = {
      x: xZoomLevel,
      y: yZoomLevel
    };
    _this._easing = easing || _this.easeLinear;
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
}(_effect.Effect);

exports.ZoomTo = ZoomTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL3pvb21fdG8udHMiXSwibmFtZXMiOlsiWm9vbVRvIiwiY29udGFpbmVyIiwieFpvb21MZXZlbCIsInlab29tTGV2ZWwiLCJkdXJhdGlvbiIsImVhc2luZyIsIl9kZXNpcmVkWm9vbUxldmVsIiwieCIsInkiLCJfZWFzaW5nIiwiZWFzZUxpbmVhciIsIl9pbml0aWFsWm9vbUxldmVsIiwic2NhbGUiLCJfeElzR3JlYXRlciIsIl95SXNHcmVhdGVyIiwiY3JpdGVyaWFNZXQiLCJjdXJyZW50IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsInBlcmZvcm1hbmNlIiwibm93IiwidGltZURpZmZQZXJjZW50YWdlIiwic3RhcnRlZCIsInBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uIiwieFpvb21BbW91bnQiLCJ5Wm9vbUFtb3VudCIsInVzZVJBRiIsImlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHYUEsTTs7Ozs7QUFDWDs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7OztBQU9BLGtCQUFZQyxTQUFaLEVBQWtDQyxVQUFsQyxFQUFzREMsVUFBdEQsRUFBMEVDLFFBQTFFLEVBQTRGQyxNQUE1RixFQUE4RztBQUFBOztBQUFBOztBQUM1Ryw4QkFBTUosU0FBTjs7QUFENEc7O0FBQUE7O0FBQUE7O0FBQUEsa0VBbEJ4RixLQWtCd0Y7O0FBQUEsa0VBVHhGLEtBU3dGOztBQUc1RyxVQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtFLGlCQUFMLEdBQXlCO0FBQUVDLE1BQUFBLENBQUMsRUFBRUwsVUFBTDtBQUFpQk0sTUFBQUEsQ0FBQyxFQUFFTDtBQUFwQixLQUF6QjtBQUNBLFVBQUtNLE9BQUwsR0FBZUosTUFBTSxJQUFJLE1BQUtLLFVBQTlCO0FBRUEsVUFBS0MsaUJBQUwsR0FBeUI7QUFBRUosTUFBQUEsQ0FBQyxFQUFFLE1BQUtOLFNBQUwsQ0FBZVcsS0FBZixDQUFxQkwsQ0FBMUI7QUFBNkJDLE1BQUFBLENBQUMsRUFBRSxNQUFLUCxTQUFMLENBQWVXLEtBQWYsQ0FBcUJKO0FBQXJELEtBQXpCO0FBRUEsUUFBSSxNQUFLRixpQkFBTCxDQUF1QkMsQ0FBdkIsR0FBMkIsTUFBS0ksaUJBQUwsQ0FBdUJKLENBQXRELEVBQXlELE1BQUtNLFdBQUwsR0FBbUIsSUFBbkI7QUFDekQsUUFBSSxNQUFLUCxpQkFBTCxDQUF1QkUsQ0FBdkIsR0FBMkIsTUFBS0csaUJBQUwsQ0FBdUJILENBQXRELEVBQXlELE1BQUtNLFdBQUwsR0FBbUIsSUFBbkI7QUFWbUQ7QUFXN0c7QUFFRDs7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLFVBQUksS0FBS0MsV0FBTCxNQUFzQixLQUFLQyxPQUFMLEdBQWUsS0FBS1osUUFBOUMsRUFBd0Q7QUFDdEQsYUFBS2EsUUFBTCxDQUFjQyxRQUFkO0FBQ0E7QUFDRDs7QUFFRCxXQUFLRixPQUFMLEdBQWVHLFdBQVcsQ0FBQ0MsR0FBWixFQUFmO0FBRUEsVUFBTUMsa0JBQTBCLEdBQUcsQ0FBQyxLQUFLTCxPQUFMLEdBQWUsS0FBS00sT0FBckIsSUFBZ0MsS0FBS2xCLFFBQXhFOztBQUNBLFVBQU1tQiwwQkFBa0MsR0FBRyxLQUFLZCxPQUFMLENBQWFZLGtCQUFiLENBQTNDOztBQUVBLFVBQU1HLFdBQW1CLEdBQUcsS0FBS2xCLGlCQUFMLENBQXVCQyxDQUF2QixHQUEyQmdCLDBCQUF2RDtBQUNBLFVBQU1FLFdBQW1CLEdBQUcsS0FBS25CLGlCQUFMLENBQXVCRSxDQUF2QixHQUEyQmUsMEJBQXZEO0FBRUEsV0FBS3RCLFNBQUwsQ0FBZVcsS0FBZixDQUFxQkwsQ0FBckIsR0FBeUIsS0FBS00sV0FBTCxHQUFtQixLQUFLRixpQkFBTCxDQUF1QkosQ0FBdkIsR0FBMkJpQixXQUFXLEdBQUcsQ0FBNUQsR0FBZ0UsS0FBS2IsaUJBQUwsQ0FBdUJKLENBQXZCLEdBQTJCaUIsV0FBcEg7QUFDQSxXQUFLdkIsU0FBTCxDQUFlVyxLQUFmLENBQXFCSixDQUFyQixHQUF5QixLQUFLTSxXQUFMLEdBQW1CLEtBQUtILGlCQUFMLENBQXVCSCxDQUF2QixHQUEyQmlCLFdBQVcsR0FBRyxDQUE1RCxHQUFnRSxLQUFLZCxpQkFBTCxDQUF1QkgsQ0FBdkIsR0FBMkJpQixXQUFwSDtBQUVBLFVBQUksS0FBS0MsTUFBVCxFQUFpQixLQUFLQyxFQUFMLEdBQVVDLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBL0I7QUFDbEI7QUFFRDs7Ozs7Ozs7Ozs7O2tDQVN1QjtBQUNyQixVQUNHLEtBQUs1QixTQUFMLENBQWVXLEtBQWYsQ0FBcUJMLENBQXJCLEdBQXlCLEtBQUtELGlCQUFMLENBQXVCQyxDQUF2QixHQUEyQixJQUFwRCxJQUE0RCxLQUFLTixTQUFMLENBQWVXLEtBQWYsQ0FBcUJMLENBQXJCLEdBQXlCLEtBQUtELGlCQUFMLENBQXVCQyxDQUF2QixHQUEyQixJQUFqSCxJQUNDLEtBQUtOLFNBQUwsQ0FBZVcsS0FBZixDQUFxQkosQ0FBckIsR0FBeUIsS0FBS0YsaUJBQUwsQ0FBdUJFLENBQXZCLEdBQTJCLElBQXBELElBQTRELEtBQUtQLFNBQUwsQ0FBZVcsS0FBZixDQUFxQkosQ0FBckIsR0FBeUIsS0FBS0YsaUJBQUwsQ0FBdUJFLENBQXZCLEdBQTJCLElBRm5ILEVBR0UsT0FBTyxJQUFQO0FBRUYsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUF6R3lCc0IsYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHBpeGkvZGlzcGxheSc7XHJcblxyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tICcuL2VmZmVjdCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL3ZlY3Rvcic7XHJcblxyXG4vKipcclxuICogQSB6b29taW5nIGVmZmVjdCB0aGF0IGludm9sdmVzIHRoZSBjYW1lcmEgem9vbWluZyBpbiB0byBhIHBhcnRpY3VsYXIgcG9pbnQgb24gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBab29tVG8gZXh0ZW5kcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB6b29tIGxldmVsIHRvIHpvb20gdG8gd2l0aCB2YWx1ZXMgbGFyZ2VyIHRoYW4gMSBiZWluZyB6b29tZWQgaW4gYW5kIHZhbHVlcyBzbWFsbGVyIHRoYW4gMSBiZWluZyB6b29tZWQgb3V0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtWZWN0b3J9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGVzaXJlZFpvb21MZXZlbDogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHVzZSBmb3IgdGhpcyBlZmZlY3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Vhc2luZzogRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbml0aWFsIHpvb20gbGV2ZWwuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsWm9vbUxldmVsOiBWZWN0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXNpcmVkIHggem9vbSBsZXZlbCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgem9vbSBsZXZlbCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeElzR3JlYXRlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGVzaXJlZCB5IHpvb20gbGV2ZWwgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3lJc0dyZWF0ZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDb250YWluZXJ9IGNvbnRhaW5lciBBIHJlZmVyZW5jZSB0byB0aGUgY29udGFpbmVyIHRvIGFwcGx5IHRoZSB6b29tdG8gZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4Wm9vbUxldmVsIFRoZSB6b29tIGxldmVsIHRvIHpvb20gaG9yaXpvbnRhbGx5IHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geVpvb21MZXZlbCBUaGUgem9vbSBsZXZlbCB0byB6b29tIHZlcnRpY2FsbHkgd2l0aCB2YWx1ZXMgbGFyZ2VyIHRoYW4gMSBiZWluZyB6b29tZWQgaW4gYW5kIHZhbHVlcyBzbWFsbGVyIHRoYW4gMSBiZWluZyB6b29tZWQgb3V0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVhc2luZyBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHhab29tTGV2ZWw6IG51bWJlciwgeVpvb21MZXZlbDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc6IEZ1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwgPSB7IHg6IHhab29tTGV2ZWwsIHk6IHlab29tTGV2ZWwgfTtcclxuICAgIHRoaXMuX2Vhc2luZyA9IGVhc2luZyB8fCB0aGlzLmVhc2VMaW5lYXI7XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbFpvb21MZXZlbCA9IHsgeDogdGhpcy5jb250YWluZXIuc2NhbGUueCwgeTogdGhpcy5jb250YWluZXIuc2NhbGUueSB9O1xyXG5cclxuICAgIGlmICh0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnggPiB0aGlzLl9pbml0aWFsWm9vbUxldmVsLngpIHRoaXMuX3hJc0dyZWF0ZXIgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueSA+IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueSkgdGhpcy5feUlzR3JlYXRlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBzdGF0dXMgb2YgdGhpcyBlZmZlY3Qgb24gYSBmcmFtZSBieSBmcmFtZSBiYXNpcy5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5jcml0ZXJpYU1ldCgpIHx8IHRoaXMuY3VycmVudCA+IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlOiBudW1iZXIgPSAodGhpcy5jdXJyZW50IC0gdGhpcy5zdGFydGVkKSAvIHRoaXMuZHVyYXRpb247XHJcbiAgICBjb25zdCBwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbjogbnVtYmVyID0gdGhpcy5fZWFzaW5nKHRpbWVEaWZmUGVyY2VudGFnZSk7XHJcblxyXG4gICAgY29uc3QgeFpvb21BbW91bnQ6IG51bWJlciA9IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueCAqIHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uO1xyXG4gICAgY29uc3QgeVpvb21BbW91bnQ6IG51bWJlciA9IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueSAqIHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLnNjYWxlLnggPSB0aGlzLl94SXNHcmVhdGVyID8gdGhpcy5faW5pdGlhbFpvb21MZXZlbC54ICsgeFpvb21BbW91bnQgLyAyIDogdGhpcy5faW5pdGlhbFpvb21MZXZlbC54IC0geFpvb21BbW91bnQ7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY2FsZS55ID0gdGhpcy5feUlzR3JlYXRlciA/IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueSArIHlab29tQW1vdW50IC8gMiA6IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueSAtIHlab29tQW1vdW50O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGNvbnRhaW5lcidzIGN1cnJlbnQgem9vbSBsZXZlbCBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBkZXNpcmVkIHpvb20gbGV2ZWwuXHJcbiAgICogXHJcbiAgICogV2UgY2FuJ3QgdXNlIGNvbnRhaW5lciB6b29tID09IGRlc2lyZWQgem9vbSBiZWNhdXNlIHdpdGggdGhlIGdhbWUgbG9vcCB3ZSBtaWdodCBtaXNzIHRoYXQgZXhhY3QgbW9tZW50IHNvIHdlIGNoZWNrIGEgdmVyeSBzbWFsbCB3aW5kb3cuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSB6b29tIGNyaXRlcmlhIGlzIG1ldCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLmNvbnRhaW5lci5zY2FsZS54ID4gdGhpcy5fZGVzaXJlZFpvb21MZXZlbC54IC0gMC4wMSAmJiB0aGlzLmNvbnRhaW5lci5zY2FsZS54IDwgdGhpcy5fZGVzaXJlZFpvb21MZXZlbC54ICsgMC4wMSkgJiZcclxuICAgICAgKHRoaXMuY29udGFpbmVyLnNjYWxlLnkgPiB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnkgLSAwLjAxICYmIHRoaXMuY29udGFpbmVyLnNjYWxlLnkgPCB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnkgKyAwLjAxKSBcclxuICAgICkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==