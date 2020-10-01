'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';
import Vector from '../Vector';

/**
 * A rotating effect that involves rotating the game a specified number of degrees.
 */
export default class Rotate extends Effect {
  /**
   * A reference to the initial angle.
   * 
   * @private
   * 
   * @property {number}
   */
  private _initialAngle: number;

  /**
   * The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * 
   * @private
   * 
   * @property {number}
   */
  private _desiredAngle: number;

  /**
   * The initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _initialPivot: Vector;

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   */
  private _easing: Function;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the rotate effect to.
   * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  constructor(container: PIXI.Container, angle: number, duration: number, easing: Function) {
    super(container);

    this._initialAngle = container.angle;
    this._desiredAngle = angle
    this.duration = duration;
    this._easing = easing;
    this._initialPivot = { x: this.container.pivot.x, y: this.container.pivot.y };

    if (this._initialPivot.x == 0) this.container.pivot.x = this.container.width / 2;
    if (this._initialPivot.y == 0) this.container.pivot.y = this.container.height / 2;
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    if (this.criteriaMet()) {
      this.finished.dispatch();
      return;
    }

    this.current = performance.now();

    const timeDiffPercentage = (this.current - this.started) / this.duration;
    const percentageThroughAnimation = this._easing(timeDiffPercentage);

    const angleAmount = this._desiredAngle * percentageThroughAnimation;
    this.container.angle = this._initialAngle + angleAmount;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the container's current angle is very close to the desired angle.
   * 
   * We can't use container angle == desired angle because with the game loop we might miss that exact moment so we check a very small window.
   * 
   * @private
   * 
   * @returns {boolean} Returns true if the angle criteria is met or false otherwise.
   */
  criteriaMet(): boolean {
    if (this.container.angle > this._desiredAngle) return true;
    return false;
  }
}