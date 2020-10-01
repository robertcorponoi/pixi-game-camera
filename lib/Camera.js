'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _d3Ease = require("d3-ease");

var _Fade = _interopRequireDefault(require("./effects/Fade"));

var _Shake = _interopRequireDefault(require("./effects/Shake"));

var _PanTo = _interopRequireDefault(require("./effects/PanTo"));

var _ZoomTo = _interopRequireDefault(require("./effects/ZoomTo"));

var _Rotate = _interopRequireDefault(require("./effects/Rotate"));

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
     * Rotates to a specified angle.
     * 
     * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */

  }, {
    key: "rotate",
    value: function rotate(angle, duration) {
      var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _d3Ease.easeLinear;
      var rotate = new _Rotate["default"](this._container, angle, duration, easing);

      this._addToTicker(rotate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYW1lcmEudHMiXSwibmFtZXMiOlsiQ2FtZXJhIiwiY29udGFpbmVyIiwib3B0aW9ucyIsIl9jb250YWluZXIiLCJfb3B0aW9ucyIsInRpY2tlciIsIl90aWNrZXIiLCJzcHJpdGUiLCJ0ZXh0dXJlIiwiX3NldHVwRmlsdGVyIiwiaW50ZW5zaXR5IiwiZHVyYXRpb24iLCJJbmZpbml0eSIsInNoYWtlIiwiU2hha2UiLCJfYWRkVG9UaWNrZXIiLCJ4Wm9vbUxldmVsIiwieVpvb21MZXZlbCIsImVhc2luZyIsImVhc2VMaW5lYXIiLCJ6b29tVG8iLCJab29tVG8iLCJ4IiwieSIsInBhblRvIiwiUGFuVG8iLCJjb2xvciIsIm9wYWNpdHkiLCJfb3B0aW9uYWxQYWNrYWdlc0V4aXN0IiwiZmFkZSIsIkZhZGUiLCJfZmlsdGVyIiwiYW5nbGUiLCJyb3RhdGUiLCJSb3RhdGUiLCJlZmZlY3QiLCJlZmZlY3RCb3VuZCIsInVwZGF0ZSIsImJpbmQiLCJmaW5pc2hlZCIsImFkZCIsInJlbW92ZSIsInN0YXJ0IiwiY29uc29sZSIsIndhcm4iLCJXSElURSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxwaGEiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFHQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7OztJQUdxQkEsTTtBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7OztBQUlBLGtCQUFZQyxTQUFaLEVBQXVDQyxPQUF2QyxFQUF5RDtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUN2RCxTQUFLQyxVQUFMLEdBQWtCRixTQUFsQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JGLE9BQWhCO0FBRUEsUUFBSSxLQUFLRSxRQUFMLENBQWNDLE1BQWxCLEVBQTBCLEtBQUtDLE9BQUwsR0FBZSxLQUFLRixRQUFMLENBQWNDLE1BQTdCO0FBQzFCLFFBQUks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LE9BQUwsQ0FBYWUsS0FBYixHQUFxQixLQUFLM0MsVUFBTCxDQUFnQjJDLEtBQXJDO0FBQ0EsV0FBS2YsT0FBTCxDQUFhZ0IsTUFBYixHQUFzQixLQUFLNUMsVUFBTCxDQUFnQjRDLE1BQXRDO0FBQ0EsV0FBS2hCLE9BQUwsQ0FBYWlCLEtBQWIsR0FBcUIsQ0FBckI7O0FBRUEsV0FBSzdDLFVBQUwsQ0FBZ0I4QyxRQUFoQixDQUF5QixLQUFLbEIsT0FBOUI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHsgZWFzZUxpbmVhciB9IGZyb20gJ2QzLWVhc2UnO1xyXG5cclxuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9PcHRpb25zJztcclxuXHJcbmltcG9ydCBGYWRlIGZyb20gJy4vZWZmZWN0cy9GYWRlJztcclxuaW1wb3J0IFNoYWtlIGZyb20gJy4vZWZmZWN0cy9TaGFrZSc7XHJcbmltcG9ydCBQYW5UbyBmcm9tICcuL2VmZmVjdHMvUGFuVG8nO1xyXG5pbXBvcnQgWm9vbVRvIGZyb20gJy4vZWZmZWN0cy9ab29tVG8nO1xyXG5pbXBvcnQgUm90YXRlIGZyb20gJy4vZWZmZWN0cy9Sb3RhdGUnO1xyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vZWZmZWN0cy9FZmZlY3QnO1xyXG5cclxuLyoqXHJcbiAqIENhbWVyYSB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGEgZ2FtZS9hbmltYXRpb24gbWFkZSB3aXRoIHBpeGlqcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbnRhaW5lciB0aGlzIGNhbWVyYSBpcyBmb2N1c2luZyBvbi5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge1BJWEkuQ29udGFpbmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIHBhc3NlZCB0byBjYW1lcmEgcGl4aSBvbiBpbml0aWFsaXphdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlIHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIFRpY2tlciwgaWYgaXQncyBiZWluZyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlRpY2tlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF90aWNrZXI/OiBQSVhJLlRpY2tlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgU3ByaXRlIHRvIHVzZSBmb3IgYXBwbHlpbmcgY2VydGFpbiBlZmZlY3RzLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLlNwcml0ZX1cclxuICAgKi9cclxuICBwcml2YXRlIF9maWx0ZXI/OiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UElYSS5Db250YWluZXJ9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIHRoaXMgY2FtZXJhIGlzIGZvY3VzaW5nIG9uLlxyXG4gICAqIEBwYXJhbSB7UElYSS5UaWNrZXJ9IG9wdGlvbnMgQSByZWZlcmVuY2UgdG8gdGhlIFBJWEkgVGlja2VyLCBpZiBpdCdzIGJlaW5nIHVzZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lciwgb3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMudGlja2VyKSB0aGlzLl90aWNrZXIgPSB0aGlzLl9vcHRpb25zLnRpY2tlcjtcclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNwcml0ZSAmJiB0aGlzLl9vcHRpb25zLnRleHR1cmUpIHRoaXMuX3NldHVwRmlsdGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHNoYWtlIGVmZmVjdCB0aGF0IGNhbiBiZSB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaW50ZW5zaXR5PTVdIFRoZSBpbnRlbnNpdHkgb2YgdGhlIHNoYWtlLCBmcm9tIGEgc2NhbGUgb2YgMSB0byAxMC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPUluZmluaXR5XSBUaGUgZHVyYXRpb24gb2YgdGhlIHNoYWtlIGVmZmVjdC5cclxuICAgKi9cclxuICBzaGFrZShpbnRlbnNpdHk6IG51bWJlciA9IDUsIGR1cmF0aW9uOiBudW1iZXIgPSBJbmZpbml0eSkge1xyXG4gICAgY29uc3Qgc2hha2UgPSBuZXcgU2hha2UodGhpcy5fY29udGFpbmVyLCBpbnRlbnNpdHksIGR1cmF0aW9uKTtcclxuICAgIHRoaXMuX2FkZFRvVGlja2VyKHNoYWtlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFpvb21zIGluIG9yIG91dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0geFpvb21MZXZlbCBUaGUgem9vbSBsZXZlbCB0byB6b29tIGhvcml6b250YWxseSB3aXRoIHZhbHVlcyBsYXJnZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBpbiBhbmQgdmFsdWVzIHNtYWxsZXIgdGhhbiAxIGJlaW5nIHpvb21lZCBvdXQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlab29tTGV2ZWwgVGhlIHpvb20gbGV2ZWwgdG8gem9vbSB2ZXJ0aWNhbGx5IHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZWFzaW5nPWVhc2VMaW5lYXJdIFRoZSBlYXNpbmcgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZC5cclxuICAgKi9cclxuICB6b29tVG8oeFpvb21MZXZlbDogbnVtYmVyLCB5Wm9vbUxldmVsOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZzogRnVuY3Rpb24gPSBlYXNlTGluZWFyKSB7XHJcbiAgICBjb25zdCB6b29tVG8gPSBuZXcgWm9vbVRvKHRoaXMuX2NvbnRhaW5lciwgeFpvb21MZXZlbCwgeVpvb21MZXZlbCwgZHVyYXRpb24sIGVhc2luZyk7XHJcbiAgICB0aGlzLl9hZGRUb1RpY2tlcih6b29tVG8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFucyB0byBhIHNwZWNpZmljIGNvb3JkaW5hdGUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSB0byBwYW4gdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSB0byBwYW4gdG8uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICovXHJcbiAgcGFuVG8oeDogbnVtYmVyLCB5OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBhblRvID0gbmV3IFBhblRvKHRoaXMuX2NvbnRhaW5lciwgeCwgeSwgZHVyYXRpb24pO1xyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIocGFuVG8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmFkZXMgaW4gb3Igb3V0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2xvciBUaGUgaGV4IGNvZGUgb2YgdGhlIGNvbG9yIHRvIGZhZGUgaW4gb3Igb3V0IG9mLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcGFjaXR5IFRoZSBvcGFjaXR5IHRvIGZhZGUgdG8gd2l0aCAxIGlzIGZ1bGx5IGZhZGVkIGFuZCAwIGJlaW5nIHRoZSBnYW1lIGlzIGZ1bGx5IHZpc2libGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB1bnRpbCB0aGUgZmFkZSBjb21wbGV0ZXMuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vhc2luZz1lYXNlTGluZWFyXSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgZmFkZVRvKGNvbG9yOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciA9IDEsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZzogRnVuY3Rpb24gPSBlYXNlTGluZWFyKSB7XHJcbiAgICBpZiAoIXRoaXMuX29wdGlvbmFsUGFja2FnZXNFeGlzdCgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZmFkZSA9IG5ldyBGYWRlKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fZmlsdGVyLCBjb2xvciwgZHVyYXRpb24sIG9wYWNpdHksIGVhc2luZyk7XHJcbiAgICB0aGlzLl9hZGRUb1RpY2tlcihmYWRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvdGF0ZXMgdG8gYSBzcGVjaWZpZWQgYW5nbGUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIFRoZSBhbmdsZSB0byByb3RhdGUgdG8sIGZyb20gMCB0byAzNjAgd2l0aCAwIGJlaW5nIHRoZSBkZWZhdWx0IHN0YXRlIGFuZCAzNjAgYmVpbmcgYWxsIHRoZSB3YXkgYXJvdW5kIGJhY2sgdG8gdGhlIGRlZmF1bHQgc3RhdGUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IHRoZSBlZmZlY3Qgc2hvdWxkIHRha2UuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vhc2luZz1lYXNlTGluZWFyXSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgcm90YXRlKGFuZ2xlOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGVhc2luZzogRnVuY3Rpb24gPSBlYXNlTGluZWFyKSB7XHJcbiAgICBjb25zdCByb3RhdGUgPSBuZXcgUm90YXRlKHRoaXMuX2NvbnRhaW5lciwgYW5nbGUsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIocm90YXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gZWZmZWN0IHRvIHRoZSBQSVhJIFRpY2tlciBpZiBpdCdzIGJlaW5nIHVzZWQgYW5kIHJlbW92ZXMgaXQgd2hlbiBuZWNlc3NhcnkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0VmZmVjdH0gZWZmZWN0IFRoZSBlZmZlY3QgdG8gYWRkIHRvIHRoZSBUaWNrZXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfYWRkVG9UaWNrZXIoZWZmZWN0OiBFZmZlY3QpIHtcclxuICAgIGNvbnN0IGVmZmVjdEJvdW5kID0gZWZmZWN0LnVwZGF0ZS5iaW5kKGVmZmVjdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3RpY2tlcikge1xyXG4gICAgICBlZmZlY3QuZmluaXNoZWQuYWRkKCgpID0+IHRoaXMuX3RpY2tlcj8ucmVtb3ZlKGVmZmVjdEJvdW5kKSk7XHJcbiAgICAgIHRoaXMuX3RpY2tlcj8uYWRkKGVmZmVjdEJvdW5kKTtcclxuICAgIH0gZWxzZSBlZmZlY3Quc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHNwcml0ZSBhbmQgdGV4dHVyZSBvcHRpb25zIGFyZSBwcmVzZW50IGZvciBlZmZlY3RzIHRoYXQgdXNlIHRoZW0uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBvcHRpb25hbCBwYWNrYWdlcyBhcmUgcHJlc2VudCBvciBmYWxzZSBvdGhlcndpc2Ugd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25hbFBhY2thZ2VzRXhpc3QoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuX2ZpbHRlcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1NraXBwaW5nIGVmZmVjdCwgUElYSS5TcHJpdGUgYW5kIFBJWEkuVGV4dHVyZSBvYmplY3QgbXVzdCBiZSBwcm92aWRlZCB0byB1c2UgdGhpcyBlZmZlY3QuJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZpbHRlciwgaWYgYXZhaWxhYmxlLCB0byBiZSB1c2VkIGluIGVmZmVjdHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9zZXR1cEZpbHRlcigpIHtcclxuICAgIHRoaXMuX2ZpbHRlciA9IG5ldyB0aGlzLl9vcHRpb25zLnNwcml0ZSh0aGlzLl9vcHRpb25zLnRleHR1cmUuV0hJVEUpO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlci53aWR0aCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aDtcclxuICAgIHRoaXMuX2ZpbHRlci5oZWlnaHQgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0O1xyXG4gICAgdGhpcy5fZmlsdGVyLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fZmlsdGVyKTtcclxuICB9XHJcbn1cclxuIl19