'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';
import Vector from '../interface/Vector';

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export default class PanTo extends Effect {
  /**
   * The duration of this pan effect.
   * 
   * @private
   * 
   * @property {number}
   */
  private _duration: number;

  /**
   * The (x, y) coordinate pair to pan to.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _coordinates: Vector;

  /**
   * The easing function that should be used.
   * 
   * @private
   * 
   * @property {Function}
   */
  private _easing: Function;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the panto effect to.
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  constructor(container: PIXI.Container, x: number, y: number, duration: number, easing: Function) {
    super(container);

    this._coordinates = { x, y };

    this._duration = duration;

    this._easing = easing;
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    console.log('updating');
    if (this._panCriteriaMet()) {
      this.finished.dispatch();

      return;
    }

    this.current = performance.now();
    
    // const timeDiffPercentage: number = this.current / this._duration;

    // const percentageThroughAnimation: number = this._easing(timeDiffPercentage);

    const xLeft: number = this._coordinates.x - this.container.pivot.x;
    const yLeft: number = this._coordinates.y - this.container.pivot.y;

    // let xPanAmount: number = xLeft * percentageThroughAnimation;
    // let yPanAmount: number = yLeft * percentageThroughAnimation;

    // console.log(this.current - this.started, percentageThroughAnimation, this.container.pivot);

    // if (this.container.pivot.x + xPanAmount > this.container.width || this.container.pivot.y + yPanAmount > this.container.height) {
    //   xPanAmount -= this.container.width - (this.container.pivot.x + xPanAmount);
    //   yPanAmount = this.container.height - (this.container.pivot.y + yPanAmount);
    // }

    // if (this.container.pivot.x + xPanAmount < 0 || this.container.pivot.y + yPanAmount < 0) {
    //   xPanAmount = 0;
    //   yPanAmount = 0;
    // }

    console.log(this.current - this.started);

    this.container.pivot.x += xLeft / this._duration;
    this.container.pivot.y += yLeft / this._duration;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the panto criteria has been met so that the effect can end.
   * 
   * @private
   * 
   * @returns {boolean} Returns true if the panto effect is finished or false otherwise.
   */
  private _panCriteriaMet(): boolean {
    if (this.container.pivot.x > this._coordinates.x - 5 && this.container.pivot.x < this._coordinates.x + 5  && this.container.pivot.y > this._coordinates.y - 5 && this.container.pivot.y < this._coordinates.x + 5) return true;

    return false;
  }
}