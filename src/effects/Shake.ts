'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';
import Vector from '../interface/Vector';

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
export default class Shake extends Effect {
  /**
   * The intensity of the shake, from 1-10.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 5
   */
  private _intensity: number = 5;

  /**
   * The duration of this shake effect.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default Infinity
   */
  private _duration: number = Infinity;

  /**
   * A reference to the initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _initialPivot: Vector;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the shake effect to.
   * @param {number} intensity The intensity of the shake, from a scale of 1 to 10.
   * @param {number} duration The duration of the shake effect.
   */
  constructor(container: PIXI.Container, intensity: number, duration: number) {
    super(container);

    this._intensity = intensity;

    this._duration = duration;

    this._initialPivot = { x: this.container.pivot.x, y: this.container.pivot.y };

    this.started = performance.now();
  }

  /**
   * Updates the status of the shake.
   */
  update() {
    this.current = performance.now();

    if (this.current - this.started >= this._duration) {
      this.container.pivot.x = this._initialPivot.x;
      this.container.pivot.y = this._initialPivot.y;

      this.finished.dispatch();

      return;
    }

    const dx: number = Math.random() * this._intensity;
    const dy: number = Math.random() * this._intensity;

    this.container.pivot.x = dx;
    this.container.pivot.y = dy;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }
}
