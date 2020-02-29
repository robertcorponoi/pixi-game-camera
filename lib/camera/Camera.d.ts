import * as PIXI from 'pixi.js';
import Options from '../options/Options';
/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
export default class Camera {
    /**
     * The container this camera is focusing on.
     *
     * @private
     *
     * @property {PIXI.Container}
     */
    private _container;
    /**
     * A reference to the options passed to camera pixi on initialization.
     *
     * @private
     *
     * @private {Options}
     */
    private _options;
    /**
     * A reference to the PIXI Ticker, if it's being used.
     *
     * @private
     *
     * @property {PIXI.Ticker}
     */
    private _ticker?;
    /**
     * A reference to the PIXI Sprite to use for applying certain effects.
     *
     * @private
     *
     * @property {PIXI.Sprite}
     */
    private _filter?;
    /**
     * @param {PIXI.Container} container The container this camera is focusing on.
     * @param {PIXI.Ticker} options A reference to the PIXI Ticker, if it's being used.
     */
    constructor(container: PIXI.Container, options: Options);
    /**
     * Creates a new shake effect that can be used.
     *
     * @param {number} [intensity=5] The intensity of the shake, from a scale of 1 to 10.
     * @param {number} [duration=Infinity] The duration of the shake effect.
     */
    shake(intensity?: number, duration?: number): void;
    /**
     * Zooms in or out.
     *
     * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */
    zoomTo(xZoomLevel: number, yZoomLevel: number, duration: number, easing?: Function): void;
    /**
     * Pans to a specific coordinate.
     *
     * @param {number} x The x coordinate to pan to.
     * @param {number} y The y coordinate to pan to.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     */
    panTo(x: number, y: number, duration: number): void;
    /**
     * Fades in or out.
     *
     * @param {number} color The hex code of the color to fade in or out of.
     * @param {number} opacity The opacity to fade to with 1 is fully faded and 0 being the game is fully visible.
     * @param {number} duration The amount of time until the fade completes.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */
    fadeTo(color: number, opacity: number | undefined, duration: number, easing?: Function): void;
    /**
     * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
     *
     * @private
     *
     * @param {Effect} effect The effect to add to the Ticker.
     */
    private _addToTicker;
    /**
     * Checks to see if the sprite and texture options are present for effects that use them.
     *
     * @private
     *
     * @returns {boolean} Returns true if the optional packages are present or false otherwise with an error.
     */
    private _optionalPackagesExist;
    /**
     * Sets up the filter, if available, to be used in effects.
     *
     * @private
     */
    private _setupFilter;
}
