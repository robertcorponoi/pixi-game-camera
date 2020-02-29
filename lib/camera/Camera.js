'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Ease = require("d3-ease");

var _Fade = _interopRequireDefault(require("../effects/Fade"));

var _Shake = _interopRequireDefault(require("../effects/Shake"));

var _PanTo = _interopRequireDefault(require("../effects/PanTo"));

var _ZoomTo = _interopRequireDefault(require("../effects/ZoomTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
var Camera = /*#__PURE__*/function () {
  /**
   * The container this camera is focusing on.
   *
   * @private
   *
   * @property {PIXI.Container}
   */

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
   * @property {PIXI.Ticker}
   */

  /**
   * A reference to the PIXI Sprite to use for applying certain effects.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */

  /**
   * @param {PIXI.Container} container The container this camera is focusing on.
   * @param {PIXI.Ticker} options A reference to the PIXI Ticker, if it's being used.
   */
  function Camera(container, options) {
    _classCallCheck(this, Camera);

    _defineProperty(this, "_container", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_ticker", void 0);

    _defineProperty(this, "_filter", void 0);

    this._container = container;
    this._options = options;
    if (this._options.ticker) this._ticker = this._options.ticker;
    if (this._options.sprite && this._options.texture) this._setupFilter();
  }
  /**
   * Creates a new shake effect that can be used.
   * 
   * @param {number} [intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [duration=Infinity] The duration of the shake effect.
   */


  _createClass(Camera, [{
    key: "shake",
    value: function shake() {
      var intensity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var shake = new _Shake["default"](this._container, intensity, duration);

      this._addToTicker(shake);
    }
    /**
     * Zooms in or out.
     * 
     * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(xZoomLevel, yZoomLevel, duration) {
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _d3Ease.easeLinear;
      var zoomTo = new _ZoomTo["default"](this._container, xZoomLevel, yZoomLevel, duration, easing);

      this._addToTicker(zoomTo);
    }
    /**
     * Pans to a specific coordinate.
     * 
     * @param {number} x The x coordinate to pan to.
     * @param {number} y The y coordinate to pan to.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     */

  }, {
    key: "panTo",
    value: function panTo(x, y, duration) {
      var panTo = new _PanTo["default"](this._container, x, y, duration);

      this._addToTicker(panTo);
    }
    /**
     * Fades in or out.
     * 
     * @param {number} color The hex code of the color to fade in or out of.
     * @param {number} opacity The opacity to fade to with 1 is fully faded and 0 being the game is fully visible.
     * @param {number} duration The amount of time until the fade completes.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */

  }, {
    key: "fadeTo",
    value: function fadeTo(color) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var duration = arguments.length > 2 ? arguments[2] : undefined;
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _d3Ease.easeLinear;
      if (!this._optionalPackagesExist()) return;
      var fade = new _Fade["default"](this._container, this._filter, color, duration, opacity, easing);

      this._addToTicker(fade);
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

          return (_this$_ticker = _this._ticker) === null || _this$_ticker === void 0 ? void 0 : _this$_ticker.remove(effectBound);
        });
        (_this$_ticker2 = this._ticker) === null || _this$_ticker2 === void 0 ? void 0 : _this$_ticker2.add(effectBound);
      } else effect.start();
    }
    /**
     * Checks to see if the sprite and texture options are present for effects that use them.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the optional packages are present or false otherwise with an error.
     */

  }, {
    key: "_optionalPackagesExist",
    value: function _optionalPackagesExist() {
      if (!this._filter) {
        console.warn('Skipping effect, PIXI.Sprite and PIXI.Texture object must be provided to use this effect.');
        return false;
      }

      return true;
    }
    /**
     * Sets up the filter, if available, to be used in effects.
     * 
     * @private
     */

  }, {
    key: "_setupFilter",
    value: function _setupFilter() {
      this._filter = new this._options.sprite(this._options.texture.WHITE);
      this._filter.width = this._container.width;
      this._filter.height = this._container.height;
      this._filter.alpha = 0;

      this._container.addChild(this._filter);
    }
  }]);

  return Camera;
}();

