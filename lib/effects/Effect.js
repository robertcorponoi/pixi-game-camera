'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hypergiant = _interopRequireDefault(require("hypergiant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A generic object that contains the properties and methods of all effects.
 */
var Effect = /*#__PURE__*/function () {
  /**
   * The container that the effect is happening on.
   * 
   * @property {PIXI.Container}
   */

  /**
   * The duration of thie effect.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 0
   */

  /**
   * A timestamp of when this effect was started.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0;
   */

  /**
   * A timestamp of when this effect was last run.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0
   */

  /**
   * A reference to the singal that is dispatched when this effect is finished.
   * 
   * @property {Hypergiant}
   */

  /**
   * Indicates whether requestAnimationFrame is being used or not.
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * A reference to the requestAnimationFrame id if RAF is being used.
   * 
   * @property {number} 
   */

  /**
   * @param {PIXI.Container} container The container that the effect is happening on.
   */
  function Effect(container) {
    _classCallCheck(this, Effect);

    _defineProperty(this, "container", void 0);

    _defineProperty(this, "duration", 0);

    _defineProperty(this, "started", 0);

    _defineProperty(this, "current", 0);

    _defineProperty(this, "finished", new _hypergiant["default"]());

    _defineProperty(this, "useRAF", false);

    _defineProperty(this, "id", void 0);

    this.container = container;
    this.started = performance.now();
  }
  /**
   * Starts the requestAnimationFrame loop to use this effect if a Ticker is not provided.
   */


  _createClass(Effect, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.useRAF = true;
      this.finished.add(function () {
        return cancelAnimationFrame(_this.id);
      });
      this.update();
    }
    /**
     * Updates the effect frame by frame.
     * 
     * @param {number} [delta] The delta value passed by the game loop.
     */

  }]);

  return Effect;
}();

exports["default"] = Effect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL0VmZmVjdC50cyJdLCJuYW1lcyI6WyJFZmZlY3QiLCJjb250YWluZXIiLCJIeXBlcmdpYW50Iiwic3RhcnRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwidXNlUkFGIiwiZmluaXNoZWQiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBRzhCQSxNO0FBQzVCOzs7Ozs7QUFPQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBT0E7OztBQUdBLGtCQUFZQyxTQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQUEsc0NBOUM1QixDQThDNEI7O0FBQUEscUNBckM3QixDQXFDNkI7O0FBQUEscUNBNUI3QixDQTRCNkI7O0FBQUEsc0NBckI1QixJQUFJQyxzQkFBSixFQXFCNEI7O0FBQUEsb0NBWjlCLEtBWThCOztBQUFBOztBQUNyQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtFLE9BQUwsR0FBZUMsV0FBVyxDQUFDQyxHQUFaLEVBQWY7QUFDRDtBQUVEOzs7Ozs7OzRCQUdRO0FBQUE7O0FBQ04sV0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0I7QUFBQSxlQUFNQyxvQkFBb0IsQ0FBQyxLQUFJLENBQUNDLEVBQU4sQ0FBMUI7QUFBQSxPQUFsQjtBQUVBLFdBQUtDLE1BQUw7QUFDRDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgSHlwZXJnaWFudCBmcm9tICdoeXBlcmdpYW50JztcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyaWMgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgYWxsIGVmZmVjdHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWluZXIgdGhhdCB0aGUgZWZmZWN0IGlzIGhhcHBlbmluZyBvbi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BJWEkuQ29udGFpbmVyfVxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGllIGVmZmVjdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICBkdXJhdGlvbiA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgdGltZXN0YW1wIG9mIHdoZW4gdGhpcyBlZmZlY3Qgd2FzIHN0YXJ0ZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtET01IaWdoUmVzVGltZVN0YW1wfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDA7XHJcbiAgICovXHJcbiAgc3RhcnRlZCA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgdGltZXN0YW1wIG9mIHdoZW4gdGhpcyBlZmZlY3Qgd2FzIGxhc3QgcnVuLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAwXHJcbiAgICovXHJcbiAgY3VycmVudCA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBzaW5nYWwgdGhhdCBpcyBkaXNwYXRjaGVkIHdoZW4gdGhpcyBlZmZlY3QgaXMgZmluaXNoZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxyXG4gICAqL1xyXG4gIGZpbmlzaGVkID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlzIGJlaW5nIHVzZWQgb3Igbm90LlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIHVzZVJBRiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlkIGlmIFJBRiBpcyBiZWluZyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBcclxuICAgKi9cclxuICBpZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtQSVhJLkNvbnRhaW5lcn0gY29udGFpbmVyIFRoZSBjb250YWluZXIgdGhhdCB0aGUgZWZmZWN0IGlzIGhhcHBlbmluZyBvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IFBJWEkuQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuc3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCB0byB1c2UgdGhpcyBlZmZlY3QgaWYgYSBUaWNrZXIgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy51c2VSQUYgPSB0cnVlO1xyXG4gICAgdGhpcy5maW5pc2hlZC5hZGQoKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pZCEpKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgZWZmZWN0IGZyYW1lIGJ5IGZyYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGFdIFRoZSBkZWx0YSB2YWx1ZSBwYXNzZWQgYnkgdGhlIGdhbWUgbG9vcC5cclxuICAgKi9cclxuICBhYnN0cmFjdCB1cGRhdGUoZGVsdGE/OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBlZmZlY3QgaGFzIGJlZW4gYWNoaWV2ZWQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWZmZWN0IGlzIGNvbXBsZXRlIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBjcml0ZXJpYU1ldD8oKTogYm9vbGVhbjtcclxufSJdfQ==