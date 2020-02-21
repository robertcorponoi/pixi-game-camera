'use strict'

import * as PIXI from 'pixi.js';

import Shake from './effects/Shake';

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
export default class CameraPIXI {
  /**
   * Keeps track of all of the camera effects in use.
   * 
   * @private
   * 
   * @property {Array<Shake>}
   * 
   * @default []
   */
  private _effects: Array<Shake> = [];

  /**
   * Used in the game loop to update the camera effect animations.
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  update(delta: number) {
    this._effects.map((effect: Shake) => effect.update(delta));
  }

  /**
   * Creates a new shake effect that can be used.
   * 
   * @param {PIXI.Container} container The container to apply this effect to.
   * @param {Object} [options]
   * @param {number} [options.intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [options.scale=1.2] The scale that should be used when shaking the container. It is recommended to use a scale of at least 1.01 so that you can't see the edges of the game container.
   * @param {number} [options.duration=Infinity] The duration of the shake effect.
   * 
   * @returns {Shake} Returns the shake effect.
   * 
   * @example
   * 
   * const worldShake = cameraPIXI.shake(app.stage, 10);
   */
  shake(container: PIXI.Container, options: Object = {}) {
    const shake: Shake = new Shake(container, options);

    this._effects.push(shake);
  }

  /**
   * Zooms in or out to a specified area.
   * 
   * @param {PIXI.Container} container The container to apply this effect to.
   * @param {number} zoom The zoom multiplier to use. A zoom multipler less than 1 will cause the camera to zoom out.
   * @param {number} [speed=5] A value between 1-10 that specifies the speed of the zoom.
   */
  zoomTo(container: PIXI.Container, zoom: number, duration: number = 1000) {
    setInterval(() => {
      if (container.scale.x < zoom) {
        container.scale.x += 0.1;
        container.scale.y += 0.1;
      }
    }, 50);
  }

  /**
   * Adds the effect to the list of effects.
   * 
   * @private
   * 
   * @param {Shake} effect The effect to add to the list of effects.
   */
  private _addToEffects(effect: Shake) {
    this._effects.push(effect);
  }
}