'use strict'

import * as PIXI from 'pixi.js';
import { easeLinear } from 'd3-ease';

import Effect from '../effects/Effect';
import Shake from '../effects/Shake';
import ZoomTo from '../effects/ZoomTo';
import PanTo from '../effects/PanTo';

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
   * A reference to the PIXI Ticker, if it's being used.
   * 
   * @private
   * 
   * @property {PIXI.Ticker}
   */
  private _ticker?: PIXI.Ticker;

  /**
   * @param {PIXI.Container} container The container this camera is focusing on.
   * @param {PIXI.Ticker} [ticker] A reference to the PIXI Ticker, if it's being used.
   */
  constructor(container: PIXI.Container, ticker?: PIXI.Ticker) {
    this._container = container;

    if (ticker) this._ticker = ticker;
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
   * @param {number} zoomLevel The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} [easing=easeLinear] The easing function that should be used.
   */
  zoomTo(zoomLevel: number, duration: number, easing: Function = easeLinear) {
    const zoomTo: ZoomTo = new ZoomTo(this._container, zoomLevel, duration, easing);

    this._addToTicker(zoomTo);
  }

  /**
   * Pans to a specific coordinate.
   * 
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} [easing=easeLinear] The easing function that should be used.
   */
  panTo(x: number, y: number, duration: number, easing: Function = easeLinear) {
    const panTo: PanTo = new PanTo(this._container, x, y, duration, easing);

    this._addToTicker(panTo);
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
}
