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

var _Rotate = _interopRequireDefault(require("../effects/Rotate"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYW1lcmEvQ2FtZXJhLnRzIl0sIm5hbWVzIjpbIkNhbWVyYSIsImNvbnRhaW5lciIsIm9wdGlvbnMiLCJfY29udGFpbmVyIiwiX29wdGlvbnMiLCJ0aWNrZXIiLCJfdGlja2VyIiwic3ByaXRlIiwidGV4dHVyZSIsIl9zZXR1cEZpbHRlciIsImludGVuc2l0eSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJzaGFrZSIsIlNoYWtlIiwiX2FkZFRvVGlja2VyIiwieFpvb21MZXZlbCIsInlab29tTGV2ZWwiLCJlYXNpbmciLCJlYXNlTGluZWFyIiwiem9vbVRvIiwiWm9vbVRvIiwieCIsInkiLCJwYW5UbyIsIlBhblRvIiwiY29sb3IiLCJvcGFjaXR5IiwiX29wdGlvbmFsUGFja2FnZXNFeGlzdCIsImZhZGUiLCJGYWRlIiwiX2ZpbHRlciIsImFuZ2xlIiwicm90YXRlIiwiUm90YXRlIiwiZWZmZWN0IiwiZWZmZWN0Qm91bmQiLCJ1cGRhdGUiLCJiaW5kIiwiZmluaXNoZWQiLCJhZGQiLCJyZW1vdmUiLCJzdGFydCIsImNvbnNvbGUiLCJ3YXJuIiwiV0hJVEUiLCJ3aWR0aCIsImhlaWdodCIsImFscGhhIiwiYWRkQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBR0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBOzs7SUFHcUJBLE07QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7QUFJQSxrQkFBWUMsU0FBWixFQUF1Q0MsT0FBdkMsRUFBeUQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdkQsU0FBS0MsVUFBTCxHQUFrQkYsU0FBbEI7QUFFQSxTQUFLRyxRQUFMLEdBQWdCRixPQUFoQjtBQUVBLFFBQUksS0FBS0UsUUFBTCxDQUFjQyxNQUFsQixFQUEwQixLQUFLQyxPQUFMLEdBQWUsS0FBS0YsUUFBTCxDQUFjQyxNQUE3QjtB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LENBQWY7QUFFQSxXQUFLZCxPQUFMLENBQWFlLEtBQWIsR0FBcUIsS0FBSzNDLFVBQUwsQ0FBZ0IyQyxLQUFyQztBQUNBLFdBQUtmLE9BQUwsQ0FBYWdCLE1BQWIsR0FBc0IsS0FBSzVDLFVBQUwsQ0FBZ0I0QyxNQUF0QztBQUNBLFdBQUtoQixPQUFMLENBQWFpQixLQUFiLEdBQXFCLENBQXJCOztBQUVBLFdBQUs3QyxVQUFMLENBQWdCOEMsUUFBaEIsQ0FBeUIsS0FBS2xCLE9BQTlCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7IGVhc2VMaW5lYXIgfSBmcm9tICdkMy1lYXNlJztcclxuXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4uL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICcuLi9lZmZlY3RzL0ZhZGUnO1xyXG5pbXBvcnQgU2hha2UgZnJvbSAnLi4vZWZmZWN0cy9TaGFrZSc7XHJcbmltcG9ydCBQYW5UbyBmcm9tICcuLi9lZmZlY3RzL1BhblRvJztcclxuaW1wb3J0IFpvb21UbyBmcm9tICcuLi9lZmZlY3RzL1pvb21Ubyc7XHJcbmltcG9ydCBSb3RhdGUgZnJvbSAnLi4vZWZmZWN0cy9Sb3RhdGUnO1xyXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4uL2VmZmVjdHMvRWZmZWN0JztcclxuXHJcbi8qKlxyXG4gKiBDYW1lcmEgdGhhdCBjYW4gYmUgYXBwbGllZCB0byBhIGdhbWUvYW5pbWF0aW9uIG1hZGUgd2l0aCBwaXhpanMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250YWluZXIgdGhpcyBjYW1lcmEgaXMgZm9jdXNpbmcgb24uXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtQSVhJLkNvbnRhaW5lcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9jb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gY2FtZXJhIHBpeGkgb24gaW5pdGlhbGl6YXRpb24uXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZSB7T3B0aW9uc31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgUElYSSBUaWNrZXIsIGlmIGl0J3MgYmVpbmcgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7UElYSS5UaWNrZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGlja2VyPzogUElYSS5UaWNrZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIFNwcml0ZSB0byB1c2UgZm9yIGFwcGx5aW5nIGNlcnRhaW4gZWZmZWN0cy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7UElYSS5TcHJpdGV9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmlsdGVyPzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BJWEkuQ29udGFpbmVyfSBjb250YWluZXIgVGhlIGNvbnRhaW5lciB0aGlzIGNhbWVyYSBpcyBmb2N1c2luZyBvbi5cclxuICAgKiBAcGFyYW0ge1BJWEkuVGlja2VyfSBvcHRpb25zIEEgcmVmZXJlbmNlIHRvIHRoZSBQSVhJIFRpY2tlciwgaWYgaXQncyBiZWluZyB1c2VkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogUElYSS5Db250YWluZXIsIG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBpZiAodGhpcy5fb3B0aW9ucy50aWNrZXIpIHRoaXMuX3RpY2tlciA9IHRoaXMuX29wdGlvbnMudGlja2VyO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLnNwcml0ZSAmJiB0aGlzLl9vcHRpb25zLnRleHR1cmUpIHRoaXMuX3NldHVwRmlsdGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHNoYWtlIGVmZmVjdCB0aGF0IGNhbiBiZSB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaW50ZW5zaXR5PTVdIFRoZSBpbnRlbnNpdHkgb2YgdGhlIHNoYWtlLCBmcm9tIGEgc2NhbGUgb2YgMSB0byAxMC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPUluZmluaXR5XSBUaGUgZHVyYXRpb24gb2YgdGhlIHNoYWtlIGVmZmVjdC5cclxuICAgKi9cclxuICBzaGFrZShpbnRlbnNpdHk6IG51bWJlciA9IDUsIGR1cmF0aW9uOiBudW1iZXIgPSBJbmZpbml0eSkge1xyXG4gICAgY29uc3Qgc2hha2U6IFNoYWtlID0gbmV3IFNoYWtlKHRoaXMuX2NvbnRhaW5lciwgaW50ZW5zaXR5LCBkdXJhdGlvbik7XHJcblxyXG4gICAgdGhpcy5fYWRkVG9UaWNrZXIoc2hha2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWm9vbXMgaW4gb3Igb3V0LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4Wm9vbUxldmVsIFRoZSB6b29tIGxldmVsIHRvIHpvb20gaG9yaXpvbnRhbGx5IHdpdGggdmFsdWVzIGxhcmdlciB0aGFuIDEgYmVpbmcgem9vbWVkIGluIGFuZCB2YWx1ZXMgc21hbGxlciB0aGFuIDEgYmVpbmcgem9vbWVkIG91dC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geVpvb21MZXZlbCBUaGUgem9vbSBsZXZlbCB0byB6b29tIHZlcnRpY2FsbHkgd2l0aCB2YWx1ZXMgbGFyZ2VyIHRoYW4gMSBiZWluZyB6b29tZWQgaW4gYW5kIHZhbHVlcyBzbWFsbGVyIHRoYW4gMSBiZWluZyB6b29tZWQgb3V0LlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCB0aGUgZWZmZWN0IHNob3VsZCB0YWtlLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlYXNpbmc9ZWFzZUxpbmVhcl0gVGhlIGVhc2luZyBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIHpvb21Ubyh4Wm9vbUxldmVsOiBudW1iZXIsIHlab29tTGV2ZWw6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWFzaW5nOiBGdW5jdGlvbiA9IGVhc2VMaW5lYXIpIHtcclxuICAgIGNvbnN0IHpvb21UbzogWm9vbVRvID0gbmV3IFpvb21Ubyh0aGlzLl9jb250YWluZXIsIHhab29tTGV2ZWwsIHlab29tTGV2ZWwsIGR1cmF0aW9uLCBlYXNpbmcpO1xyXG5cclxuICAgIHRoaXMuX2FkZFRvVGlja2VyKHpvb21Ubyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYW5zIHRvIGEgc3BlY2lmaWMgY29vcmRpbmF0ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIHRvIHBhbiB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIHRvIHBhbiB0by5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKi9cclxuICBwYW5Ubyh4OiBudW1iZXIsIHk6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgY29uc3QgcGFuVG86IFBhblRvID0gbmV3IFBhblRvKHRoaXMuX2NvbnRhaW5lciwgeCwgeSwgZHVyYXRpb24pO1xyXG5cclxuICAgIHRoaXMuX2FkZFRvVGlja2VyKHBhblRvKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZhZGVzIGluIG9yIG91dC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sb3IgVGhlIGhleCBjb2RlIG9mIHRoZSBjb2xvciB0byBmYWRlIGluIG9yIG91dCBvZi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3BhY2l0eSBUaGUgb3BhY2l0eSB0byBmYWRlIHRvIHdpdGggMSBpcyBmdWxseSBmYWRlZCBhbmQgMCBiZWluZyB0aGUgZ2FtZSBpcyBmdWxseSB2aXNpYmxlLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdW50aWwgdGhlIGZhZGUgY29tcGxldGVzLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlYXNpbmc9ZWFzZUxpbmVhcl0gVGhlIGVhc2luZyBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkLlxyXG4gICAqL1xyXG4gIGZhZGVUbyhjb2xvcjogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIgPSAxLCBkdXJhdGlvbjogbnVtYmVyLCBlYXNpbmc6IEZ1bmN0aW9uID0gZWFzZUxpbmVhcikge1xyXG4gICAgaWYgKCF0aGlzLl9vcHRpb25hbFBhY2thZ2VzRXhpc3QoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZhZGU6IEZhZGUgPSBuZXcgRmFkZSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2ZpbHRlciwgY29sb3IsIGR1cmF0aW9uLCBvcGFjaXR5LCBlYXNpbmcpO1xyXG5cclxuICAgIHRoaXMuX2FkZFRvVGlja2VyKGZhZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm90YXRlcyB0byBhIHNwZWNpZmllZCBhbmdsZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgVGhlIGFuZ2xlIHRvIHJvdGF0ZSB0bywgZnJvbSAwIHRvIDM2MCB3aXRoIDAgYmVpbmcgdGhlIGRlZmF1bHQgc3RhdGUgYW5kIDM2MCBiZWluZyBhbGwgdGhlIHdheSBhcm91bmQgYmFjayB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgdGhlIGVmZmVjdCBzaG91bGQgdGFrZS5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZWFzaW5nPWVhc2VMaW5lYXJdIFRoZSBlYXNpbmcgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgdXNlZC5cclxuICAgKi9cclxuICByb3RhdGUoYW5nbGU6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWFzaW5nOiBGdW5jdGlvbiA9IGVhc2VMaW5lYXIpIHtcclxuICAgIGNvbnN0IHJvdGF0ZTogUm90YXRlID0gbmV3IFJvdGF0ZSh0aGlzLl9jb250YWluZXIsIGFuZ2xlLCBkdXJhdGlvbiwgZWFzaW5nKTtcclxuXHJcbiAgICB0aGlzLl9hZGRUb1RpY2tlcihyb3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBlZmZlY3QgdG8gdGhlIFBJWEkgVGlja2VyIGlmIGl0J3MgYmVpbmcgdXNlZCBhbmQgcmVtb3ZlcyBpdCB3aGVuIG5lY2Vzc2FyeS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RWZmZWN0fSBlZmZlY3QgVGhlIGVmZmVjdCB0byBhZGQgdG8gdGhlIFRpY2tlci5cclxuICAgKi9cclxuICBwcml2YXRlIF9hZGRUb1RpY2tlcihlZmZlY3Q6IEVmZmVjdCkge1xyXG4gICAgY29uc3QgZWZmZWN0Qm91bmQ6IGFueSA9IGVmZmVjdC51cGRhdGUuYmluZChlZmZlY3QpO1xyXG5cclxuICAgIGlmICh0aGlzLl90aWNrZXIpIHtcclxuICAgICAgZWZmZWN0LmZpbmlzaGVkLmFkZCgoKSA9PiB0aGlzLl90aWNrZXI/LnJlbW92ZShlZmZlY3RCb3VuZCkpO1xyXG5cclxuICAgICAgdGhpcy5fdGlja2VyPy5hZGQoZWZmZWN0Qm91bmQpO1xyXG4gICAgfSBlbHNlIGVmZmVjdC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgc3ByaXRlIGFuZCB0ZXh0dXJlIG9wdGlvbnMgYXJlIHByZXNlbnQgZm9yIGVmZmVjdHMgdGhhdCB1c2UgdGhlbS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIG9wdGlvbmFsIHBhY2thZ2VzIGFyZSBwcmVzZW50IG9yIGZhbHNlIG90aGVyd2lzZSB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbmFsUGFja2FnZXNFeGlzdCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5fZmlsdGVyKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignU2tpcHBpbmcgZWZmZWN0LCBQSVhJLlNwcml0ZSBhbmQgUElYSS5UZXh0dXJlIG9iamVjdCBtdXN0IGJlIHByb3ZpZGVkIHRvIHVzZSB0aGlzIGVmZmVjdC4nKTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgdGhlIGZpbHRlciwgaWYgYXZhaWxhYmxlLCB0byBiZSB1c2VkIGluIGVmZmVjdHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9zZXR1cEZpbHRlcigpIHtcclxuICAgIHRoaXMuX2ZpbHRlciA9IG5ldyB0aGlzLl9vcHRpb25zLnNwcml0ZSh0aGlzLl9vcHRpb25zLnRleHR1cmUuV0hJVEUpO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlci53aWR0aCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aDtcclxuICAgIHRoaXMuX2ZpbHRlci5oZWlnaHQgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0O1xyXG4gICAgdGhpcy5fZmlsdGVyLmFscGhhID0gMDtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5fZmlsdGVyKTtcclxuICB9XHJcbn1cclxuIl19