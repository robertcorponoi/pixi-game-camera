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
 * A rotating effect that involves rotating the game a specified number of degrees.
 */
var Rotate = /*#__PURE__*/function (_Effect) {
  _inherits(Rotate, _Effect);

  var _super = _createSuper(Rotate);

  /**
   * A reference to the initial angle.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The initial pivot of the container.
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
   * @param {PIXI.Container} container A reference to the container to apply the rotate effect to.
   * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  function Rotate(container, angle, duration, easing) {
    var _this;

    _classCallCheck(this, Rotate);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_initialAngle", void 0);

    _defineProperty(_assertThisInitialized(_this), "_desiredAngle", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialPivot", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _this._initialAngle = container.angle;
    _this._desiredAngle = angle;
    _this.duration = duration;
    _this._easing = easing;
    _this._initialPivot = {
      x: _this.container.pivot.x,
      y: _this.container.pivot.y
    };
    if (_this._initialPivot.x == 0) _this.container.pivot.x = _this.container.width / 2;
    if (_this._initialPivot.y == 0) _this.container.pivot.y = _this.container.height / 2;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(Rotate, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet()) {
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = (this.current - this.started) / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var angleAmount = this._desiredAngle * percentageThroughAnimation;
      this.container.angle = this._initialAngle + angleAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the container's current angle is very close to the desired angle.
     * 
     * We can't use container angle == desired angle because with the game loop we might miss that exact moment so we check a very small window.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the angle criteria is met or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.angle > this._desiredAngle) return true;
      return false;
    }
  }]);

  return Rotate;
}(_Effect2["default"]);

exports["default"] = Rotate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1JvdGF0ZS50cyJdLCJuYW1lcyI6WyJSb3RhdGUiLCJjb250YWluZXIiLCJhbmdsZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2luaXRpYWxBbmdsZSIsIl9kZXNpcmVkQW5nbGUiLCJfZWFzaW5nIiwiX2luaXRpYWxQaXZvdCIsIngiLCJwaXZvdCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNyaXRlcmlhTWV0IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJwZXJjZW50YWdlVGhyb3VnaEFuaW1hdGlvbiIsImFuZ2xlQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0lBR3FCQSxNOzs7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBTUEsa0JBQVlDLFNBQVosRUFBdUNDLEtBQXZDLEVBQXNEQyxRQUF0RCxFQUF3RUMsTUFBeEUsRUFBMEY7QUFBQTs7QUFBQTs7QUFDeEYsOEJBQU1ILFNBQU47O0FBRHdGOztBQUFBOztBQUFBOztBQUFBOztBQUd4RixVQUFLSSxhQUFMLEdBQXFCSixTQUFTLENBQUNDLEtBQS9CO0FBQ0EsVUFBS0ksYUFBTCxHQUFxQkosS0FBckI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtJLE9BQUwsR0FBZUgsTUFBZjtBQUNBLFVBQUtJLGFBQUwsR0FBcUI7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLE1BQUtSLFNBQUwsQ0FBZVMsS0FBZixDQUFxQkQsQ0FBMUI7QUFBNkJFLE1BQUFBLENBQUMsRUFBRSxNQUFLVixTQUFMLENBQWVTLEtBQWYsQ0FBcUJDO0FBQXJELEtBQXJCO0FBRUEsUUFBSSxNQUFLSCxhQUFMLENBQW1CQyxDQUFuQixJQUF3QixDQUE1QixFQUErQixNQUFLUixTQUFMLENBQWVTLEtBQWYsQ0FBcUJELENBQXJCLEdBQXlCLE1BQUtSLFNBQUwsQ0FBZVcsS0FBZixHQUF1QixDQUFoRDtBQUMvQixRQUFJLE1BQUtKLGFBQUwsQ0FBbUJHLENBQW5CLElBQXdCLENBQTVCLEVBQStCLE1BQUtWLFNBQUwsQ0FBZVMsS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsTUFBS1YsU0FBTCxDQUFlWSxNQUFmLEdBQXdCLENBQWpEO0FBVnlEO0FBV3pGO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLQyxRQUFMLENBQWNDLFFBQWQ7QUFDQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLbEIsUUFBaEU7O0FBQ0EsVUFBTW1CLDBCQUEwQixHQUFHLEtBQUtmLE9BQUwsQ0FBYWEsa0JBQWIsQ0FBbkM7O0FBRUEsVUFBTUcsV0FBVyxHQUFHLEtBQUtqQixhQUFMLEdBQXFCZ0IsMEJBQXpDO0FBQ0EsV0FBS3JCLFNBQUwsQ0FBZUMsS0FBZixHQUF1QixLQUFLRyxhQUFMLEdBQXFCa0IsV0FBNUM7QUFFQSxVQUFJLEtBQUtDLE1BQVQsRUFBaUIsS0FBS0MsRUFBTCxHQUFVQyxxQkFBcUIsQ0FBQztBQUFBLGVBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxPQUFELENBQS9CO0FBQ2xCO0FBRUQ7Ozs7Ozs7Ozs7OztrQ0FTdUI7QUFDckIsVUFBSSxLQUFLMUIsU0FBTCxDQUFlQyxLQUFmLEdBQXVCLEtBQUtJLGFBQWhDLEVBQStDLE9BQU8sSUFBUDtBQUMvQyxhQUFPLEtBQVA7QUFDRDs7OztFQXhGaUNzQixtQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuXHJcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9FZmZlY3QnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL1ZlY3Rvcic7XHJcblxyXG4vKipcclxuICogQSByb3RhdGluZyBlZmZlY3QgdGhhdCBpbnZvbHZlcyByb3RhdGluZyB0aGUgZ2FtZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgZGVncmVlcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGluaXRpYWwgYW5nbGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsQW5nbGU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFuZ2xlIHRvIHJvdGF0ZSB0bywgZnJvbSAwIHRvIDM2MCB3aXRoIDAgYmVpbmcgdGhlIGRlZmF1bHQgc3RhdGUgYW5kIDM2MCBiZWluZyBhbGwgdGhlIHdheSBhcm91bmQgYmFjayB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Rlc2lyZWRBbmdsZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBwaXZvdCBvZiB0aGUgY29udGFpbmVyLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtWZWN0b3J9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBpdm90OiBWZWN0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlIGZvciB0aGlzIGVmZmVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWFzaW5nOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQSVhJLkNvbnRhaW5lcn0gY29udGFpbmVyIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgdG8gYXBwbHkgdGhlIHJvdGF0ZSBlZmZlY3QgdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIFRoZSBhbmdsZSB0byByb3RhdGUgdG8sIGZyb20gMCB0byAzNjAgd2l0aCAwIGJlaW5nIHRoZSBkZWZhdWx0IHN0YXRlIGFuZCAzNjAgYmVpbmcgYWxsIHRoZSB3YXkgYXJvdW5kIGJhY2sgdG8gdGhlIGRlZmF1bHQgc3RhdGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzaW5nIFRoZSBlYXNpbmcgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IFBJWEkuQ29udGFpbmVyLCBhbmdsZTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc6IEZ1bmN0aW9uKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxBbmdsZSA9IGNvbnRhaW5lci5hbmdsZTtcclxuICAgIHRoaXMuX2Rlc2lyZWRBbmdsZSA9IGFuZ2xlXHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLl9lYXNpbmcgPSBlYXNpbmc7XHJcbiAgICB0aGlzLl9pbml0aWFsUGl2b3QgPSB7IHg6IHRoaXMuY29udGFpbmVyLnBpdm90LngsIHk6IHRoaXMuY29udGFpbmVyLnBpdm90LnkgfTtcclxuXHJcbiAgICBpZiAodGhpcy5faW5pdGlhbFBpdm90LnggPT0gMCkgdGhpcy5jb250YWluZXIucGl2b3QueCA9IHRoaXMuY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgIGlmICh0aGlzLl9pbml0aWFsUGl2b3QueSA9PSAwKSB0aGlzLmNvbnRhaW5lci5waXZvdC55ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24gPSB0aGlzLl9lYXNpbmcodGltZURpZmZQZXJjZW50YWdlKTtcclxuXHJcbiAgICBjb25zdCBhbmdsZUFtb3VudCA9IHRoaXMuX2Rlc2lyZWRBbmdsZSAqIHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uO1xyXG4gICAgdGhpcy5jb250YWluZXIuYW5nbGUgPSB0aGlzLl9pbml0aWFsQW5nbGUgKyBhbmdsZUFtb3VudDtcclxuXHJcbiAgICBpZiAodGhpcy51c2VSQUYpIHRoaXMuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjb250YWluZXIncyBjdXJyZW50IGFuZ2xlIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGRlc2lyZWQgYW5nbGUuXHJcbiAgICogXHJcbiAgICogV2UgY2FuJ3QgdXNlIGNvbnRhaW5lciBhbmdsZSA9PSBkZXNpcmVkIGFuZ2xlIGJlY2F1c2Ugd2l0aCB0aGUgZ2FtZSBsb29wIHdlIG1pZ2h0IG1pc3MgdGhhdCBleGFjdCBtb21lbnQgc28gd2UgY2hlY2sgYSB2ZXJ5IHNtYWxsIHdpbmRvdy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGFuZ2xlIGNyaXRlcmlhIGlzIG1ldCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIuYW5nbGUgPiB0aGlzLl9kZXNpcmVkQW5nbGUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==