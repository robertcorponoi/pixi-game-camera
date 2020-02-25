'use strict'

import * as PIXI from 'pixi.js';
import { easeLinear } from 'd3-ease';

import Effect from './Effect';
import EffectOptions from '../options/EffectOptions';

import Vector from '../interface/Vector';

/**
 * A zooming and panning effect that involves the camera zooming in to a particular point on the container.
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
   * The duration of this zoom effect.
   * 
   * @private
   * 
   * @property {number}
   */
  private _duration: number;

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   * 
   * @default easeLinear
   */
  private _easing: Function = easeLinear;

  /**
   * A timestamp of when this effect was created.
   * 
   * @private
   * 
   * @property {DOMHighResTimeStamp}
   */
  private _started: DOMHighResTimeStamp = performance.now();

  /**
   * A timestamp of when this effect was last run.
   * 
   * @private
   * 
   * @property {DOMHighResTimeStamp}
   */
  private _current: DOMHighResTimeStamp = 0;

  /**
   * A reference to the initial zoom level.
   * 
   * @private
   * 
   * @property {Vector}
   */
  private _currentZoomLevel: Vector;

  /**
   * Indicates whether we're zooming in or out.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */
  private _zoomIn: boolean = false;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the zoomto effect to.
   * @param {number} zoomLevel The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  constructor(container: PIXI.Container, zoomLevel: number, duration: number, easing: Function) {
    super(container);

    this._desiredZoomLevel = { x: zoomLevel, y: zoomLevel };

    this._duration = duration;

    if (easing) this._easing = easing;

    this._currentZoomLevel = { x: this.container.scale.x, y: this.container.scale.y };

    if (zoomLevel > this._currentZoomLevel.x) this._zoomIn = true;

    
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    if (this._zoomCriteriaMet()) {
      this.finished.dispatch();

      return;
    }

    this._current = performance.now();
    
    const timeDiffPercentage: number = this._current / this._duration;

    const percentageThroughAnimation: number = this._easing(timeDiffPercentage);

    const zoomAmount: number = this._desiredZoomLevel.x * percentageThroughAnimation;

    this.container.scale.x = zoomAmount + 1;
    this.container.scale.y = zoomAmount + 1;
  }

  /**
   * Checks to see if the container's current zoom level is very close to the desired zoom level.
   * 
   * We can't use container zoom == desired zoom because with the game loop we might miss that exact moment so we check a very small window.
   * 
   * @returns {boolean} Returns true if the zoom criteria is met or false otherwise.
   */
  private _zoomCriteriaMet(): boolean {
    if ((this.container.scale.x > this._desiredZoomLevel.x - 0.1 && this.container.scale.x < this._desiredZoomLevel.x + 0.1) && (this.container.scale.y > this._desiredZoomLevel.y - 0.1 && this.container.scale.y < this._desiredZoomLevel.y + 0.1)) return true;

    return false;
  }
}