exports["default"] = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYW1lcmEvQ2FtZXJhLnRzIl0sIm5hbWVzIjpbIkNhbWVyYSIsImNvbnRhaW5lciIsIm9wdGlvbnMiLCJfY29udGFpbmVyIiwiX29wdGlvbnMiLCJ0aWNrZXIiLCJfdGlja2VyIiwic3ByaXRlIiwidGV4dHVyZSIsIl9zZXR1cEZpbHRlciIsImludGVuc2l0eSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJzaGFrZSIsIlNoYWtlIiwiX2FkZFRvVGlja2VyIiwieFpvb21MZXZlbCIsInlab29tTGV2ZWwiLCJlYXNpbmciLCJlYXNlTGluZWFyIiwiem9vbVRvIiwiWm9vbVRvIiwieCIsInkiLCJwYW5UbyIsIlBhblRvIiwiY29sb3IiLCJvcGFjaXR5IiwiX29wdGlvbmFsUGFja2FnZXNFeGlzdCIsImZhZGUiLCJGYWRlIiwiX2ZpbHRlciIsImVmZmVjdCIsImVmZmVjdEJvdW5kIiwidXBkYXRlIiwiYmluZCIsImZpbmlzaGVkIiwiYWRkIiwicmVtb3ZlIiwic3RhcnQiLCJjb25zb2xlIiwid2FybiIsIldISVRFIiwid2lkdGgiLCJoZWlnaHQiLCJhbHBoYSIsImFkZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUdBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTs7O0lBR3FCQSxNO0FBQ25COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7O0FBSUEsa0JBQVlDLFNBQVosRUFBdUNDLE9BQXZDLEVBQXlEO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZELFNBQUtDLFVBQUwsR0FBa0JGLFNBQWxCO0FBRUEsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFFQSxRQUFJLEtBQUtFLFFBQUwsQ0FBY0MsTUFBbEIsRUFBMEIsS0FBS0MsT0FBTCxHQUFlLEtBQUtGLFFBQUwsQ0FBY0MsTUFBN0I7QUFFMUIsUUFBSSxLQUFLRCxRQUFMLENBQWNHLE1BQWQs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WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7IGVhc2VMaW5lYXIgfSBmcm9tICdkMy1lYXNlJztcclxuXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICcuLi9lZmZlY3RzL0ZhZGUnO1xyXG5pbXBvcnQgU2hha2UgZnJvbSAnLi4vZWZmZWN0cy9TaGFrZSc7XHJcbmltcG9ydCBQYW5UbyBmcm9tICcuLi9lZmZlY3RzL1BhblRvJztcclxuaW1wb3J0IFpvb21UbyBmcm9tICcuLi9lZmZlY3RzL1pvb21Ubyc7XHJcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi4vZWZmZWN0cy9FZmZlY3QnO1xyXG5cclxuLyoqXHJcbiAqIENhbWVyYSB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGEgZ2FtZS9hbmltYXRpb24gbWFkZSB3aXRoIHBpeGlqcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciB0aGlzIGNhbWVyYSBpcyBmb2N1c2luZyBvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge1BJWEkuQ29udGFpbmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIHBhc3NlZCB0byBjYW1lcmEgcGl4aSBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlIHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIFRpY2tlciwgaWYgaXQncyBiZWluZyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlRpY2tlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF90aWNrZXI/OiBQSVhJLlRpY2tlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgU3ByaXRlIHRvIHVzZSBmb3IgYXBwbHlpbmcgY2VydGFpbiBlZmZlY3RzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlNwcml0ZX1cclxuICAgKi9cclxuICBwcml2YXRlIF9maWx0ZXI/OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UElYSS5Db250YWluZXJ9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIHRoaXMgY2FtZXJhIGlzIGZvY3VzaW5nIG9uLlxyXG4gICAqIEBwYXJhbSB7UElYSS5UaWNrZXJ9IG9wdGlvbnMgQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgVGlja2VyLCBpZiBpdCdzIGJlaW5nIHVzZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lciwgb3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnRpY2tlcikgdGhpcy5fdGlja2VyID0gdGhpcy5fb3B0aW9ucy50aWNrZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc3ByaXRlICYmIHRoaXMuX29wdGlvbnMudGV4dHVyZSkgdGhpcy5fc2V0dXBGaWx0ZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgc2hha2UgZWZmZWN0IHRoYXQgY2FuIGJlIHVzZWQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtpbnRlbnNpdHk9NV0gVGhlIGludGVuc2l0eSBvZiB0aGUgc2hha2UsIGZyb20gYSBzY2FsZSBvZiAxIHRvIDEwLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249SW5maW5pdHldIFRoZSBkdXJhdGlvbiBvZiB0aGUgc2hha2UgZWZmZWN0LlxyXG4gICAqL1xyXG4gIHNoYWtlKGludGVuc2l0eTogbnVtYmVyID0gNSwgZHVyYXRpb246IG51bWJlciA9IEluZmluaXR5KSB7XHJcbiAgICBjb25zdCBzaGFrZTogU2hha2UgPSBuZXcgU2hha2UodGhpcy5fY29udGFpbmVyLCBpbnRlbnNpdHksIGR1cmF0aW9uKTtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1RpY2tlcihzaGFrZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBab29tcyBpbiBvciBvdXQuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhab29tTGV2ZWwgVGhlIHpvb20gbGV2ZWwgdG8gem9vbSBob3Jpem9udGFsbHkgd2l0aCB2YWx1ZXMgbGFyZ2VyIHRoYW4gMSBiZWluZyB6b29tZWQgaW4gYW5kIHZhbHVlcyBzbWFsbGVyIHRoYW4gMSBiZWluZyB6b29tZWQgb3V0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5Wm9vbUxldmVsIFRoZSB6b29tIGxldmVsIHRvIHpvb20gdmVydGljYWxseSB3aXRoIHZhbHVlcyBsYXJnZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBpbiBhbmQgdmFsdWVzIHNtYWxsZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBvdXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vhc2luZz1lYXNlTGluZWFyXSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgem9vbVRvKHhab29tTGV2ZWw6IG51bWJlciwgeVpvb21MZXZlbDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc6IEZ1bmN0aW9uID0gZWFzZUxpbmVhcikge1xyXG4gICAgY29uc3Qgem9vbVRvOiBab29tVG8gPSBuZXcgWm9vbVRvKHRoaXMuX2NvbnRhaW5lciwgeFpvb21MZXZlbCwgeVpvb21MZXZlbCwgZHVyYXRpb24sIGVhc2luZyk7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIoem9vbVRvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhbnMgdG8gYSBzcGVjaWZpYyBjb29yZGluYXRlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgdG8gcGFuIHRvLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqL1xyXG4gIHBhblRvKHg6IG51bWJlciwgeTogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYW5UbzogUGFuVG8gPSBuZXcgUGFuVG8odGhpcy5fY29udGFpbmVyLCB4LCB5LCBkdXJhdGlvbik7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIocGFuVG8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmFkZXMgaW4gb3Igb3V0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xvciBUaGUgaGV4IGNvZGUgb2YgdGhlIGNvbG9yIHRvIGZhZGUgaW4gb3Igb3V0IG9mLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5IFRoZSBvcGFjaXR5IHRvIGZhZGUgdG8gd2l0aCAxIGlzIGZ1bGx5IGZhZGVkIGFuZCAwIGJlaW5nIHRoZSBnYW1lIGlzIGZ1bGx5IHZpc2libGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB1bnRpbCB0aGUgZmFkZSBjb21wbGV0ZXMuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vhc2luZz1lYXNlTGluZWFyXSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgZmFkZVRvKGNvbG9yOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciA9IDEsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZzogRnVuY3Rpb24gPSBlYXNlTGluZWFyKSB7XHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbmFsUGFja2FnZXNFeGlzdCgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZmFkZTogRmFkZSA9IG5ldyBGYWRlKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fZmlsdGVyLCBjb2xvciwgZHVyYXRpb24sIG9wYWNpdHksIGVhc2luZyk7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIoZmFkZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGFuIGVmZmVjdCB0byB0aGUgUElYSSBUaWNrZXIgaWYgaXQncyBiZWluZyB1c2VkIGFuZCByZW1vdmVzIGl0IHdoZW4gbmVjZXNzYXJ5LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtFZmZlY3R9IGVmZmVjdCBUaGUgZWZmZWN0IHRvIGFkZCB0byB0aGUgVGlja2VyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FkZFRvVGlja2VyKGVmZmVjdDogRWZmZWN0KSB7XHJcbiAgICBjb25zdCBlZmZlY3RCb3VuZDogYW55ID0gZWZmZWN0LnVwZGF0ZS5iaW5kKGVmZmVjdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3RpY2tlcikge1xyXG4gICAgICBlZmZlY3QuZmluaXNoZWQuYWRkKCgpID0+IHRoaXMuX3RpY2tlcj8ucmVtb3ZlKGVmZmVjdEJvdW5kKSk7XHJcblxyXG4gICAgICB0aGlzLl90aWNrZXI/LmFkZChlZmZlY3RCb3VuZCk7XHJcbiAgICB9IGVsc2UgZWZmZWN0LnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBzcHJpdGUgYW5kIHRleHR1cmUgb3B0aW9ucyBhcmUgcHJlc2VudCBmb3IgZWZmZWN0cyB0aGF0IHVzZSB0aGVtLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgb3B0aW9uYWwgcGFja2FnZXMgYXJlIHByZXNlbnQgb3IgZmFsc2Ugb3RoZXJ3aXNlIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uYWxQYWNrYWdlc0V4aXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLl9maWx0ZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdTa2lwcGluZyBlZmZlY3QsIFBJWEkuU3ByaXRlIGFuZCBQSVhJLlRleHR1cmUgb2JqZWN0IG11c3QgYmUgcHJvdmlkZWQgdG8gdXNlIHRoaXMgZWZmZWN0LicpO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCB0aGUgZmlsdGVyLCBpZiBhdmFpbGFibGUsIHRvIGJlIHVzZWQgaW4gZWZmZWN0cy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldHVwRmlsdGVyKCkge1xyXG4gICAgdGhpcy5fZmlsdGVyID0gbmV3IHRoaXMuX29wdGlvbnMuc3ByaXRlKHRoaXMuX29wdGlvbnMudGV4dHVyZS5XSElURSk7XHJcbiAgICBcclxuICAgIHRoaXMuX2ZpbHRlci53aWR0aCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aDtcclxuICAgIHRoaXMuX2ZpbHRlci5oZWlnaHQgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0O1xyXG4gICAgdGhpcy5fZmlsdGVyLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fZmlsdGVyKTtcclxuICB9XHJcbn1cclxuIl19