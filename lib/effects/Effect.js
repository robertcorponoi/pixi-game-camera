'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect = void 0;

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
   * @property {Container}
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
   * @param {Container} container The container that the effect is happening on.
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
     * The default ease-linear easing function used if no easing function is provided.
     * 
     * @param {number} t The percent we are currently through the animation.
     */

  }, {
    key: "easeLinear",
    value: function easeLinear(t) {
      return +t;
    }
    /**
     * Updates the effect frame by frame.
     * 
     * @param {number} [delta] The delta value passed by the game loop.
     */

  }]);

  return Effect;
}();

exports.Effect = Effect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL2VmZmVjdC50cyJdLCJuYW1lcyI6WyJFZmZlY3QiLCJjb250YWluZXIiLCJIeXBlcmdpYW50Iiwic3RhcnRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwidXNlUkFGIiwiZmluaXNoZWQiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwidXBkYXRlIiwidCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdzQkEsTTtBQUNwQjs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7O0FBT0E7Ozs7Ozs7O0FBU0E7Ozs7OztBQU9BOzs7QUFHQSxrQkFBWUMsU0FBWixFQUFrQztBQUFBOztBQUFBOztBQUFBLHNDQTlDdkIsQ0E4Q3VCOztBQUFBLHFDQXJDeEIsQ0FxQ3dCOztBQUFBLHFDQTVCeEIsQ0E0QndCOztBQUFBLHNDQXJCdkIsSUFBSUMsc0JBQUosRUFxQnVCOztBQUFBLG9DQVp6QixLQVl5Qjs7QUFBQTs7QUFDaEMsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLRSxPQUFMLEdBQWVDLFdBQVcsQ0FBQ0MsR0FBWixFQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs0QkFHUTtBQUFBOztBQUNOLFdBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCO0FBQUEsZUFBTUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDQyxFQUFOLENBQTFCO0FBQUEsT0FBbEI7QUFFQSxXQUFLQyxNQUFMO0FBQ0Q7QUFFRDs7Ozs7Ozs7K0JBS1dDLEMsRUFBVztBQUNwQixhQUFPLENBQUNBLENBQVI7QUFDRDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAcGl4aS9kaXNwbGF5JztcclxuaW1wb3J0IEh5cGVyZ2lhbnQgZnJvbSAnaHlwZXJnaWFudCc7XHJcblxyXG4vKipcclxuICogQSBnZW5lcmljIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIGFsbCBlZmZlY3RzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVmZmVjdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciB0aGF0IHRoZSBlZmZlY3QgaXMgaGFwcGVuaW5nIG9uLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7Q29udGFpbmVyfVxyXG4gICAqL1xyXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhpZSBlZmZlY3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAwXHJcbiAgICovXHJcbiAgZHVyYXRpb24gPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHRpbWVzdGFtcCBvZiB3aGVuIHRoaXMgZWZmZWN0IHdhcyBzdGFydGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RE9NSGlnaFJlc1RpbWVTdGFtcH1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAwO1xyXG4gICAqL1xyXG4gIHN0YXJ0ZWQgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHRpbWVzdGFtcCBvZiB3aGVuIHRoaXMgZWZmZWN0IHdhcyBsYXN0IHJ1bi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0RPTUhpZ2hSZXNUaW1lU3RhbXB9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIGN1cnJlbnQgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc2luZ2FsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuIHRoaXMgZWZmZWN0IGlzIGZpbmlzaGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBmaW5pc2hlZCA9IG5ldyBIeXBlcmdpYW50KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHJlcXVlc3RBbmltYXRpb25GcmFtZSBpcyBiZWluZyB1c2VkIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICB1c2VSQUYgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBpZCBpZiBSQUYgaXMgYmVpbmcgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gXHJcbiAgICovXHJcbiAgaWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Q29udGFpbmVyfSBjb250YWluZXIgVGhlIGNvbnRhaW5lciB0aGF0IHRoZSBlZmZlY3QgaXMgaGFwcGVuaW5nIG9uLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuc3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCB0byB1c2UgdGhpcyBlZmZlY3QgaWYgYSBUaWNrZXIgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy51c2VSQUYgPSB0cnVlO1xyXG4gICAgdGhpcy5maW5pc2hlZC5hZGQoKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5pZCEpKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRlZmF1bHQgZWFzZS1saW5lYXIgZWFzaW5nIGZ1bmN0aW9uIHVzZWQgaWYgbm8gZWFzaW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0IFRoZSBwZXJjZW50IHdlIGFyZSBjdXJyZW50bHkgdGhyb3VnaCB0aGUgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIGVhc2VMaW5lYXIodDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gK3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBlZmZlY3QgZnJhbWUgYnkgZnJhbWUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YV0gVGhlIGRlbHRhIHZhbHVlIHBhc3NlZCBieSB0aGUgZ2FtZSBsb29wLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHVwZGF0ZShkZWx0YT86IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGVmZmVjdCBoYXMgYmVlbiBhY2hpZXZlZC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlZmZlY3QgaXMgY29tcGxldGUgb3IgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNyaXRlcmlhTWV0PygpOiBib29sZWFuO1xyXG59Il19