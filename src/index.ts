'use strict'

import * as PIXI from 'pixi.js';

import Camera from './camera/Camera';

/**
 * TODO
 */
export default class PIXICamera {
  /**
   * A reference to the cameras created.
   *
   * @private
   *
   * @property {Array<Camera>}
   */
  private _cameras: Array<Camera> = [];

  /**
   * Updates all cameras and runs all of the effects.
   *
   * @param {DOMHighResTimeStamp} time The time from the game loop.
   */
  update(time: DOMHighResTimeStamp) {
    this._cameras.map((camera: Camera) => camera.update(time));
  }

  /**
   * Creates a new camera that is focused on a container.
   *
   * @param {PIXI.Camera} container The container to focus the camera and its effects on.
   *
   * @returns {Camera}
   */
  camera(container: PIXI.Container): Camera {
    const cam: Camera = new Camera(container);

    this._cameras.push(cam);

    return cam;
  }
}
