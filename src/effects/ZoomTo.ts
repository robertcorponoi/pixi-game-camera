'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';
import Vector from '../interface/Vector';

/**
 * A zooming effect that involves the camera zooming in to a particular point on the container.
 */
export default class ZoomTo extends Effect {
  /**
   * The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _desiredZoomLevel: Vector;

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   */
  private _easing: Function;

  /**
   * A reference to the initial zoom level.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _initialZoomLevel: Vector;

  /**
   * Indicates whether the desired x zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */
  private _xIsGreater: boolean = false;

  /**
   * Indicates whether the desired y zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */
  private _yIsGreater: boolean = false;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the zoomto effect to.
   * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  constructor(container: PIXI.Container, xZoomLevel: number, yZoomLevel: number, duration: number, easing: Function) {
    super(container);

    this._desiredZoomLevel = { x: xZoomLevel, y: yZoomLevel };

    this.duration = duration;

    this._easing = easing;

    this._initialZoomLevel = { x: this.container.scale.x, y: this.container.scale.y };

    if (this._desiredZoomLevel.x > this._initialZoomLevel.x) this._xIsGreater = true;

    if (this._desiredZoomLevel.y > this._initialZoomLevel.y) this._yIsGreater = true;
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    if (this.criteriaMet() || this.current > this.duration) {
      this.finished.dispatch();

      return;
    }

    this.current = performance.now();

    const timeDiffPercentage: number = (this.current - this.started) / this.duration;

    const percentageThroughAnimation: number = this._easing(timeDiffPercentage);

    const xZoomAmount: number = this._desiredZoomLevel.x * percentageThroughAnimation;
    const yZoomAmount: number = this._desiredZoomLevel.y * percentageThroughAnimation;

    this.container.scale.x = this._xIsGreater ? this._initialZoomLevel.x + xZoomAmount / 2 : this._initialZoomLevel.x - xZoomAmount;
    this.container.scale.y = this._yIsGreater ? this._initialZoomLevel.y + yZoomAmount / 2 : this._initialZoomLevel.y - yZoomAmount;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the container's current zoom level is very close to the desired zoom level.
   * 
   * We can't use container zoom == desired zoom because with the game loop we might miss that exact moment so we check a very small window.
   * 
   * @private
   * 
   * @returns {boolean} Returns true if the zoom criteria is met or false otherwise.
   */
  criteriaMet(): boolean {
    if (
      (this.container.scale.x > this._desiredZoomLevel.x - 0.01 && this.container.scale.x < this._desiredZoomLevel.x + 0.01) &&
      (this.container.scale.y > this._desiredZoomLevel.y - 0.01 && this.container.scale.y < this._desiredZoomLevel.y + 0.01) 
    ) return true;

    return false;
  }
}