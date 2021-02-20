'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate = void 0;

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
   * @param {Container} container A reference to the container to apply the rotate effect to.
   * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} [easing] The easing function that should be used.
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
    _this._easing = easing || _this.easeLinear;
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
}(_effect.Effect);

exports.Rotate = Rotate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL3JvdGF0ZS50cyJdLCJuYW1lcyI6WyJSb3RhdGUiLCJjb250YWluZXIiLCJhbmdsZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiX2luaXRpYWxBbmdsZSIsIl9kZXNpcmVkQW5nbGUiLCJfZWFzaW5nIiwiZWFzZUxpbmVhciIsIl9pbml0aWFsUGl2b3QiLCJ4IiwicGl2b3QiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjcml0ZXJpYU1ldCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRGlmZlBlcmNlbnRhZ2UiLCJzdGFydGVkIiwicGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24iLCJhbmdsZUFtb3VudCIsInVzZVJBRiIsImlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtJQUNhQSxNOzs7OztBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLGtCQUFZQyxTQUFaLEVBQWtDQyxLQUFsQyxFQUFpREMsUUFBakQsRUFBbUVDLE1BQW5FLEVBQXNGO0FBQUE7O0FBQUE7O0FBQ3BGLDhCQUFNSCxTQUFOOztBQURvRjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFHcEYsVUFBS0ksYUFBTCxHQUFxQkosU0FBUyxDQUFDQyxLQUEvQjtBQUNBLFVBQUtJLGFBQUwsR0FBcUJKLEtBQXJCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLSSxPQUFMLEdBQWVILE1BQU0sSUFBSSxNQUFLSSxVQUE5QjtBQUNBLFVBQUtDLGFBQUwsR0FBcUI7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLE1BQUtULFNBQUwsQ0FBZVUsS0FBZixDQUFxQkQsQ0FBMUI7QUFBNkJFLE1BQUFBLENBQUMsRUFBRSxNQUFLWCxTQUFMLENBQWVVLEtBQWYsQ0FBcUJDO0FBQXJELEtBQXJCO0FBRUEsUUFBSSxNQUFLSCxhQUFMLENBQW1CQyxDQUFuQixJQUF3QixDQUE1QixFQUErQixNQUFLVCxTQUFMLENBQWVVLEtBQWYsQ0FBcUJELENBQXJCLEdBQXlCLE1BQUtULFNBQUwsQ0FBZVksS0FBZixHQUF1QixDQUFoRDtBQUMvQixRQUFJLE1BQUtKLGFBQUwsQ0FBbUJHLENBQW5CLElBQXdCLENBQTVCLEVBQStCLE1BQUtYLFNBQUwsQ0FBZVUsS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsTUFBS1gsU0FBTCxDQUFlYSxNQUFmLEdBQXdCLENBQWpEO0FBVnFEO0FBV3JGO0FBRUQ7QUFDRjtBQUNBOzs7OztXQUNFLGtCQUFTO0FBQUE7O0FBQ1AsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDdEIsYUFBS0MsUUFBTCxDQUFjQyxRQUFkO0FBQ0E7QUFDRDs7QUFFRCxXQUFLQyxPQUFMLEdBQWVDLFdBQVcsQ0FBQ0MsR0FBWixFQUFmO0FBRUEsVUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxLQUFLSCxPQUFMLEdBQWUsS0FBS0ksT0FBckIsSUFBZ0MsS0FBS25CLFFBQWhFOztBQUNBLFVBQU1vQiwwQkFBMEIsR0FBRyxLQUFLaEIsT0FBTCxDQUFhYyxrQkFBYixDQUFuQzs7QUFFQSxVQUFNRyxXQUFXLEdBQUcsS0FBS2xCLGFBQUwsR0FBcUJpQiwwQkFBekM7QUFDQSxXQUFLdEIsU0FBTCxDQUFlQyxLQUFmLEdBQXVCLEtBQUtHLGFBQUwsR0FBcUJtQixXQUE1QztBQUVBLFVBQUksS0FBS0MsTUFBVCxFQUFpQixLQUFLQyxFQUFMLEdBQVVDLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBL0I7QUFDbEI7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDRSx1QkFBdUI7QUFDckIsVUFBSSxLQUFLM0IsU0FBTCxDQUFlQyxLQUFmLEdBQXVCLEtBQUtJLGFBQWhDLEVBQStDLE9BQU8sSUFBUDtBQUMvQyxhQUFPLEtBQVA7QUFDRDs7OztFQXhGeUJ1QixjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAcGl4aS9kaXNwbGF5JztcclxuXHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gJy4vZWZmZWN0JztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBBIHJvdGF0aW5nIGVmZmVjdCB0aGF0IGludm9sdmVzIHJvdGF0aW5nIHRoZSBnYW1lIGEgc3BlY2lmaWVkIG51bWJlciBvZiBkZWdyZWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGluaXRpYWwgYW5nbGUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbml0aWFsQW5nbGU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFuZ2xlIHRvIHJvdGF0ZSB0bywgZnJvbSAwIHRvIDM2MCB3aXRoIDAgYmVpbmcgdGhlIGRlZmF1bHQgc3RhdGUgYW5kIDM2MCBiZWluZyBhbGwgdGhlIHdheSBhcm91bmQgYmFjayB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2Rlc2lyZWRBbmdsZTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbCBwaXZvdCBvZiB0aGUgY29udGFpbmVyLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtWZWN0b3J9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBpdm90OiBWZWN0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gdXNlIGZvciB0aGlzIGVmZmVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWFzaW5nOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtDb250YWluZXJ9IGNvbnRhaW5lciBBIHJlZmVyZW5jZSB0byB0aGUgY29udGFpbmVyIHRvIGFwcGx5IHRoZSByb3RhdGUgZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBUaGUgYW5nbGUgdG8gcm90YXRlIHRvLCBmcm9tIDAgdG8gMzYwIHdpdGggMCBiZWluZyB0aGUgZGVmYXVsdCBzdGF0ZSBhbmQgMzYwIGJlaW5nIGFsbCB0aGUgd2F5IGFyb3VuZCBiYWNrIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlYXNpbmddIFRoZSBlYXNpbmcgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lciwgYW5nbGU6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWFzaW5nPzogRnVuY3Rpb24pIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbEFuZ2xlID0gY29udGFpbmVyLmFuZ2xlO1xyXG4gICAgdGhpcy5fZGVzaXJlZEFuZ2xlID0gYW5nbGVcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgIHRoaXMuX2Vhc2luZyA9IGVhc2luZyB8fCB0aGlzLmVhc2VMaW5lYXI7XHJcbiAgICB0aGlzLl9pbml0aWFsUGl2b3QgPSB7IHg6IHRoaXMuY29udGFpbmVyLnBpdm90LngsIHk6IHRoaXMuY29udGFpbmVyLnBpdm90LnkgfTtcclxuXHJcbiAgICBpZiAodGhpcy5faW5pdGlhbFBpdm90LnggPT0gMCkgdGhpcy5jb250YWluZXIucGl2b3QueCA9IHRoaXMuY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgIGlmICh0aGlzLl9pbml0aWFsUGl2b3QueSA9PSAwKSB0aGlzLmNvbnRhaW5lci5waXZvdC55ID0gdGhpcy5jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZVRocm91Z2hBbmltYXRpb24gPSB0aGlzLl9lYXNpbmcodGltZURpZmZQZXJjZW50YWdlKTtcclxuXHJcbiAgICBjb25zdCBhbmdsZUFtb3VudCA9IHRoaXMuX2Rlc2lyZWRBbmdsZSAqIHBlcmNlbnRhZ2VUaHJvdWdoQW5pbWF0aW9uO1xyXG4gICAgdGhpcy5jb250YWluZXIuYW5nbGUgPSB0aGlzLl9pbml0aWFsQW5nbGUgKyBhbmdsZUFtb3VudDtcclxuXHJcbiAgICBpZiAodGhpcy51c2VSQUYpIHRoaXMuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjb250YWluZXIncyBjdXJyZW50IGFuZ2xlIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGRlc2lyZWQgYW5nbGUuXHJcbiAgICogXHJcbiAgICogV2UgY2FuJ3QgdXNlIGNvbnRhaW5lciBhbmdsZSA9PSBkZXNpcmVkIGFuZ2xlIGJlY2F1c2Ugd2l0aCB0aGUgZ2FtZSBsb29wIHdlIG1pZ2h0IG1pc3MgdGhhdCBleGFjdCBtb21lbnQgc28gd2UgY2hlY2sgYSB2ZXJ5IHNtYWxsIHdpbmRvdy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGFuZ2xlIGNyaXRlcmlhIGlzIG1ldCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIuYW5nbGUgPiB0aGlzLl9kZXNpcmVkQW5nbGUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==