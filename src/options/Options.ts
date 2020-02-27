'use strict'

import * as PIXI from 'pixi.js';

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
export default class Options {
  /**
   * A reference to the PIXI.Sprite object.
   * 
   * This is necessary for some effects such as fade effects.
   * 
   * @property {PIXI.Sprite}
   */
  sprite?: any;

  /**
   * A reference to the PIXI.Texture object.
   * 
   * This is used along with the PIXI.Sprite option to set textures for some of the effects.
   * 
   * @property {PIXI.Texture}
   */
  texture?: any;

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