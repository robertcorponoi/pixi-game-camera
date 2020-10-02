'use strict'

import { Sprite } from '@pixi/sprite';
import { Container } from '@pixi/display';

import { Effect } from './effect';

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export class Fade extends Effect {
  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {Sprite}
   */
  private _filter: Sprite;

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
   * @param {Container} container A reference to the container to apply the fade effect to.
   * @param {Sprite} sprite A reference to the PIXI Sprite to use for the fade effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function to use.
   */
  constructor(container: Container, sprite: Sprite, color: number, opacity: number, duration: number, easing?: Function) {
    super(container);

    this._color = color;
    this._opacity = opacity;
    this.duration = duration;
    this._easing = easing || this.easeLinear;

    this._filter = sprite;

    this._filter.width = this.container.width;
    this._filter.height = this.container.height;
    this._filter.alpha = 0;

    this.container.addChild(this._filter);

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