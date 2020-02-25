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
   * A reference to the singal that is dispatched when this effect is finished.
   * 
   * @property {Hypergiant}
   */
  finished: Hypergiant = new Hypergiant();

  /**
   * @param {PIXI.Container} container The container that the effect is happening on.
   */
  constructor(container: PIXI.Container) {
    this.container = container;
  }

  /**
   * Updates the effect frame by frame.
   * 
   * @param {number} delta The delta value passed by the game loop.
   */
  abstract update(delta: number): void;
}