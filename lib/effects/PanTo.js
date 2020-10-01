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
   * @param {PIXI.Container} container A reference to the container to apply the panto effect to.
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
}(_Effect2["default"]);

exports["default"] = PanTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1BhblRvLnRzIl0sIm5hbWVzIjpbIlBhblRvIiwiY29udGFpbmVyIiwieCIsInkiLCJkdXJhdGlvbiIsIl9jb29yZGluYXRlcyIsInBpdm90IiwiX3hJc0dyZWF0ZXIiLCJfeUlzR3JlYXRlciIsIl9kaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsImNyaXRlcmlhTWV0IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJ0aW1lRGlmZlBlcmNlbnRhZ2VOZWdhdGl2ZSIsInhQYW5BbW91bnQiLCJ5UGFuQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0lBR3FCQSxLOzs7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBV0E7Ozs7OztBQU1BLGlCQUFZQyxTQUFaLEVBQXVDQyxDQUF2QyxFQUFrREMsQ0FBbEQsRUFBNkRDLFFBQTdELEVBQStFO0FBQUE7O0FBQUE7O0FBQzdFLDhCQUFNSCxTQUFOOztBQUQ2RTs7QUFBQTs7QUFBQSxrRUFuQnpELEtBbUJ5RDs7QUFBQSxrRUFSekQsS0FReUQ7O0FBRzdFLFVBQUtJLFlBQUwsR0FBb0I7QUFBRUgsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUFwQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsUUFBSSxNQUFLQyxZQUFMLENBQWtCSCxDQUFsQixHQUFzQixNQUFLRCxTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFDbEQsUUFBSSxNQUFLRixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFFbEQsVUFBS0MsV0FBTCxHQUFtQjtBQUFFUCxNQUFBQSxDQUFDLEVBQUVRLElBQUksQ0FBQ0MsR0FBTCxDQUFTLE1BQUtOLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLE1BQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkosQ0FBcEQsQ0FBTDtBQUE2REMsTUFBQUEsQ0FBQyxFQUFFTyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFLTixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQXBEO0FBQWhFLEtBQW5CO0FBVDZFO0FBVTlFO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtTLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLQyxRQUFMLENBQWNDLFFBQWQ7QUFDQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBa0IsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLZixRQUFoRTtBQUNBLFVBQU1nQiwwQkFBMEIsR0FBRyxDQUFDLEtBQUtoQixRQUFMLEdBQWdCLEtBQUtXLE9BQXRCLElBQWlDLEtBQUtYLFFBQXpFO0FBRUEsVUFBTWlCLFVBQVUsR0FBRyxLQUFLZCxXQUFMLEdBQW1CLEtBQUtFLFdBQUwsQ0FBaUJQLENBQWpCLEdBQXFCZ0Isa0JBQXhDLEdBQTZELEtBQUtULFdBQUwsQ0FBaUJQLENBQWpCLEdBQXFCa0IsMEJBQXJHO0FBQ0EsVUFBTUUsVUFBVSxHQUFHLEtBQUtkLFdBQUwsR0FBbUIsS0FBS0MsV0FBTCxDQUFpQk4sQ0FBakIsR0FBcUJlLGtCQUF4QyxHQUE2RCxLQUFLVCxXQUFMLENBQWlCTixDQUFqQixHQUFxQmlCLDBCQUFyRztBQUVBLFdBQUtuQixTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQXJCLEdBQXlCbUIsVUFBekI7QUFDQSxXQUFLcEIsU0FBTCxDQUFlSyxLQUFmLENBQXFCSCxDQUFyQixHQUF5Qm1CLFVBQXpCO0FBRUEsVUFBSSxLQUFLQyxNQUFULEVBQWlCLEtBQUtDLEVBQUwsR0FBVUMscUJBQXFCLENBQUM7QUFBQSxlQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsT0FBRCxDQUEvQjtBQUNsQjtBQUVEOzs7Ozs7OztrQ0FLdUI7QUFDckIsVUFBSSxLQUFLekIsU0FBTCxDQUFlSyxLQUFmLENBQXFCSixDQUFyQixHQUF5QixLQUFLRyxZQUFMLENBQWtCSCxDQUFsQixHQUFzQixDQUEvQyxJQUFvRCxLQUFLRCxTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQXJCLEdBQXlCLEtBQUtHLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLENBQW5HLElBQXlHLEtBQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkgsQ0FBckIsR0FBeUIsS0FBS0UsWUFBTCxDQUFrQkYsQ0FBbEIsR0FBc0IsQ0FBeEosSUFBNkosS0FBS0YsU0FBTCxDQUFlSyxLQUFmLENBQXFCSCxDQUFyQixHQUF5QixLQUFLRSxZQUFMLENBQWtCRixDQUFsQixHQUFzQixDQUFoTixFQUFtTixPQUFPLElBQVA7QUFDbk4sYUFBTyxLQUFQO0FBQ0Q7Ozs7RUExRmdDd0IsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vRWZmZWN0JztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9WZWN0b3InO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFubmluZyBlZmZlY3QgdGhhdCBtYWtlcyB0aGUgY2FtZXJhIGZvY3VzIG9uIGEgcG9pbnQgaW4gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhblRvIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBUaGUgKHgsIHkpIGNvb3JkaW5hdGUgcGFpciB0byBwYW4gdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jb29yZGluYXRlczogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlmZmVyZW5jZSBpbiBjb29yZGluYXRlcyBmcm9tIHRoZSBjdXJyZW50IGFuZCB0aGUgZGVzaXJlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RpZmZlcmVuY2U6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlc2lyZWQgeCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgeCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBwcml2YXRlIF94SXNHcmVhdGVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXNpcmVkIHkgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHkgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeUlzR3JlYXRlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgcGFudG8gZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0geyB4LCB5IH07XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzLnggPiB0aGlzLmNvbnRhaW5lci5waXZvdC54KSB0aGlzLl94SXNHcmVhdGVyID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLl9jb29yZGluYXRlcy55ID4gdGhpcy5jb250YWluZXIucGl2b3QueSkgdGhpcy5feUlzR3JlYXRlciA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fZGlmZmVyZW5jZSA9IHsgeDogTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXMueCAtIHRoaXMuY29udGFpbmVyLnBpdm90LngpLCB5OiBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlcy55IC0gdGhpcy5jb250YWluZXIucGl2b3QueSkgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBvZiB0aGlzIGVmZmVjdCBvbiBhIGZyYW1lIGJ5IGZyYW1lIGJhc2lzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZSA9ICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQpIC8gdGhpcy5kdXJhdGlvbjtcclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZU5lZ2F0aXZlID0gKHRoaXMuZHVyYXRpb24gLSB0aGlzLmN1cnJlbnQpIC8gdGhpcy5kdXJhdGlvbjtcclxuXHJcbiAgICBjb25zdCB4UGFuQW1vdW50ID0gdGhpcy5feElzR3JlYXRlciA/IHRoaXMuX2RpZmZlcmVuY2UueCAqIHRpbWVEaWZmUGVyY2VudGFnZSA6IHRoaXMuX2RpZmZlcmVuY2UueCAqIHRpbWVEaWZmUGVyY2VudGFnZU5lZ2F0aXZlO1xyXG4gICAgY29uc3QgeVBhbkFtb3VudCA9IHRoaXMuX3lJc0dyZWF0ZXIgPyB0aGlzLl9kaWZmZXJlbmNlLnkgKiB0aW1lRGlmZlBlcmNlbnRhZ2UgOiB0aGlzLl9kaWZmZXJlbmNlLnkgKiB0aW1lRGlmZlBlcmNlbnRhZ2VOZWdhdGl2ZTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5waXZvdC54ID0geFBhbkFtb3VudDtcclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnkgPSB5UGFuQW1vdW50O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHBhbnRvIGNyaXRlcmlhIGhhcyBiZWVuIG1ldCBzbyB0aGF0IHRoZSBlZmZlY3QgY2FuIGVuZC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBwYW50byBlZmZlY3QgaXMgZmluaXNoZWQgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhTWV0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyLnBpdm90LnggPiB0aGlzLl9jb29yZGluYXRlcy54IC0gNSAmJiB0aGlzLmNvbnRhaW5lci5waXZvdC54IDwgdGhpcy5fY29vcmRpbmF0ZXMueCArIDUgICYmIHRoaXMuY29udGFpbmVyLnBpdm90LnkgPiB0aGlzLl9jb29yZGluYXRlcy55IC0gNSAmJiB0aGlzLmNvbnRhaW5lci5waXZvdC55IDwgdGhpcy5fY29vcmRpbmF0ZXMueSArIDUpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==