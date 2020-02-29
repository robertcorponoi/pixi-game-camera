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
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
var Shake = /*#__PURE__*/function (_Effect) {
  _inherits(Shake, _Effect);

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shake).call(this, container));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL1NoYWtlLnRzIl0sIm5hbWVzIjpbIlNoYWtlIiwiY29udGFpbmVyIiwiaW50ZW5zaXR5IiwiZHVyYXRpb24iLCJfaW50ZW5zaXR5IiwiX2luaXRpYWxQaXZvdCIsIngiLCJwaXZvdCIsInkiLCJzdGFydGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjdXJyZW50IiwiY3JpdGVyaWFNZXQiLCJmaW5pc2hlZCIsImRpc3BhdGNoIiwiZHgiLCJNYXRoIiwicmFuZG9tIiwiZHkiLCJ1c2VSQUYiLCJpZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkVmZmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7OztJQUdxQkEsSzs7O0FBQ25COzs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7O0FBU0E7Ozs7O0FBS0EsaUJBQVlDLFNBQVosRUFBdUNDLFNBQXZDLEVBQTBEQyxRQUExRCxFQUE0RTtBQUFBOztBQUFBOztBQUMxRSwrRUFBTUYsU0FBTjs7QUFEMEUsaUVBaEIvQyxDQWdCK0M7O0FBQUE7O0FBRzFFLFVBQUtHLFVBQUwsR0FBa0JGLFNBQWxCO0FBRUEsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLRSxhQUFMLEdBQXFCO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxNQUFLTCxTQUFMLENBQWVNLEtBQWYsQ0FBcUJELENBQTFCO0FBQTZCRSxNQUFBQSxDQUFDLEVBQUUsTUFBS1AsU0FBTCxDQUFlTSxLQUFmLENBQXFCQztBQUFyRCxLQUFyQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFUMEU7QUFVM0U7QUFFRDs7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLFdBQUtDLE9BQUwsR0FBZUYsV0FBVyxDQUFDQyxHQUFaLEVBQWY7O0FBRUEsVUFBSSxLQUFLRSxXQUFMLEVBQUosRUFBd0I7QUFDdEIsYUFBS1osU0FBTCxDQUFlTSxLQUFmLENBQXFCRCxDQUFyQixHQUF5QixLQUFLRCxhQUFMLENBQW1CQyxDQUE1QztBQUNBLGFBQUtMLFNBQUwsQ0FBZU0sS0FBZixDQUFxQkMsQ0FBckIsR0FBeUIsS0FBS0gsYUFBTCxDQUFtQkcsQ0FBNUM7QUFFQSxhQUFLTSxRQUFMLENBQWNDLFFBQWQ7QUFFQTtBQUNEOztBQUVELFVBQU1DLEVBQVUsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtkLFVBQXhDOztBQUNBLFVBQU1lLEVBQVUsR0FBR0YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUtkLFVBQXhDOztBQUVBLFdBQUtILFNBQUwsQ0FBZU0sS0FBZixDQUFxQkQsQ0FBckIsR0FBeUJVLEVBQXpCO0FBQ0EsV0FBS2YsU0FBTCxDQUFlTSxLQUFmLENBQXFCQyxDQUFyQixHQUF5QlcsRUFBekI7QUFFQSxVQUFJLEtBQUtDLE1BQVQsRUFBaUIsS0FBS0MsRUFBTCxHQUFVQyxxQkFBcUIsQ0FBQztBQUFBLGVBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxPQUFELENBQS9CO0FBQ2xCO0FBRUQ7Ozs7Ozs7O2tDQUt1QjtBQUNyQixVQUFJLEtBQUtYLE9BQUwsR0FBZSxLQUFLSCxPQUFwQixJQUErQixLQUFLTixRQUF4QyxFQUFrRCxPQUFPLElBQVA7QUFFbEQsYUFBTyxLQUFQO0FBQ0Q7Ozs7RUF2RWdDcUIsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vRWZmZWN0JztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9pbnRlcmZhY2UvVmVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBBIFNoYWtlIGVmZmVjdCBpbnZvbHZlcyBzaGFraW5nIHRoZSBjYW1lcmEgYXQgdmFyaW91cyBhbW91bnRzIHVwIHRvIGEgc2VwY2lmaWVkIGludGVuc2l0eS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWtlIGV4dGVuZHMgRWZmZWN0IHtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZW5zaXR5IG9mIHRoZSBzaGFrZSwgZnJvbSAxLTEwLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgNVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyID0gNTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGluaXRpYWwgcGl2b3Qgb2YgdGhlIGNvbnRhaW5lci5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VmVjdG9yfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2luaXRpYWxQaXZvdDogVmVjdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciB0byBhcHBseSB0aGUgc2hha2UgZWZmZWN0IHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlbnNpdHkgVGhlIGludGVuc2l0eSBvZiB0aGUgc2hha2UsIGZyb20gYSBzY2FsZSBvZiAxIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgZHVyYXRpb24gb2YgdGhlIHNoYWtlIGVmZmVjdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IFBJWEkuQ29udGFpbmVyLCBpbnRlbnNpdHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSBpbnRlbnNpdHk7XHJcblxyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxQaXZvdCA9IHsgeDogdGhpcy5jb250YWluZXIucGl2b3QueCwgeTogdGhpcy5jb250YWluZXIucGl2b3QueSB9O1xyXG5cclxuICAgIHRoaXMuc3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgc3RhdHVzIG9mIHRoZSBzaGFrZS5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICBpZiAodGhpcy5jcml0ZXJpYU1ldCgpKSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9pbml0aWFsUGl2b3QueDtcclxuICAgICAgdGhpcy5jb250YWluZXIucGl2b3QueSA9IHRoaXMuX2luaXRpYWxQaXZvdC55O1xyXG5cclxuICAgICAgdGhpcy5maW5pc2hlZC5kaXNwYXRjaCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR4OiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5faW50ZW5zaXR5O1xyXG4gICAgY29uc3QgZHk6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLl9pbnRlbnNpdHk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueCA9IGR4O1xyXG4gICAgdGhpcy5jb250YWluZXIucGl2b3QueSA9IGR5O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZVJBRikgdGhpcy5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHNoYWtlIGVmZmVjdCBpcyBkb25lLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHNoYWtlIGVmZmVjdCBpcyBkb25lIG9yIG5vdC5cclxuICAgKi9cclxuICBjcml0ZXJpYU1ldCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgLSB0aGlzLnN0YXJ0ZWQgPj0gdGhpcy5kdXJhdGlvbikgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=