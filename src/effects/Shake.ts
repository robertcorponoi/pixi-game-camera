'use strict'

import * as PIXI from 'pixi.js';

import ShakeOptions from '../options/ShakeOptions';

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
export default class Shake {
  /**
   * A reference to the containers involved in this effect.
   * 
   * @private
   * 
   * @property {PIXI.Container}
   */
  private _container: PIXI.Container;

  /**
   * A reference to the options for this Shake effect.
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
    this._container = container;

    this._options = new ShakeOptions(options);
  }

  /**
   * Updates the status of the shake.
   * 
   * If this effect is still active it runs the effect otherwise it just moves on.
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  update(delta: number) {
    this.
  }

  /**
   * Stops the shake effect.
   */
  stop() {
    this._isActive = false;
  }

  /**
   * The actual shake effect used by start and update to run the effect.
   * 
   * @private
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  private _run(delta: number) {
    const dx: number = Math.random() * this._options.intensity;
    const dy: number = Math.random() * this._options.intensity;

    this._container.scale.x = this._options.scale;
    this._container.scale.y = this._options.scale;

    this._container.pivot.x = dx;
    this._container.pivot.y = dy;
  }
}