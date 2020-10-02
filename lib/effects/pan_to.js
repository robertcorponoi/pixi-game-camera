'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanTo = void 0;

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
var PanTo = /*#__PURE__*/function (_Effect) {
  _inherits(PanTo, _Effect);

  var _super = _createSuper(PanTo);

  /**
   * The (x, y) coordinate pair to pan to.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * The difference in coordinates from the current and the desired.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * Indicates whether the desired x is greater than the current x or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * Indicates whether the desired y is greater than the current y or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * @param {Container} container A reference to the container to apply the panto effect to.
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   */
  function PanTo(container, x, y, duration) {
    var _this;

    _classCallCheck(this, PanTo);

    _this = _super.call(this, container);

    _defineProperty(_assertThisInitialized(_this), "_coordinates", void 0);

    _defineProperty(_assertThisInitialized(_this), "_difference", void 0);

    _defineProperty(_assertThisInitialized(_this), "_xIsGreater", false);

    _defineProperty(_assertThisInitialized(_this), "_yIsGreater", false);

    _this._coordinates = {
      x: x,
      y: y
    };
    _this.duration = duration;
    if (_this._coordinates.x > _this.container.pivot.x) _this._xIsGreater = true;
    if (_this._coordinates.y > _this.container.pivot.y) _this._yIsGreater = true;
    _this._difference = {
      x: Math.abs(_this._coordinates.x - _this.container.pivot.x),
      y: Math.abs(_this._coordinates.y - _this.container.pivot.y)
    };
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
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = (this.current - this.started) / this.duration;
      var timeDiffPercentageNegative = (this.duration - this.current) / this.duration;
      var xPanAmount = this._xIsGreater ? this._difference.x * timeDiffPercentage : this._difference.x * timeDiffPercentageNegative;
      var yPanAmount = this._yIsGreater ? this._difference.y * timeDiffPercentage : this._difference.y * timeDiffPercentageNegative;
      this.container.pivot.x = xPanAmount;
      this.container.pivot.y = yPanAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the panto criteria has been met so that the effect can end.
     * 
     * @returns {boolean} Returns true if the panto effect is finished or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.pivot.x > this._coordinates.x - 5 && this.container.pivot.x < this._coordinates.x + 5 && this.container.pivot.y > this._coordinates.y - 5 && this.container.pivot.y < this._coordinates.y + 5) return true;
      return false;
    }
  }]);

  return PanTo;
}(_effect.Effect);

