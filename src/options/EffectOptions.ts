'use strict'

import { easeLinear } from 'd3-ease';

/**
 * Defines the common options that all effects share.
 */
export default class EffectOptions {
  /**
   * The amount of time, in milliseconds, this effect should take to complete.
   * 
   * @param {number}
   * 
   * @default 0
   */
  duration: number = 0;

  /**
   * The easing function that should be used for this effect.
   * 
   * @param {Function}
   * 
   * @default easeLinear
   */
  easing: Function = easeLinear;

  /**
   * @param {Object} options The options passed from the effect's initialization method.
   */
  constructor(options: Object) {
    Object.assign(this, options);
  }
}