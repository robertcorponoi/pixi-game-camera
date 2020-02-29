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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL0VmZmVjdC50cyJdLCJuYW1lcyI6WyJFZmZlY3QiLCJjb250YWluZXIiLCJIeXBlcmdpYW50Iiwic3RhcnRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwidXNlUkFGIiwiZmluaXNoZWQiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBRzhCQSxNO0FBQzVCOzs7Ozs7QUFPQTs7Ozs7Ozs7OztBQVdBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7QUFPQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBT0E7OztBQUdBLGtCQUFZQyxTQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQUEsc0NBOUNwQixDQThDb0I7O0FBQUEscUNBckNSLENBcUNROztBQUFBLHFDQTVCUixDQTRCUTs7QUFBQSxzQ0FyQmhCLElBQUlDLHNCQUFKLEVBcUJnQjs7QUFBQSxvQ0FackIsS0FZcUI7O0FBQUE7O0FBQ3JDLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsU0FBS0UsT0FBTCxHQUFlQyxXQUFXLENBQUNDLEdBQVosRUFBZjtBQUNEO0FBRUQ7Ozs7Ozs7NEJBR1E7QUFBQTs7QUFDTixXQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQjtBQUFBLGVBQU1DLG9CQUFvQixDQUFDLEtBQUksQ0FBQ0MsRUFBTixDQUExQjtBQUFBLE9BQWxCO0FBRUEsV0FBS0MsTUFBTDtBQUNEO0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiBhbGwgZWZmZWN0cy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciB0aGF0IHRoZSBlZmZlY3QgaXMgaGFwcGVuaW5nIG9uLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7UElYSS5Db250YWluZXJ9XHJcbiAgICovXHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoaWUgZWZmZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHRpbWVzdGFtcCBvZiB3aGVuIHRoaXMgZWZmZWN0IHdhcyBzdGFydGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAwO1xyXG4gICAqL1xyXG4gIHN0YXJ0ZWQ6IERPTUhpZ2hSZXNUaW1lU3RhbXAgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHRpbWVzdGFtcCBvZiB3aGVuIHRoaXMgZWZmZWN0IHdhcyBsYXN0IHJ1bi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0RPTUhpZ2hSZXNUaW1lU3RhbXB9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIGN1cnJlbnQ6IERPTUhpZ2hSZXNUaW1lU3RhbXAgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc2luZ2FsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuIHRoaXMgZWZmZWN0IGlzIGZpbmlzaGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBmaW5pc2hlZDogSHlwZXJnaWFudCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHJlcXVlc3RBbmltYXRpb25GcmFtZSBpcyBiZWluZyB1c2VkIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICB1c2VSQUY6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBpZCBpZiBSQUYgaXMgYmVpbmcgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gXHJcbiAgICovXHJcbiAgaWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UElYSS5Db250YWluZXJ9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIHRoYXQgdGhlIGVmZmVjdCBpcyBoYXBwZW5pbmcgb24uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5zdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wIHRvIHVzZSB0aGlzIGVmZmVjdCBpZiBhIFRpY2tlciBpcyBub3QgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnVzZVJBRiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5maW5pc2hlZC5hZGQoKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pZCEpKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgZWZmZWN0IGZyYW1lIGJ5IGZyYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGFdIFRoZSBkZWx0YSB2YWx1ZSBwYXNzZWQgYnkgdGhlIGdhbWUgbG9vcC5cclxuICAgKi9cclxuICBhYnN0cmFjdCB1cGRhdGUoZGVsdGE/OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBlZmZlY3QgaGFzIGJlZW4gYWNoaWV2ZWQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWZmZWN0IGlzIGNvbXBsZXRlIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBjcml0ZXJpYU1ldD8oKTogYm9vbGVhbjtcclxufSJdfQ==