import * as PIXI from 'pixi.js';
import Camera from './Camera';
/**
 * A non-opinioned implementation for adding cameras to your PIXI application via containers.
 */
export default class PixiGameCamera {
    /**
     * A reference to the options passed on initialization.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * A reference to the easing functions that can be used.
     *
     * @private
     *
     * @property {*}
     */
    private _EASING;
    /**
     * @param {Object} [options]
     * @param {PIXI.Sprite} [options.sprite] A reference to the PIXI sprite object used for some effects such as fade.\
     * @param {PIXI.Texture} [options.texture] A reference to the PIXI.Texture object. This is used along with the PIXI.Sprite option to set textures for some of the effects.
     * @param {PIXI.Ticker} [options.ticker] A reference to the PIXI ticker if it's being used. If the PIXI ticker is not used then updates will have to be called manually.
     */
    constructor(options?: Object);
    /**
     * Returns the easing functions that can be selected from.
     *
     * @returns {*}
     */
    get EASING(): any;
    /**
     * Creates a new camera that is focused on a container.
     *
     * @param {PIXI.Camera} container The container to focus the camera and its effects on.
     *
     * @returns {Camera}
     */
    camera(container: PIXI.Container): Camera;
}
