'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomTo = void 0;

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
   * @param {Function} [easing] The easing function that should be used.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL3pvb21fdG8udHMiXSwibmFtZXMiOlsiWm9vbVRvIiwiY29udGFpbmVyIiwieFpvb21MZXZlbCIsInlab29tTGV2ZWwiLCJkdXJhdGlvbiIsImVhc2luZyIsIl9kZXNpcmVkWm9vbUxldmVsIiwieCIsInkiLCJfZWFzaW5nIiwiZWFzZUxpbmVhciIsIl9pbml0aWFsWm9vbUxldmVsIiwic2NhbGUiLCJfeElzR3JlYXRlciIsIl95SXNHcmVhdGVyIiwiY3JpdGVyaWFNZXQiLCJjdXJyZW50IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsInBlcmZvcm1hbmNlIiwibm93IiwidGltZURpZmZQZXJjZW50YWdlIiwic3RhcnRlZCIsInBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uIiwieFpvb21BbW91bnQiLCJ5Wm9vbUFtb3VudCIsInVzZVJBRiIsImlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtJQUNhQSxNOzs7OztBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usa0JBQVlDLFNBQVosRUFBa0NDLFVBQWxDLEVBQXNEQyxVQUF0RCxFQUEwRUMsUUFBMUUsRUFBNEZDLE1BQTVGLEVBQStHO0FBQUE7O0FBQUE7O0FBQzdHLDhCQUFNSixTQUFOOztBQUQ2Rzs7QUFBQTs7QUFBQTs7QUFBQSxrRUFsQnpGLEtBa0J5Rjs7QUFBQSxrRUFU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QU8sS0FBUDtBQUNEOzs7O0VBekd5QnNCLGMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BwaXhpL2Rpc3BsYXknO1xyXG5cclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSAnLi9lZmZlY3QnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi92ZWN0b3InO1xyXG5cclxuLyoqXHJcbiAqIEEgem9vbWluZyBlZmZlY3QgdGhhdCBpbnZvbHZlcyB0aGUgY2FtZXJhIHpvb21pbmcgaW4gdG8gYSBwYXJ0aWN1bGFyIHBvaW50IG9uIHRoZSBjb250YWluZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgWm9vbVRvIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBUaGUgem9vbSBsZXZlbCB0byB6b29tIHRvIHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Rlc2lyZWRab29tTGV2ZWw6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVhc2luZyBmdW5jdGlvbiB0byB1c2UgZm9yIHRoaXMgZWZmZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBwcml2YXRlIF9lYXNpbmc6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5pdGlhbCB6b29tIGxldmVsLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtWZWN0b3J9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFpvb21MZXZlbDogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGVzaXJlZCB4IHpvb20gbGV2ZWwgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHpvb20gbGV2ZWwgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3hJc0dyZWF0ZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlc2lyZWQgeSB6b29tIGxldmVsIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB6b29tIGxldmVsIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBwcml2YXRlIF95SXNHcmVhdGVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgem9vbXRvIGVmZmVjdCB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geFpvb21MZXZlbCBUaGUgem9vbSBsZXZlbCB0byB6b29tIGhvcml6b250YWxseSB3aXRoIHZhbHVlcyBsYXJnZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBpbiBhbmQgdmFsdWVzIHNtYWxsZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBvdXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlab29tTGV2ZWwgVGhlIHpvb20gbGV2ZWwgdG8gem9vbSB2ZXJ0aWNhbGx5IHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZWFzaW5nXSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHhab29tTGV2ZWw6IG51bWJlciwgeVpvb21MZXZlbDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc/OiBGdW5jdGlvbikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLl9kZXNpcmVkWm9vbUxldmVsID0geyB4OiB4Wm9vbUxldmVsLCB5OiB5Wm9vbUxldmVsIH07XHJcbiAgICB0aGlzLl9lYXNpbmcgPSBlYXNpbmcgfHwgdGhpcy5lYXNlTGluZWFyO1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxab29tTGV2ZWwgPSB7IHg6IHRoaXMuY29udGFpbmVyLnNjYWxlLngsIHk6IHRoaXMuY29udGFpbmVyLnNjYWxlLnkgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGVzaXJlZFpvb21MZXZlbC54ID4gdGhpcy5faW5pdGlhbFpvb21MZXZlbC54KSB0aGlzLl94SXNHcmVhdGVyID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnkgPiB0aGlzLl9pbml0aWFsWm9vbUxldmVsLnkpIHRoaXMuX3lJc0dyZWF0ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHRoaXMgZWZmZWN0IG9uIGEgZnJhbWUgYnkgZnJhbWUgYmFzaXMuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JpdGVyaWFNZXQoKSB8fCB0aGlzLmN1cnJlbnQgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoZWQuZGlzcGF0Y2goKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3VycmVudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZTogbnVtYmVyID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb246IG51bWJlciA9IHRoaXMuX2Vhc2luZyh0aW1lRGlmZlBlcmNlbnRhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHhab29tQW1vdW50OiBudW1iZXIgPSB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnggKiBwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbjtcclxuICAgIGNvbnN0IHlab29tQW1vdW50OiBudW1iZXIgPSB0aGlzLl9kZXNpcmVkWm9vbUxldmVsLnkgKiBwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbjtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY2FsZS54ID0gdGhpcy5feElzR3JlYXRlciA/IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueCArIHhab29tQW1vdW50IC8gMiA6IHRoaXMuX2luaXRpYWxab29tTGV2ZWwueCAtIHhab29tQW1vdW50O1xyXG4gICAgdGhpcy5jb250YWluZXIuc2NhbGUueSA9IHRoaXMuX3lJc0dyZWF0ZXIgPyB0aGlzLl9pbml0aWFsWm9vbUxldmVsLnkgKyB5Wm9vbUFtb3VudCAvIDIgOiB0aGlzLl9pbml0aWFsWm9vbUxldmVsLnkgLSB5Wm9vbUFtb3VudDtcclxuXHJcbiAgICBpZiAodGhpcy51c2VSQUYpIHRoaXMuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjb250YWluZXIncyBjdXJyZW50IHpvb20gbGV2ZWwgaXMgdmVyeSBjbG9zZSB0byB0aGUgZGVzaXJlZCB6b29tIGxldmVsLlxyXG4gICAqIFxyXG4gICAqIFdlIGNhbid0IHVzZSBjb250YWluZXIgem9vbSA9PSBkZXNpcmVkIHpvb20gYmVjYXVzZSB3aXRoIHRoZSBnYW1lIGxvb3Agd2UgbWlnaHQgbWlzcyB0aGF0IGV4YWN0IG1vbWVudCBzbyB3ZSBjaGVjayBhIHZlcnkgc21hbGwgd2luZG93LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgem9vbSBjcml0ZXJpYSBpcyBtZXQgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhTWV0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5jb250YWluZXIuc2NhbGUueCA+IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueCAtIDAuMDEgJiYgdGhpcy5jb250YWluZXIuc2NhbGUueCA8IHRoaXMuX2Rlc2lyZWRab29tTGV2ZWwueCArIDAuMDEpICYmXHJcbiAgICAgICh0aGlzLmNvbnRhaW5lci5zY2FsZS55ID4gdGhpcy5fZGVzaXJlZFpvb21MZXZlbC55IC0gMC4wMSAmJiB0aGlzLmNvbnRhaW5lci5zY2FsZS55IDwgdGhpcy5fZGVzaXJlZFpvb21MZXZlbC55ICsgMC4wMSkgXHJcbiAgICApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0iXX0=