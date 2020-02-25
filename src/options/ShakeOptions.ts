'use strict'

import EffectOptions from './EffectOptions';

/**
 * Defines the object that is used to pass options to the `shake` effect.
 */
export default class ShakeOptions extends EffectOptions {
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
   * It is recommended to use a scale of at least 1.009 so that you can't see the edges of the game container.
   * 
   * @property {number}
   * 
   * @default 1.009
   */
  scale: number = 1.009;

  /**
   * @param {Object} options The options passed from the `shake` method.
   */
  constructor(options: Object) {
    super(options);
    
    Object.assign(this, options);
  }
}