exports.PanTo = PanTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL3Bhbl90by50cyJdLCJuYW1lcyI6WyJQYW5UbyIsImNvbnRhaW5lciIsIngiLCJ5IiwiZHVyYXRpb24iLCJfY29vcmRpbmF0ZXMiLCJwaXZvdCIsIl94SXNHcmVhdGVyIiwiX3lJc0dyZWF0ZXIiLCJfZGlmZmVyZW5jZSIsIk1hdGgiLCJhYnMiLCJjcml0ZXJpYU1ldCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRGlmZlBlcmNlbnRhZ2UiLCJzdGFydGVkIiwidGltZURpZmZQZXJjZW50YWdlTmVnYXRpdmUiLCJ4UGFuQW1vdW50IiwieVBhbkFtb3VudCIsInVzZVJBRiIsImlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHYUEsSzs7Ozs7QUFDWDs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBV0E7Ozs7OztBQU1BLGlCQUFZQyxTQUFaLEVBQWtDQyxDQUFsQyxFQUE2Q0MsQ0FBN0MsRUFBd0RDLFFBQXhELEVBQTBFO0FBQUE7O0FBQUE7O0FBQ3hFLDhCQUFNSCxTQUFOOztBQUR3RTs7QUFBQTs7QUFBQSxrRUFuQnBELEtBbUJvRDs7QUFBQSxrRUFScEQsS0FRb0Q7O0FBR3hFLFVBQUtJLFlBQUwsR0FBb0I7QUFBRUgsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUFwQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsUUFBSSxNQUFLQyxZQUFMLENBQWtCSCxDQUFsQixHQUFzQixNQUFLRCxTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFDbEQsUUFBSSxNQUFLRixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFFbEQsVUFBS0MsV0FBTCxHQUFtQjtBQUFFUCxNQUFBQSxDQUFDLEVBQUVRLElBQUksQ0FBQ0MsR0FBTCxDQUFTLE1BQUtOLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLE1BQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkosQ0FBcEQsQ0FBTDtBQUE2REMsTUFBQUEsQ0FBQyxFQUFFTyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFLTixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQXBEO0FBQWhFLEtBQW5CO0FBVHdFO0FBVXpFO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtTLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLQyxRQUFMLENBQWNDLFFBQWQ7QUFDQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLZixRQUFoRTtBQUNBLFVBQU1nQiwwQkFBMEIsR0FBRyxDQUFDLEtBQUtoQixRQUFMLEdBQWdCLEtBQUtXLE9BQXRCLElBQWlDLEtBQUtYLFFBQXpFO0FBRUEsVUFBTWlCLFVBQVUsR0FBRyxLQUFLZCxXQUFMLEdBQW1CLEtBQUtFLFdBQUwsQ0FBaUJQLENBQWpCLEdBQXFCZ0Isa0JBQXhDLEdBQTZELEtBQUtULFdBQUwsQ0FBaUJQLENBQWpCLEdBQXFCa0IsMEJBQXJHO0FBQ0EsVUFBTUUsVUFBVSxHQUFHLEtBQUtkLFdBQUwsR0FBbUIsS0FBS0MsV0FBTCxDQUFpQk4sQ0FBakIsR0FBcUJlLGtCQUF4QyxHQUE2RCxLQUFLVCxXQUFMLENBQWlCTixDQUFqQixHQUFxQmlCLDBCQUFyRztBQUVBLFdBQUtuQixTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQXJCLEdBQXlCbUIsVUFBekI7QUFDQSxXQUFLcEIsU0FBTCxDQUFlSyxLQUFmLENBQXFCSCxDQUFyQixHQUF5Qm1CLFVBQXpCO0FBRUEsVUFBSSxLQUFLQyxNQUFULEVBQWlCLEtBQUtDLEVBQUwsR0FBVUMscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsT0FBRCxDQUEvQjtBQUNsQjtBQUVEOzs7Ozs7OztrQ0FLdUI7QUFDckIsVUFBSSxLQUFLekIsU0FBTCxDQUFlSyxLQUFmLENBQXFCSixDQUFyQixHQUF5QixLQUFLRyxZQUFMLENBQWtCSCxDQUFsQixHQUFzQixDQUEvQyxJQUFvRCxLQUFLRCxTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQXJCLEdBQXlCLEtBQUtHLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLENBQW5HLElBQXlHLEtBQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkgsQ0FBckIsR0FBeUIsS0FBS0UsWUFBTCxDQUFrQkYsQ0FBbEIsR0FBc0IsQ0FBeEosSUFBNkosS0FBS0YsU0FBTCxDQUFlSyxLQUFmLENBQXFCSCxDQUFyQixHQUF5QixLQUFLRSxZQUFMLENBQWtCRixDQUFsQixHQUFzQixDQUFoTixFQUFtTixPQUFPLElBQVA7QUFDbk4sYUFBTyxLQUFQO0FBQ0Q7Ozs7RUExRndCd0IsYyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHBpeGkvZGlzcGxheSc7XHJcblxyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tICcuL2VmZmVjdCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL3ZlY3Rvcic7XHJcblxyXG4vKipcclxuICogQSBwYW5uaW5nIGVmZmVjdCB0aGF0IG1ha2VzIHRoZSBjYW1lcmEgZm9jdXMgb24gYSBwb2ludCBpbiB0aGUgY29udGFpbmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhblRvIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBUaGUgKHgsIHkpIGNvb3JkaW5hdGUgcGFpciB0byBwYW4gdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jb29yZGluYXRlczogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlmZmVyZW5jZSBpbiBjb29yZGluYXRlcyBmcm9tIHRoZSBjdXJyZW50IGFuZCB0aGUgZGVzaXJlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RpZmZlcmVuY2U6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlc2lyZWQgeCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgeCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBwcml2YXRlIF94SXNHcmVhdGVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXNpcmVkIHkgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHkgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeUlzR3JlYXRlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NvbnRhaW5lcn0gY29udGFpbmVyIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgdG8gYXBwbHkgdGhlIHBhbnRvIGVmZmVjdCB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIHRvIHBhbiB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIHRvIHBhbiB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5fY29vcmRpbmF0ZXMgPSB7IHgsIHkgfTtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuXHJcbiAgICBpZiAodGhpcy5fY29vcmRpbmF0ZXMueCA+IHRoaXMuY29udGFpbmVyLnBpdm90LngpIHRoaXMuX3hJc0dyZWF0ZXIgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzLnkgPiB0aGlzLmNvbnRhaW5lci5waXZvdC55KSB0aGlzLl95SXNHcmVhdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9kaWZmZXJlbmNlID0geyB4OiBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlcy54IC0gdGhpcy5jb250YWluZXIucGl2b3QueCksIHk6IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzLnkgLSB0aGlzLmNvbnRhaW5lci5waXZvdC55KSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHRoaXMgZWZmZWN0IG9uIGEgZnJhbWUgYnkgZnJhbWUgYmFzaXMuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JpdGVyaWFNZXQoKSkge1xyXG4gICAgICB0aGlzLmZpbmlzaGVkLmRpc3BhdGNoKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlTmVnYXRpdmUgPSAodGhpcy5kdXJhdGlvbiAtIHRoaXMuY3VycmVudCkgLyB0aGlzLmR1cmF0aW9uO1xyXG5cclxuICAgIGNvbnN0IHhQYW5BbW91bnQgPSB0aGlzLl94SXNHcmVhdGVyID8gdGhpcy5fZGlmZmVyZW5jZS54ICogdGltZURpZmZQZXJjZW50YWdlIDogdGhpcy5fZGlmZmVyZW5jZS54ICogdGltZURpZmZQZXJjZW50YWdlTmVnYXRpdmU7XHJcbiAgICBjb25zdCB5UGFuQW1vdW50ID0gdGhpcy5feUlzR3JlYXRlciA/IHRoaXMuX2RpZmZlcmVuY2UueSAqIHRpbWVEaWZmUGVyY2VudGFnZSA6IHRoaXMuX2RpZmZlcmVuY2UueSAqIHRpbWVEaWZmUGVyY2VudGFnZU5lZ2F0aXZlO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnggPSB4UGFuQW1vdW50O1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueSA9IHlQYW5BbW91bnQ7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUkFGKSB0aGlzLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgcGFudG8gY3JpdGVyaWEgaGFzIGJlZW4gbWV0IHNvIHRoYXQgdGhlIGVmZmVjdCBjYW4gZW5kLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHBhbnRvIGVmZmVjdCBpcyBmaW5pc2hlZCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIucGl2b3QueCA+IHRoaXMuX2Nvb3JkaW5hdGVzLnggLSA1ICYmIHRoaXMuY29udGFpbmVyLnBpdm90LnggPCB0aGlzLl9jb29yZGluYXRlcy54ICsgNSAgJiYgdGhpcy5jb250YWluZXIucGl2b3QueSA+IHRoaXMuX2Nvb3JkaW5hdGVzLnkgLSA1ICYmIHRoaXMuY29udGFpbmVyLnBpdm90LnkgPCB0aGlzLl9jb29yZGluYXRlcy55ICsgNSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59Il19