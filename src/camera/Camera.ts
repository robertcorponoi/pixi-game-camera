'use strict'

import * as PIXI from 'pixi.js';
import { easeLinear } from 'd3-ease';

import Options from '../options/Options';

import Fade from '../effects/Fade';
import Shake from '../effects/Shake';
import PanTo from '../effects/PanTo';
import ZoomTo from '../effects/ZoomTo';
import Effect from '../effects/Effect';

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
export default class Camera {
  /**
   * The container this camera is focusing on.
   *
   * @private
   *
   * @property {PIXI.Container}
   */
  private _container: PIXI.Container;

  /**
   * A reference to the options passed to camera pixi on initialization.
   * 
   * @private
   * 
   * @private {Options}
   */
  private _options: Options;

  /**
   * A reference to the PIXI Ticker, if it's being used.
   * 
   * @private
   * 
   * @property {PIXI.Ticker}
   */
  private _ticker?: PIXI.Ticker;

  /**
   * A reference to the PIXI Sprite to use for applying certain effects.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */
  private _filter?: any;

  /**
   * @param {PIXI.Container} container The container this camera is focusing on.
   * @param {PIXI.Ticker} options A reference to the PIXI Ticker, if it's being used.
   */
  constructor(container: PIXI.Container, options: Options) {
    this._container = container;

    this._options = options;

    if (this._options.ticker) this._ticker = this._options.ticker;

    if (this._options.sprite && this._options.texture) this._filter = new this._options.sprite(this._options.texture.WHITE);
  }

  /**
   * Creates a new shake effect that can be used.
   * 
   * @param {number} [intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [duration=Infinity] The duration of the shake effect.
   */
  shake(intensity: number = 5, duration: number = Infinity) {
    const shake: Shake = new Shake(this._container, intensity, duration);

    this._addToTicker(shake);
  }

  /**
   * Zooms in or out to a specified area.
   * 
   * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} [easing=easeLinear] The easing function that should be used.
   */
  zoomTo(xZoomLevel: number, yZoomLevel: number, duration: number, easing: Function = easeLinear) {
    const zoomTo: ZoomTo = new ZoomTo(this._container, xZoomLevel, yZoomLevel, duration, easing);

    this._addToTicker(zoomTo);
  }

  /**
   * Pans to a specific coordinate.
   * 
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   */
  panTo(x: number, y: number, duration: number) {
    const panTo: PanTo = new PanTo(this._container, x, y, duration);

    this._addToTicker(panTo);
  }

  /**
   * Fades in or out.
   * 
   * @param {number} color The hex code of the color to fade in or out of.
   * @param {number} duration The amount of time until the fade completes.
   * @param {number} [opacity=100] The percent to fade to. 100% is fully faded and 0% fully visible.
   * @param {Function} [easing=easeLinear] The easing function that should be used.
   */
  fade(color: number, duration: number, opacity: number = 100, easing: Function = easeLinear) {
    if (!this._optionalPackagesExist()) return;

    const fade: Fade = new Fade(this._container, this._filter, color, duration, easing);

    this._addToTicker(fade);
  }

  /**
   * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
   * 
   * @private
   * 
   * @param {Effect} effect The effect to add to the Ticker.
   */
  private _addToTicker(effect: Effect) {
    const effectBound: any = effect.update.bind(effect);

    if (this._ticker) {
      effect.finished.add(() => this._ticker?.remove(effectBound));

      this._ticker?.add(effectBound);
    } else effect.start();
  }

  /**
   * Checks to see if the sprite and texture options are present for effects that use them.
   * 
   * @private
   * 
   * @returns {boolean} Returns true if the optional packages are present or false otherwise with an error.
   */
  private _optionalPackagesExist(): boolean {
    if (!this._filter) {
      console.warn('Skipping effect, PIXI.Sprite and PIXI.Texture object must be provided to use this effect.');

      return false;
    }

    return true;
  }
}
