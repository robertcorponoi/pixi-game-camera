'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
var Options =
/**
 * If you want to use an existing PIXI.Ticker instance then you can pass it
 * here. If a ticker is not provided, `requestAnimationFrame` will be used
 * in its stead.
 * 
 * @property {Ticker}
 */

/**
 * @param {Object} [options] The options passed to Camera on initialization.
 * @param {Ticker} [ticker] An instance of PIXI.Ticker to be used instead of the default `requestAnimationFrame`.
 */
function Options() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Options);

  _defineProperty(this, "ticker", void 0);

  Object.assign(this, options);
};

exports.Options = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcHRpb25zLnRzIl0sIm5hbWVzIjpbIk9wdGlvbnMiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7SUFDYUEsTztBQUNYO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsbUJBQWtDO0FBQUEsTUFBdEJDLE9BQXNCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQ2hDQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IFRpY2tlciB9IGZyb20gJ0BwaXhpL3RpY2tlcic7XHJcblxyXG4vKipcclxuICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgcGFzc2VkIHRvIGNhbWVyYS1waXhpIG9uIGluaXRpYWxpemF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIElmIHlvdSB3YW50IHRvIHVzZSBhbiBleGlzdGluZyBQSVhJLlRpY2tlciBpbnN0YW5jZSB0aGVuIHlvdSBjYW4gcGFzcyBpdFxyXG4gICAqIGhlcmUuIElmIGEgdGlja2VyIGlzIG5vdCBwcm92aWRlZCwgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgd2lsbCBiZSB1c2VkXHJcbiAgICogaW4gaXRzIHN0ZWFkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7VGlja2VyfVxyXG4gICAqL1xyXG4gIHRpY2tlcj86IFRpY2tlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBwYXNzZWQgdG8gQ2FtZXJhIG9uIGluaXRpYWxpemF0aW9uLlxyXG4gICAqIEBwYXJhbSB7VGlja2VyfSBbdGlja2VyXSBBbiBpbnN0YW5jZSBvZiBQSVhJLlRpY2tlciB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0ID0ge30pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG59Il19