'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export default class PanTo extends Effect {
  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */
  private _filter: PIXI.Sprite;

  /**
   * The color to fade to.
   * 
   * @private
   * 
   * @property {number}
   */
  private _color: number;

  /**
   * The opacity to set the filter to.
   * 
   * @private
   * 
   * @property {number}
   */
  private _opacity: number;

  /**
   * The easing function to use.
   * 
   * @private
   * 
   * @property {Function}
   */
  private _easing: Function;

  /**
   * Indicates whether its fading in or out.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default true
   */
  private _fadeOut = true;

  /**
   * The initial opacity of the filter as of the start of this effect.
   * 
   * @private
   * 
   * @property {number}
   */
  private _initialOpacity: number;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the fade effect to.
   * @param {PIXI.Sprite} filter A reference to the camera filter used to apply this effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function to use.
   */
  constructor(container: PIXI.Container, filter: PIXI.Sprite, color: number, duration: number, opacity: number, easing: Function) {
    super(container);

    this._filter = filter;
    this._color = color;
    this.duration = duration;
    this._opacity = opacity;
    this._easing = easing;
    this._filter.tint = this._color;
    this._initialOpacity = this._filter.alpha;

    if (this._filter.alpha > this._opacity) this._fadeOut = false;
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    if (this.criteriaMet()) {
      this._filter.alpha = this._opacity;
      this.finished.dispatch();

      return;
    }

    this.current = performance.now();

    const timeDiffPercentage = (this.current - this.started) / this.duration;
    const percentageThroughAnimation = this._easing(timeDiffPercentage);

    const fadeAmount = 1 * percentageThroughAnimation;
    this._filter.alpha = this._fadeOut ? fadeAmount : this._initialOpacity - fadeAmount;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the fade effect is done or not.
   * 
   * @returns {boolean} Returns true if the fade effect is done or not.
   */
  criteriaMet(): boolean {
    if ((this._fadeOut && this._filter.alpha >= this._opacity - 0.01) || (!this._fadeOut && this._filter.alpha <= this._opacity + 0.01)) return true;
    return false;
  }
}