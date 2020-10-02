'use strict'

import { Container } from '@pixi/display';

import { Effect } from './effect';
import { Vector } from '../vector';

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
export class Shake extends Effect {
  /**
   * The intensity of the shake, from 1-10.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 5
   */
  private _intensity = 5;

  /**
   * A reference to the initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _initialPivot: Vector;

  /**
   * @param {Container} container A reference to the container to apply the shake effect to.
   * @param {number} intensity The intensity of the shake, from a scale of 1 to 10.
   * @param {number} duration The duration of the shake effect.
   */
  constructor(container: Container, intensity: number, duration: number) {
    super(container);

    this._intensity = intensity;
    this.duration = duration;
    this._initialPivot = { x: this.container.pivot.x, y: this.container.pivot.y };

    this.started = performance.now();
  }

  /**
   * Updates the status of the shake.
   */
  update() {
    if (this.criteriaMet()) {
      this.container.pivot.x = this._initialPivot.x;
      this.container.pivot.y = this._initialPivot.y;

      this.finished.dispatch();
      return;
    }

    this.current = performance.now();

    const dx = Math.random() * this._intensity;
    const dy = Math.random() * this._intensity;

    this.container.pivot.x = dx;
    this.container.pivot.y = dy;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the shake effect is done.
   * 
   * @returns {boolean} Returns true if the shake effect is done or not.
   */
  criteriaMet(): boolean {
    if (this.current - this.started >= this.duration) return true;
    return false;
  }
}
