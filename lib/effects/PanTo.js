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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
var PanTo = /*#__PURE__*/function (_Effect) {
  _inherits(PanTo, _Effect);

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanTo).call(this, container));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1BhblRvLnRzIl0sIm5hbWVzIjpbIlBhblRvIiwiY29udGFpbmVyIiwieCIsInkiLCJkdXJhdGlvbiIsIl9jb29yZGluYXRlcyIsInBpdm90IiwiX3hJc0dyZWF0ZXIiLCJfeUlzR3JlYXRlciIsIl9kaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsImNyaXRlcmlhTWV0IiwiZmluaXNoZWQiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEaWZmUGVyY2VudGFnZSIsInN0YXJ0ZWQiLCJ0aW1lRGlmZlBlcmNlbnRhZ2VOZWdhdGl2ZSIsInhQYW5BbW91bnQiLCJ5UGFuQW1vdW50IiwidXNlUkFGIiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJFZmZlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHcUJBLEs7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBV0E7Ozs7OztBQU1BLGlCQUFZQyxTQUFaLEVBQXVDQyxDQUF2QyxFQUFrREMsQ0FBbEQsRUFBNkRDLFFBQTdELEVBQStFO0FBQUE7O0FBQUE7O0FBQzdFLCtFQUFNSCxTQUFOOztBQUQ2RTs7QUFBQTs7QUFBQSxrRUFuQmhELEtBbUJnRDs7QUFBQSxrRUFSaEQsS0FRZ0Q7O0FBRzdFLFVBQUtJLFlBQUwsR0FBb0I7QUFBRUgsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUFwQjtBQUVBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsUUFBSSxNQUFLQyxZQUFMLENBQWtCSCxDQUFsQixHQUFzQixNQUFLRCxTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFFbEQsUUFBSSxNQUFLRixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQS9DLEVBQWtELE1BQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFFbEQsVUFBS0MsV0FBTCxHQUFtQjtBQUFFUCxNQUFBQSxDQUFDLEVBQUVRLElBQUksQ0FBQ0MsR0FBTCxDQUFTLE1BQUtOLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLE1BQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkosQ0FBcEQsQ0FBTDtBQUE2REMsTUFBQUEsQ0FBQyxFQUFFTyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFLTixZQUFMLENBQWtCRixDQUFsQixHQUFzQixNQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQXBEO0FBQWhFLEtBQW5CO0FBWDZFO0FBWTlFO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFBQTs7QUFDUCxVQUFJLEtBQUtTLFdBQUwsRUFBSixFQUF3QjtBQUN0QixhQUFLQyxRQUFMLENBQWNDLFFBQWQ7QUFFQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFFQSxVQUFNQyxrQkFBMEIsR0FBRyxDQUFDLEtBQUtILE9BQUwsR0FBZSxLQUFLSSxPQUFyQixJQUFnQyxLQUFLZixRQUF4RTtBQUNBLFVBQU1nQiwwQkFBa0MsR0FBRyxDQUFDLEtBQUtoQixRQUFMLEdBQWdCLEtBQUtXLE9BQXRCLElBQWlDLEtBQUtYLFFBQWpGO0FBRUEsVUFBTWlCLFVBQWtCLEdBQUcsS0FBS2QsV0FBTCxHQUFtQixLQUFLRSxXQUFMLENBQWlCUCxDQUFqQixHQUFxQmdCLGtCQUF4QyxHQUE2RCxLQUFLVCxXQUFMLENBQWlCUCxDQUFqQixHQUFxQmtCLDBCQUE3RztBQUNBLFVBQU1FLFVBQWtCLEdBQUcsS0FBS2QsV0FBTCxHQUFtQixLQUFLQyxXQUFMLENBQWlCTixDQUFqQixHQUFxQmUsa0JBQXhDLEdBQTZELEtBQUtULFdBQUwsQ0FBaUJOLENBQWpCLEdBQXFCaUIsMEJBQTdHO0FBRUEsV0FBS25CLFNBQUwsQ0FBZUssS0FBZixDQUFxQkosQ0FBckIsR0FBeUJtQixVQUF6QjtBQUNBLFdBQUtwQixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQXJCLEdBQXlCbUIsVUFBekI7QUFFQSxVQUFJLEtBQUtDLE1BQVQsRUFBaUIsS0FBS0MsRUFBTCxHQUFVQyxxQkFBcUIsQ0FBQztBQUFBLGVBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxPQUFELENBQS9CO0FBQ2xCO0FBRUQ7Ozs7Ozs7O2tDQUt1QjtBQUNyQixVQUFJLEtBQUt6QixTQUFMLENBQWVLLEtBQWYsQ0FBcUJKLENBQXJCLEdBQXlCLEtBQUtHLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCLENBQS9DLElBQW9ELEtBQUtELFNBQUwsQ0FBZUssS0FBZixDQUFxQkosQ0FBckIsR0FBeUIsS0FBS0csWUFBTCxDQUFrQkgsQ0FBbEIsR0FBc0IsQ0FBbkcsSUFBeUcsS0FBS0QsU0FBTCxDQUFlSyxLQUFmLENBQXFCSCxDQUFyQixHQUF5QixLQUFLRSxZQUFMLENBQWtCRixDQUFsQixHQUFzQixDQUF4SixJQUE2SixLQUFLRixTQUFMLENBQWVLLEtBQWYsQ0FBcUJILENBQXJCLEdBQXlCLEtBQUtFLFlBQUwsQ0FBa0JGLENBQWxCLEdBQXNCLENBQWhOLEVBQW1OLE9BQU8sSUFBUDtBQUVuTixhQUFPLEtBQVA7QUFDRDs7OztFQTlGZ0N3QixtQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuXHJcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9FZmZlY3QnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL2ludGVyZmFjZS9WZWN0b3InO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFubmluZyBlZmZlY3QgdGhhdCBtYWtlcyB0aGUgY2FtZXJhIGZvY3VzIG9uIGEgcG9pbnQgaW4gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhblRvIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBUaGUgKHgsIHkpIGNvb3JkaW5hdGUgcGFpciB0byBwYW4gdG8uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1ZlY3Rvcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jb29yZGluYXRlczogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlmZmVyZW5jZSBpbiBjb29yZGluYXRlcyBmcm9tIHRoZSBjdXJyZW50IGFuZCB0aGUgZGVzaXJlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RpZmZlcmVuY2U6IFZlY3RvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlc2lyZWQgeCBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgeCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBwcml2YXRlIF94SXNHcmVhdGVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXNpcmVkIHkgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHkgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfeUlzR3JlYXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgcGFudG8gZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0geyB4LCB5IH07XHJcblxyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb29yZGluYXRlcy54ID4gdGhpcy5jb250YWluZXIucGl2b3QueCkgdGhpcy5feElzR3JlYXRlciA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Nvb3JkaW5hdGVzLnkgPiB0aGlzLmNvbnRhaW5lci5waXZvdC55KSB0aGlzLl95SXNHcmVhdGVyID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9kaWZmZXJlbmNlID0geyB4OiBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlcy54IC0gdGhpcy5jb250YWluZXIucGl2b3QueCksIHk6IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzLnkgLSB0aGlzLmNvbnRhaW5lci5waXZvdC55KSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHRoaXMgZWZmZWN0IG9uIGEgZnJhbWUgYnkgZnJhbWUgYmFzaXMuXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JpdGVyaWFNZXQoKSkge1xyXG4gICAgICB0aGlzLmZpbmlzaGVkLmRpc3BhdGNoKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpbWVEaWZmUGVyY2VudGFnZTogbnVtYmVyID0gKHRoaXMuY3VycmVudCAtIHRoaXMuc3RhcnRlZCkgLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgY29uc3QgdGltZURpZmZQZXJjZW50YWdlTmVnYXRpdmU6IG51bWJlciA9ICh0aGlzLmR1cmF0aW9uIC0gdGhpcy5jdXJyZW50KSAvIHRoaXMuZHVyYXRpb247XHJcblxyXG4gICAgY29uc3QgeFBhbkFtb3VudDogbnVtYmVyID0gdGhpcy5feElzR3JlYXRlciA/IHRoaXMuX2RpZmZlcmVuY2UueCAqIHRpbWVEaWZmUGVyY2VudGFnZSA6IHRoaXMuX2RpZmZlcmVuY2UueCAqIHRpbWVEaWZmUGVyY2VudGFnZU5lZ2F0aXZlO1xyXG4gICAgY29uc3QgeVBhbkFtb3VudDogbnVtYmVyID0gdGhpcy5feUlzR3JlYXRlciA/IHRoaXMuX2RpZmZlcmVuY2UueSAqIHRpbWVEaWZmUGVyY2VudGFnZSA6IHRoaXMuX2RpZmZlcmVuY2UueSAqIHRpbWVEaWZmUGVyY2VudGFnZU5lZ2F0aXZlO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnggPSB4UGFuQW1vdW50O1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueSA9IHlQYW5BbW91bnQ7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlUkFGKSB0aGlzLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgcGFudG8gY3JpdGVyaWEgaGFzIGJlZW4gbWV0IHNvIHRoYXQgdGhlIGVmZmVjdCBjYW4gZW5kLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHBhbnRvIGVmZmVjdCBpcyBmaW5pc2hlZCBvciBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgY3JpdGVyaWFNZXQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIucGl2b3QueCA+IHRoaXMuX2Nvb3JkaW5hdGVzLnggLSA1ICYmIHRoaXMuY29udGFpbmVyLnBpdm90LnggPCB0aGlzLl9jb29yZGluYXRlcy54ICsgNSAgJiYgdGhpcy5jb250YWluZXIucGl2b3QueSA+IHRoaXMuX2Nvb3JkaW5hdGVzLnkgLSA1ICYmIHRoaXMuY29udGFpbmVyLnBpdm90LnkgPCB0aGlzLl9jb29yZGluYXRlcy55ICsgNSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdfQ==