'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
var Options =
/**
 * A reference to the PIXI.Sprite object.
 * 
 * This is necessary for some effects such as fade effects.
 * 
 * @property {PIXI.Sprite}
 */

/**
 * A reference to the PIXI.Texture object.
 * 
 * This is used along with the PIXI.Sprite option to set textures for some of the effects.
 * 
 * @property {PIXI.Texture}
 */

/**
 * A reference to the PIXI ticker if it's being used.
 * 
 * If the PIXI ticker is not used then updates will have to be called manually.
 * 
 * @property {PIXI.Ticker}
 */

/**
 * @param {Object} options The optionas passed to camera-pixi on initialization.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "sprite", void 0);

  _defineProperty(this, "texture", void 0);

  _defineProperty(this, "ticker", void 0);

  Object.assign(this, options);
};

exports["default"] = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcHRpb25zLnRzIl0sIm5hbWVzIjpbIk9wdGlvbnMiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFJQTs7O0lBR3FCQSxPO0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7QUFHQSxpQkFBWUMsT0FBWixFQUE2QjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMzQkMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIHBhc3NlZCB0byBjYW1lcmEtcGl4aSBvbiBpbml0aWFsaXphdGlvbi5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJLlNwcml0ZSBvYmplY3QuXHJcbiAgICogXHJcbiAgICogVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHNvbWUgZWZmZWN0cyBzdWNoIGFzIGZhZGUgZWZmZWN0cy5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BJWEkuU3ByaXRlfVxyXG4gICAqL1xyXG4gIHNwcml0ZT86IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkuVGV4dHVyZSBvYmplY3QuXHJcbiAgICogXHJcbiAgICogVGhpcyBpcyB1c2VkIGFsb25nIHdpdGggdGhlIFBJWEkuU3ByaXRlIG9wdGlvbiB0byBzZXQgdGV4dHVyZXMgZm9yIHNvbWUgb2YgdGhlIGVmZmVjdHMuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlRleHR1cmV9XHJcbiAgICovXHJcbiAgdGV4dHVyZT86IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgdGlja2VyIGlmIGl0J3MgYmVpbmcgdXNlZC5cclxuICAgKiBcclxuICAgKiBJZiB0aGUgUElYSSB0aWNrZXIgaXMgbm90IHVzZWQgdGhlbiB1cGRhdGVzIHdpbGwgaGF2ZSB0byBiZSBjYWxsZWQgbWFudWFsbHkuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlRpY2tlcn1cclxuICAgKi9cclxuICB0aWNrZXI/OiBQSVhJLlRpY2tlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbmFzIHBhc3NlZCB0byBjYW1lcmEtcGl4aSBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG59Il19