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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZmZlY3RzL2VmZmVjdC50cyJdLCJuYW1lcyI6WyJFZmZlY3QiLCJjb250YWluZXIiLCJIeXBlcmdpYW50Iiwic3RhcnRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwidXNlUkFGIiwiZmluaXNoZWQiLCJhZGQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwidXBkYXRlIiwidCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ3NCQSxNO0FBQ3BCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDRSxrQkFBWUMsU0FBWixFQUFrQztBQUFBOztBQUFBOztBQUFBLHNDQTlDdkIsQ0E4Q3VCOztBQUFBLHFDQXJDeEIsQ0FxQ3dCOztBQUFBLHFDQTVCeEIsQ0E0QndCOztBQUFBLHNDQXJCdkIsSUFBSUMsc0JBQUosRUFxQnVCOztBQUFBLG9DQVp6QixLQVl5Qjs7QUFBQTs7QUFDaEMsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLRSxPQUFMLEdBQWVDLFdBQVcsQ0FBQ0MsR0FBWixFQUFmO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7O1dBQ0UsaUJBQVE7QUFBQTs7QUFDTixXQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQjtBQUFBLGVBQU1DLG9CQUFvQixDQUFDLEtBQUksQ0FBQ0MsRUFBTixDQUExQjtBQUFBLE9BQWxCO0FBRUEsV0FBS0MsTUFBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLG9CQUFXQyxDQUFYLEVBQXNCO0FBQ3BCLGFBQU8sQ0FBQ0EsQ0FBUjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQHBpeGkvZGlzcGxheSc7XHJcbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiBhbGwgZWZmZWN0cy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3Qge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWluZXIgdGhhdCB0aGUgZWZmZWN0IGlzIGhhcHBlbmluZyBvbi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0NvbnRhaW5lcn1cclxuICAgKi9cclxuICBjb250YWluZXI6IENvbnRhaW5lcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoaWUgZWZmZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIGR1cmF0aW9uID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSB0aW1lc3RhbXAgb2Ygd2hlbiB0aGlzIGVmZmVjdCB3YXMgc3RhcnRlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0RPTUhpZ2hSZXNUaW1lU3RhbXB9XHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMDtcclxuICAgKi9cclxuICBzdGFydGVkID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSB0aW1lc3RhbXAgb2Ygd2hlbiB0aGlzIGVmZmVjdCB3YXMgbGFzdCBydW4uXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtET01IaWdoUmVzVGltZVN0YW1wfVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICBjdXJyZW50ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHNpbmdhbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbiB0aGlzIGVmZmVjdCBpcyBmaW5pc2hlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZmluaXNoZWQgPSBuZXcgSHlwZXJnaWFudCgpO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaXMgYmVpbmcgdXNlZCBvciBub3QuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgdXNlUkFGID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaWQgaWYgUkFGIGlzIGJlaW5nIHVzZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFxyXG4gICAqL1xyXG4gIGlkPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0NvbnRhaW5lcn0gY29udGFpbmVyIFRoZSBjb250YWluZXIgdGhhdCB0aGUgZWZmZWN0IGlzIGhhcHBlbmluZyBvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3AgdG8gdXNlIHRoaXMgZWZmZWN0IGlmIGEgVGlja2VyIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudXNlUkFGID0gdHJ1ZTtcclxuICAgIHRoaXMuZmluaXNoZWQuYWRkKCgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaWQhKSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZhdWx0IGVhc2UtbGluZWFyIGVhc2luZyBmdW5jdGlvbiB1c2VkIGlmIG5vIGVhc2luZyBmdW5jdGlvbiBpcyBwcm92aWRlZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdCBUaGUgcGVyY2VudCB3ZSBhcmUgY3VycmVudGx5IHRocm91Z2ggdGhlIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBlYXNlTGluZWFyKHQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICt0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgZWZmZWN0IGZyYW1lIGJ5IGZyYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGFdIFRoZSBkZWx0YSB2YWx1ZSBwYXNzZWQgYnkgdGhlIGdhbWUgbG9vcC5cclxuICAgKi9cclxuICBhYnN0cmFjdCB1cGRhdGUoZGVsdGE/OiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBlZmZlY3QgaGFzIGJlZW4gYWNoaWV2ZWQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWZmZWN0IGlzIGNvbXBsZXRlIG9yIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBjcml0ZXJpYU1ldD8oKTogYm9vbGVhbjtcclxufSJdfQ==