'use strict'

import * as PIXI from 'pixi.js';
import Hypergiant from 'hypergiant';

/**
 * A generic object that contains the properties and methods of all effects.
 */
export default abstract class Effect {
  /**
   * The container that the effect is happening on.
   * 
   * @property {PIXI.Container}
   */
  container: PIXI.Container;

  /**
   * The duration of thie effect.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 0
   */
  duration: number = 0;

  /**
   * A timestamp of when this effect was started.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0;
   */
  started: DOMHighResTimeStamp = 0;

  /**
   * A timestamp of when this effect was last run.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0
   */
  current: DOMHighResTimeStamp = 0;

  /**
   * A reference to the singal that is dispatched when this effect is finished.
   * 
   * @property {Hypergiant}
   */
  finished: Hypergiant = new Hypergiant();

  /**
   * Indicates whether requestAnimationFrame is being used or not.
   * 
   * @property {boolean}
   * 
   * @default false
   */
  useRAF: boolean = false;

  /**
   * A reference to the requestAnimationFrame id if RAF is being used.
   * 
   * @property {number} 
   */
  id?: number;

  /**
   * @param {PIXI.Container} container The container that the effect is happening on.
   */
  constructor(container: PIXI.Container) {
    this.container = container;

    this.started = performance.now();
  }

  /**
   * Starts the requestAnimationFrame loop to use this effect if a Ticker is not provided.
   */
  start() {
    this.useRAF = true;

    this.finished.add(() => cancelAnimationFrame(this.id!));

    this.update();
  }

  /**
   * Updates the effect frame by frame.
   * 
   * @param {number} [delta] The delta value passed by the game loop.
   */
  abstract update(delta?: number): void;

  /**
   * Checks to see if the effect has been achieved.
   * 
   * @returns {boolean} Returns true if the effect is complete or false otherwise.
   */
  abstract criteriaMet?(): boolean;
}