'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = void 0;

var _ticker = require("@pixi/ticker");

var _options = require("./options");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
var Camera = /*#__PURE__*/function () {
  /**
   * A reference to the options passed to camera pixi on initialization.
   * 
   * @private
   * 
   * @private {Options}
   */

  /**
   * A reference to the PIXI Ticker, if it's being used.
   * 
   * @private
   * 
   * @property {Ticker}
   */

  /**
   * @param {Ticker} options A reference to the PIXI Ticker, if it's being used.
   */
  function Camera(options) {
    _classCallCheck(this, Camera);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_ticker", void 0);

    this._options = new _options.Options(options);
    if (this._options.ticker) this._ticker = this._options.ticker;
  }
  /**
   * Runs a provided effect.
   * 
   * @param {Effect} effect The instance of the effect to run.
   */


  _createClass(Camera, [{
    key: "effect",
    value: function effect(_effect) {
      this._addToTicker(_effect);
    }
    /**
     * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
     * 
     * @private
     * 
     * @param {Effect} effect The effect to add to the Ticker.
     */

  }, {
    key: "_addToTicker",
    value: function _addToTicker(effect) {
      var _this = this;

      var effectBound = effect.update.bind(effect);

      if (this._ticker) {
        var _this$_ticker2;

        effect.finished.add(function () {
          var _this$_ticker;

          return (_this$_ticker = _this._ticker) === null || _this$_ticker === void 0 ? void 0 : _this$_ticker.remove(effectBound, _this);
        });
        (_this$_ticker2 = this._ticker) === null || _this$_ticker2 === void 0 ? void 0 : _this$_ticker2.add(effectBound, this, _ticker.UPDATE_PRIORITY.NORMAL);
      } else effect.start();
    }
  }]);

  return Camera;
}();

exports.Camera = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9waXhpX2dhbWVfY2FtZXJhLnRzIl0sIm5hbWVzIjpbIkNhbWVyYSIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIk9wdGlvbnMiLCJ0aWNrZXIiLCJfdGlja2VyIiwiZWZmZWN0IiwiX2FkZFRvVGlja2VyIiwiZWZmZWN0Qm91bmQiLCJ1cGRhdGUiLCJiaW5kIiwiZmluaXNoZWQiLCJhZGQiLCJyZW1vdmUiLCJVUERBVEVfUFJJT1JJVFkiLCJOT1JNQUwiLCJzdGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7SUFHYUEsTTtBQUNYOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7QUFHQSxrQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBOztBQUFBOztBQUMzQixTQUFLQyxRQUFMLEdBQWdCLElBQUlDLGdCQUFKLENBQVlGLE9BQVosQ0FBaEI7QUFDQSxRQUFJLEtBQUtDLFFBQUwsQ0FBY0UsTUFBbEIsRUFBMEIsS0FBS0MsT0FBTCxHQUFlLEtBQUtILFFBQUwsQ0FBY0UsTUFBN0I7QUFDM0I7QUFFRDs7Ozs7Ozs7OzJCQUtPRSxPLEVBQWdCO0FBQ3JCLFdBQUtDLFlBQUwsQ0FBa0JELE9BQWxCO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztpQ0FPcUJBLE0sRUFBZ0I7QUFBQTs7QUFDbkMsVUFBTUUsV0FBVyxHQUFHRixNQUFNLENBQUNHLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkosTUFBbkIsQ0FBcEI7O0FBRUEsVUFBSSxLQUFLRCxPQUFULEVBQWtCO0FBQUE7O0FBQ2hCQyxRQUFBQSxNQUFNLENBQUNLLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CO0FBQUE7O0FBQUEsa0NBQU0sS0FBSSxDQUFDUCxPQUFYLGtEQUFNLGNBQWNRLE1BQWQsQ0FBcUJMLFdBQXJCLEVBQWtDLEtBQWxDLENBQU47QUFBQSxTQUFwQjtBQUNBLCtCQUFLSCxPQUFMLGtFQUFjTyxHQUFkLENBQWtCSixXQUFsQixFQUErQixJQUEvQixFQUFxQ00sd0JBQWdCQyxNQUFyRDtBQUNELE9BSEQsTUFHT1QsTUFBTSxDQUFDVSxLQUFQO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IFRpY2tlciwgVVBEQVRFX1BSSU9SSVRZIH0gZnJvbSAnQHBpeGkvdGlja2VyJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gJy4vZWZmZWN0cy9lZmZlY3QnO1xyXG5cclxuLyoqXHJcbiAqIENhbWVyYSB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGEgZ2FtZS9hbmltYXRpb24gbWFkZSB3aXRoIHBpeGlqcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIHBhc3NlZCB0byBjYW1lcmEgcGl4aSBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlIHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIFRpY2tlciwgaWYgaXQncyBiZWluZyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtUaWNrZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGlja2VyPzogVGlja2VyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1RpY2tlcn0gb3B0aW9ucyBBIHJlZmVyZW5jZSB0byB0aGUgUElYSSBUaWNrZXIsIGlmIGl0J3MgYmVpbmcgdXNlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnRpY2tlcikgdGhpcy5fdGlja2VyID0gdGhpcy5fb3B0aW9ucy50aWNrZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSdW5zIGEgcHJvdmlkZWQgZWZmZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3QgVGhlIGluc3RhbmNlIG9mIHRoZSBlZmZlY3QgdG8gcnVuLlxyXG4gICAqL1xyXG4gIGVmZmVjdChlZmZlY3Q6IEVmZmVjdCkge1xyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIoZWZmZWN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gZWZmZWN0IHRvIHRoZSBQSVhJIFRpY2tlciBpZiBpdCdzIGJlaW5nIHVzZWQgYW5kIHJlbW92ZXMgaXQgd2hlbiBuZWNlc3NhcnkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0IFRoZSBlZmZlY3QgdG8gYWRkIHRvIHRoZSBUaWNrZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfYWRkVG9UaWNrZXIoZWZmZWN0OiBFZmZlY3QpIHtcclxuICAgIGNvbnN0IGVmZmVjdEJvdW5kID0gZWZmZWN0LnVwZGF0ZS5iaW5kKGVmZmVjdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3RpY2tlcikge1xyXG4gICAgICBlZmZlY3QuZmluaXNoZWQuYWRkKCgpID0+IHRoaXMuX3RpY2tlcj8ucmVtb3ZlKGVmZmVjdEJvdW5kLCB0aGlzKSk7XHJcbiAgICAgIHRoaXMuX3RpY2tlcj8uYWRkKGVmZmVjdEJvdW5kLCB0aGlzLCBVUERBVEVfUFJJT1JJVFkuTk9STUFMKTtcclxuICAgIH0gZWxzZSBlZmZlY3Quc3RhcnQoKTtcclxuICB9XHJcbn1cclxuIl19