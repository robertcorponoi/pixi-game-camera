'use strict'

import * as PIXI from 'pixi.js';

import Effect from './Effect';

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export default class PanTo extends Effect {
  /**
   * The easing function to use.
   * 
   * @private
   * 
   * @property {Function}
   */
  private _easing: Function;

  /**
   * The color to fade to.
   * 
   * @private
   * 
   * @property {number}
   */
  private _color: number;

  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */
  private _filter: PIXI.Sprite;

  /**
   * @param {PIXI.Container} container A reference to the container to apply the fade effect to.
   * @param {PIXI.Sprite} filter A reference to the camera filter used to apply this effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function to use.
   */
  constructor(container: PIXI.Container, filter: PIXI.Sprite, color: number, duration: number, easing: Function) {
    super(container);

    this._filter = filter;

    this._color = color;

    this.duration = duration;

    this._easing = easing;

    this._setupBackground();
  }

  /**
   * Updates the status of this effect on a frame by frame basis.
   */
  update() {
    if (this.criteriaMet()) {
      this._filter.alpha = 1;
      
      this.finished.dispatch();

      return;
    }

    this.current = performance.now();

    const timeDiffPercentage: number = this.current / this.duration;

    const percentageThroughAnimation: number = this._easing(timeDiffPercentage);

    const fadeAmount: number = 1 * percentageThroughAnimation;

    this._filter.alpha = fadeAmount;

    if (this.useRAF) this.id = requestAnimationFrame(() => this.update());
  }

  /**
   * Checks to see if the fade effect is done or not.
   * 
   * @returns {boolean} Returns true if the fade effect is done or not.
   */
  criteriaMet(): boolean {
    if (this._filter.alpha >= 0.99) return true;

    return false;
  }

  /**
   * Sets up the sprite that's used for the background.
   * 
   * @private
   */
  private _setupBackground() {
    this._filter.width = this.container.width;
    this._filter.height = this.container.height;
    this._filter.tint = this._color;
    this._filter.alpha = 0;

    this.container.addChild(this._filter);
  }
}