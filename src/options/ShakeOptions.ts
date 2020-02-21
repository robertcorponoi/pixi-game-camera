'use strict'

import * as PIXI from 'pixi.js';

/**
 * Defines the object that is used to pass options to the `shake` effect.
 */
export default class ShakeOptions {
  /**
   * The duration, in milliseconds, of how long the camera should shake for.
   * 
   * @property {number}
   */
  duration?: number;

  /**
   * The intensity of the shake, from a scale of 1 to 10.
   * 
   * @property {number}
   * 
   * @default 5
   */
  intensity: number = 5;

  /**
   * The scale that should be used when shaking the container.
   * 
   * It is recommended to use a scale of at least 1.2 so that you can't see the edges of the game container.
   * 
   * @property {number}
   * 
   * @default 1.2
   */
  scale: number = 1.2;

  /**
   * @param {Object} options The options passed from the `shake` method.
   */
  constructor(options: Object) {
    Object.assign(this, options);
  }
}