'use strict'

import * as PIXI from 'pixi.js';
import * as easing from 'd3-ease';

import Camera from './camera/Camera';
import Options from './options/Options';

/**
 * TODO
 */
export default class PIXICamera {
  /**
   * A reference to the options passed on initialization.
   * 
   * @private
   * 
   * @property {Options}
   */
  private _options: Options;

  /**
   * A reference to the cameras created.
   *
   * @private
   *
   * @property {Array<Camera>}
   */
  private _cameras: Array<Camera> = [];

  /**
   * A reference to the easing functions that can be used.
   * 
   * @private
   * 
   * @property {*}
   */
  private _EASING: any = easing;

  /**
   * @param {Object} [options]
   * @param {PIXI.Ticker} [options.ticker] A reference to the PIXI ticker if it's being used. If the PIXI ticker is not used then updates will have to be called manually.
   */
  constructor(options: Object = {}) {
    this._options = new Options(options);
  }

  /**
   * Returns the easing functions that can be selected from.
   * 
   * @returns {*}
   */
  get EASING(): any { return this._EASING; }

  /**
   * Creates a new camera that is focused on a container.
   *
   * @param {PIXI.Camera} container The container to focus the camera and its effects on.
   *
   * @returns {Camera}
   */
  camera(container: PIXI.Container): Camera {
    const cam: Camera = new Camera(container, this._options.ticker);

    this._cameras.push(cam);

    return cam;
  }
}
