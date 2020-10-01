'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';
import Vector from '../Vector';

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export default class PanTo extends Effect {
  /**
   * The (x, y) coordinate pair to pan to.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _coordinates: Vector;

  /**
   * The difference in coordinates from the current and the desired.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _difference: Vector;

  /**
   * Indicates whether the desired x is greater than the current x or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */
  private _xIsGreater = false;

  /**
   * Indicates whether the desired y is greater than the current y or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */
  private _yIsGreater = false;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the panto effect to.
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   */
  constructor(container: PIXI.Container, x: number, y: number, duration: number) {
    super(container);

    this._coordinates = { x, y };
    this.duration = duration;

    if (this._coordinates.x > this.container.pivot.x) this._xIsGreater = true;
    if (this._coordinates.y > this.container.pivot.y) this._yIsGreater = true;

    this._difference = { x: Math.abs(this._coordinates.x - this.container.pivot.x), y: Math.abs(this._coordinates.y - this.container.pivot.y) };
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
    const timeDiffPercentageNegative = (this.duration - this.current) / this.duration;

    const xPanAmount = this._xIsGreater ? this._difference.x * timeDiffPercentage : this._difference.x * timeDiffPercentageNegative;
    const yPanAmount = this._yIsGreater ? this._difference.y * timeDiffPercentage : this._difference.y * timeDiffPercentageNegative;

    this.container.pivot.x = xPanAmount;
    this.container.pivot.y = yPanAmount;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the panto criteria has been met so that the effect can end.
   * 
   * @returns {boolean} Returns true if the panto effect is finished or false otherwise.
   */
  criteriaMet(): boolean {
    if (this.container.pivot.x > this._coordinates.x - 5 && this.container.pivot.x < this._coordinates.x + 5  && this.container.pivot.y > this._coordinates.y - 5 && this.container.pivot.y < this._coordinates.y + 5) return true;
    return false;
  }
}