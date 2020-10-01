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
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
var Shake = /*#__PURE__*/function (_Effect) {
  _inherits(Shake, _Effect);

  var _super = _createSuper(Shake);

  /**
   * The intensity of the shake, from 1-10.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 5
   */

  /**
   * A reference to the initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the shake effect to.
   * @param {number} intensity The intensity of the shake, from a scale of 1 to 10.
   * @param {number} duration The duration of the shake effect.
   */
  function Shake(container, intensity, duration) {
    var _this;

    _classCallCheck(this, Shake);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_intensity", 5);

    _defineProperty(_assertThisInitialized(_this), "_initialPivot", void 0);

    _this._intensity = intensity;
    _this.duration = duration;
    _this._initialPivot = {
      x: _this.container.pivot.x,
      y: _this.container.pivot.y
    };
    _this.started = performance.now();
    return _this;
  }
  /**
   * Updates the status of the shake.
   */


  _createClass(Shake, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      this.current = performance.now();

      if (this.criteriaMet()) {
        this.container.pivot.x = this._initialPivot.x;
        this.container.pivot.y = this._initialPivot.y;
        this.finished.dispatch();
        return;
      }

      var dx = Math.random() * this._intensity;

      var dy = Math.random() * this._intensity;

      this.container.pivot.x = dx;
      this.container.pivot.y = dy;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the shake effect is done.
     * 
     * @returns {boolean} Returns true if the shake effect is done or not.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.current - this.started >= this.duration) return true;
      return false;
    }
  }]);

  return Shake;
}(_Effect2["default"]);

exports["default"] = Shake;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1NoYWtlLnRzIl0sIm5hbWVzIjpbIlNoYWtlIiwiY29udGFpbmVyIiwiaW50ZW5zaXR5IiwiZHVyYXRpb24iLCJfaW50ZW5zaXR5IiwiX2luaXRpYWxQaXZvdCIsIngiLCJwaXZvdCIsInkiLCJzdGFydGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjdXJyZW50IiwiY3JpdGVyaWFNZXQiLCJmaW5pc2hlZCIsImRpc3BhdGNoIiwiZHgiLCJNYXRoIiwicmFuZG9tIiwiZHkiLCJ1c2VSQUYiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHcUJBLEs7Ozs7O0FBQ25COzs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7O0FBU0E7Ozs7O0FBS0EsaUJBQVlDLFNBQVosRUFBdUNDLFNBQXZDLEVBQTBEQyxRQUExRCxFQUE0RTtBQUFBOztBQUFBOztBQUMxRSw4QkFBTUYsU0FBTjs7QUFEMEUsaUVBaEJ2RCxDQWdCdUQ7O0FBQUE7O0FBRzFFLFVBQUtHLFVBQUwsR0FBa0JGLFNBQWxCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxNQUFLTCxTQUFMLENBQWVNLEtBQWYsQ0FBcUJELENBQTFCO0FBQTZCRSxNQUFBQSxDQUFDLEVBQUUsTUFBS1AsU0FBTCxDQUFlTSxLQUFmLENBQXFCQztBQUFyRCxLQUFyQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFQMEU7QUFRM0U7QUFFRDs7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLFdBQUtDLE9BQUwsR0FBZUYsV0FBVyxDQUFDQyxHQUFaLEVBQWY7O0FBRUEsVUFBSSxLQUFLRSxXQUFMLEVBQUosRUFBd0I7QUFDdEIsYUFBS1osU0FBTCxDQUFlTSxLQUFmLENBQXFCRCxDQUFyQixHQUF5QixLQUFLRCxhQUFMLENBQW1CQyxDQUE1QztBQUNBLGFBQUtMLFNBQUwsQ0FBZU0sS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsS0FBS0gsYUFBTCxDQUFtQkcsQ0FBNUM7QUFFQSxhQUFLTSxRQUFMLENBQWNDLFFBQWQ7QUFDQTtBQUNEOztBQUVELFVBQU1DLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtkLFVBQWhDOztBQUNBLFVBQU1lLEVBQUUsR0FBR0YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtkLFVBQWhDOztBQUVBLFdBQUtILFNBQUwsQ0FBZU0sS0FBZixDQUFxQkQsQ0FBckIsR0FBeUJVLEVBQXpCO0FBQ0EsV0FBS2YsU0FBTCxDQUFlTSxLQUFmLENBQXFCQyxDQUFyQixHQUF5QlcsRUFBekI7QUFFQSxVQUFJLEtBQUtDLE1BQVQsRUFBaUIsS0FBS0MsRUFBTCxHQUFVQyxxQkFBcUIsQ0FBQztBQUFBLGVBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxPQUFELENBQS9CO0FBQ2xCO0FBRUQ7Ozs7Ozs7O2tDQUt1QjtBQUNyQixVQUFJLEtBQUtYLE9BQUwsR0FBZSxLQUFLSCxPQUFwQixJQUErQixLQUFLTixRQUF4QyxFQUFrRCxPQUFPLElBQVA7QUFDbEQsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUFuRWdDcUIsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vRWZmZWN0JztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xyXG5cclxuLyoqXHJcbiAqIEEgU2hha2UgZWZmZWN0IGludm9sdmVzIHNoYWtpbmcgdGhlIGNhbWVyYSBhdCB2YXJpb3VzIGFtb3VudHMgdXAgdG8gYSBzZXBjaWZpZWQgaW50ZW5zaXR5LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hha2UgZXh0ZW5kcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlbnNpdHkgb2YgdGhlIHNoYWtlLCBmcm9tIDEtMTAuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCA1XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW50ZW5zaXR5ID0gNTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGluaXRpYWwgcGl2b3Qgb2YgdGhlIGNvbnRhaW5lci5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2luaXRpYWxQaXZvdDogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgc2hha2UgZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlbnNpdHkgVGhlIGludGVuc2l0eSBvZiB0aGUgc2hha2UsIGZyb20gYSBzY2FsZSBvZiAxIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHNoYWtlIGVmZmVjdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IFBJWEkuQ29udGFpbmVyLCBpbnRlbnNpdHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSBpbnRlbnNpdHk7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLl9pbml0aWFsUGl2b3QgPSB7IHg6IHRoaXMuY29udGFpbmVyLnBpdm90LngsIHk6IHRoaXMuY29udGFpbmVyLnBpdm90LnkgfTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGUgc2hha2UuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY3JpdGVyaWFNZXQoKSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5waXZvdC54ID0gdGhpcy5faW5pdGlhbFBpdm90Lng7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9pbml0aWFsUGl2b3QueTtcclxuXHJcbiAgICAgIHRoaXMuZmluaXNoZWQuZGlzcGF0Y2goKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuX2ludGVuc2l0eTtcclxuICAgIGNvbnN0IGR5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuX2ludGVuc2l0eTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC54ID0gZHg7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC55ID0gZHk7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUkFGKSB0aGlzLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgc2hha2UgZWZmZWN0IGlzIGRvbmUuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgc2hha2UgZWZmZWN0IGlzIGRvbmUgb3Igbm90LlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhTWV0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCA+PSB0aGlzLmR1cmF0aW9uKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19