'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shake = void 0;

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
   * @param {Container} container A reference to the container to apply the shake effect to.
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

      if (this.criteriaMet()) {
        this.container.pivot.x = this._initialPivot.x;
        this.container.pivot.y = this._initialPivot.y;
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();

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
}(_effect.Effect);

exports.Shake = Shake;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL3NoYWtlLnRzIl0sIm5hbWVzIjpbIlNoYWtlIiwiY29udGFpbmVyIiwiaW50ZW5zaXR5IiwiZHVyYXRpb24iLCJfaW50ZW5zaXR5IiwiX2luaXRpYWxQaXZvdCIsIngiLCJwaXZvdCIsInkiLCJzdGFydGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjcml0ZXJpYU1ldCIsImZpbmlzaGVkIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwiZHgiLCJNYXRoIiwicmFuZG9tIiwiZHkiLCJ1c2VSQUYiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0lBR2FBLEs7Ozs7O0FBQ1g7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQSxpQkFBWUMsU0FBWixFQUFrQ0MsU0FBbEMsRUFBcURDLFFBQXJELEVBQXVFO0FBQUE7O0FBQUE7O0FBQ3JFLDhCQUFNRixTQUFOOztBQURxRSxpRUFoQmxELENBZ0JrRDs7QUFBQTs7QUFHckUsVUFBS0csVUFBTCxHQUFrQkYsU0FBbEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUI7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLE1BQUtMLFNBQUwsQ0FBZU0sS0FBZixDQUFxQkQsQ0FBMUI7QUFBNkJFLE1BQUFBLENBQUMsRUFBRSxNQUFLUCxTQUFMLENBQWVNLEtBQWYsQ0FBcUJDO0FBQXJELEtBQXJCO0FBRUEsVUFBS0MsT0FBTCxHQUFlQyxXQUFXLENBQUNDLEdBQVosRUFBZjtBQVBxRTtBQVF0RTtBQUVEOzs7Ozs7OzZCQUdTO0FBQUE7O0FBQ1AsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDdEIsYUFBS1gsU0FBTCxDQUFlTSxLQUFmLENBQXFCRCxDQUFyQixHQUF5QixLQUFLRCxhQUFMLENBQW1CQyxDQUE1QztBQUNBLGFBQUtMLFNBQUwsQ0FBZU0sS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsS0FBS0gsYUFBTCxDQUFtQkcsQ0FBNUM7QUFFQSxhQUFLSyxRQUFMLENBQWNDLFFBQWQ7QUFDQTtBQUNEOztBQUVELFdBQUtDLE9BQUwsR0FBZUwsV0FBVyxDQUFDQyxHQUFaLEVBQWY7O0FBRUEsVUFBTUssRUFBRSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBS2QsVUFBaEM7O0FBQ0EsVUFBTWUsRUFBRSxHQUFHRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBS2QsVUFBaEM7O0FBRUEsV0FBS0gsU0FBTCxDQUFlTSxLQUFmLENBQXFCRCxDQUFyQixHQUF5QlUsRUFBekI7QUFDQSxXQUFLZixTQUFMLENBQWVNLEtBQWYsQ0FBcUJDLENBQXJCLEdBQXlCVyxFQUF6QjtBQUVBLFVBQUksS0FBS0MsTUFBVCxFQUFpQixLQUFLQyxFQUFMLEdBQVVDLHFCQUFxQixDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLE9BQUQsQ0FBL0I7QUFDbEI7QUFFRDs7Ozs7Ozs7a0NBS3VCO0FBQ3JCLFVBQUksS0FBS1IsT0FBTCxHQUFlLEtBQUtOLE9BQXBCLElBQStCLEtBQUtOLFFBQXhDLEVBQWtELE9BQU8sSUFBUDtBQUNsRCxhQUFPLEtBQVA7QUFDRDs7OztFQW5Fd0JxQixjIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAcGl4aS9kaXNwbGF5JztcclxuXHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gJy4vZWZmZWN0JztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdmVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBBIFNoYWtlIGVmZmVjdCBpbnZvbHZlcyBzaGFraW5nIHRoZSBjYW1lcmEgYXQgdmFyaW91cyBhbW91bnRzIHVwIHRvIGEgc2VwY2lmaWVkIGludGVuc2l0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaGFrZSBleHRlbmRzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVuc2l0eSBvZiB0aGUgc2hha2UsIGZyb20gMS0xMC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDVcclxuICAgKi9cclxuICBwcml2YXRlIF9pbnRlbnNpdHkgPSA1O1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5pdGlhbCBwaXZvdCBvZiB0aGUgY29udGFpbmVyLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtWZWN0b3J9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbFBpdm90OiBWZWN0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgc2hha2UgZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlbnNpdHkgVGhlIGludGVuc2l0eSBvZiB0aGUgc2hha2UsIGZyb20gYSBzY2FsZSBvZiAxIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHNoYWtlIGVmZmVjdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lciwgaW50ZW5zaXR5OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5faW50ZW5zaXR5ID0gaW50ZW5zaXR5O1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgdGhpcy5faW5pdGlhbFBpdm90ID0geyB4OiB0aGlzLmNvbnRhaW5lci5waXZvdC54LCB5OiB0aGlzLmNvbnRhaW5lci5waXZvdC55IH07XHJcblxyXG4gICAgdGhpcy5zdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBzdGF0dXMgb2YgdGhlIHNoYWtlLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmNyaXRlcmlhTWV0KCkpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2luaXRpYWxQaXZvdC54O1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5waXZvdC55ID0gdGhpcy5faW5pdGlhbFBpdm90Lnk7XHJcblxyXG4gICAgICB0aGlzLmZpbmlzaGVkLmRpc3BhdGNoKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCBkeCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLl9pbnRlbnNpdHk7XHJcbiAgICBjb25zdCBkeSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLl9pbnRlbnNpdHk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueCA9IGR4O1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueSA9IGR5O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHNoYWtlIGVmZmVjdCBpcyBkb25lLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHNoYWtlIGVmZmVjdCBpcyBkb25lIG9yIG5vdC5cclxuICAgKi9cclxuICBjcml0ZXJpYU1ldCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQgPj0gdGhpcy5kdXJhdGlvbikgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==