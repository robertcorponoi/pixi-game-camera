'use strict'

import * as PIXI from 'pixi.js';
import Hypergiant from 'hypergiant';

import Effect from './Effect';
import ShakeOptions from '../options/ShakeOptions';

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
export default class Shake extends Effect {
  /**
   * A reference to the options for this effect.
   * 
   * @private
   * 
   * @property {ShakeOptions}
   */
  private _options: ShakeOptions;

  /**
   * @param {PIXI.Container} container The container to apply the shake effect to.
   * @param {Object} [options]
   * @param {number} [options.intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [options.scale=1.2] The scale that should be used when shaking the container. It is recommended to use a scale of at least 1.01 so that you can't see the edges of the game container.
   * @param {number} [options.duration=Infinity] The duration of the shake effect.
   */
  constructor(container: PIXI.Container, options: Object) {
    super(container);

    this._options = new ShakeOptions(options);
  }

  /**
   * Updates the status of the shake.
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  update(delta: number) {
    const current: DOMHighResTimeStamp = performance.now();

    if (current >= this._options.duration) {
      this.finished.dispatch();

      return;
    }

    this.run(delta);
  }
  
  /**
   * Resets the values of the pivot and scale to return ths container back to normal.
   */
  reset() {
    this.container.pivot.x = 0;
    this.container.pivot.y = 0;

    this.container.scale.x = 1;
    this.container.scale.y = 1;
  }

  /**
   * The actual shake effect used by update.
   * 
   * @private
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  run(delta: number) {
    const dx: number = Math.random() * this._options.intensity;
    const dy: number = Math.random() * this._options.intensity;

    this.container.scale.x = this._options.scale;
    this.container.scale.y = this._options.scale;

    this.container.pivot.x = dx;
    this.container.pivot.y = dy;
  }
}
