'use strict'

import { Ticker, UPDATE_PRIORITY } from '@pixi/ticker';
import { Options } from './options';
import { Effect } from './effects/effect';

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
export class Camera {
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
   * @property {Ticker}
   */
  private _ticker?: Ticker;

  /**
   * @param {Ticker} options A reference to the PIXI Ticker, if it's being used.
   */
  constructor(options: Object) {
    this._options = new Options(options);
    if (this._options.ticker) this._ticker = this._options.ticker;
  }

  /**
   * Runs a provided effect.
   * 
   * @param {Effect} effect The instance of the effect to run.
   */
  effect(effect: Effect) {
    this._addToTicker(effect);
  }

  /**
   * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
   * 
   * @private
   * 
   * @param {Effect} effect The effect to add to the Ticker.
   */
  private _addToTicker(effect: Effect) {
    const effectBound = effect.update.bind(effect);

    if (this._ticker) {
      effect.finished.add(() => this._ticker?.remove(effectBound, this));
      this._ticker?.add(effectBound, this, UPDATE_PRIORITY.NORMAL);
    } else effect.start();
  }
}
