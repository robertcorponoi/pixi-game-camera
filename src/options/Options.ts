'use strict'

import * as PIXI from 'pixi.js';

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
export default class Options {
  /**
   * A reference to the PIXI ticker if it's being used.
   * 
   * If the PIXI ticker is not used then updates will have to be called manually.
   * 
   * @property {PIXI.Ticker}
   */
  ticker?: PIXI.Ticker;

  /**
   * @param {Object} options The optionas passed to camera-pixi on initialization.
   */
  constructor(options: Object) {
    Object.assign(this, options);
  }
}