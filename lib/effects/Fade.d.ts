import { Sprite } from '@pixi/sprite';
import { Container } from '@pixi/display';
import { Effect } from './effect';
/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export declare class Fade extends Effect {
    /**
     * A reference to the camera's filter.
     *
     * @private
     *
     * @property {Sprite}
     */
    private _filter;
    /**
     * The color to fade to.
     *
     * @private
     *
     * @property {number}
     */
    private _color;
    /**
     * The opacity to set the filter to.
     *
     * @private
     *
     * @property {number}
     */
    private _opacity;
    /**
     * The easing function to use.
     *
     * @private
     *
     * @property {Function}
     */
    private _easing;
    /**
     * Indicates whether its fading in or out.
     *
     * @private
     *
     * @property {boolean}
     *
     * @default true
     */
    private _fadeOut;
    /**
     * The initial opacity of the filter as of the start of this effect.
     *
     * @private
     *
     * @property {number}
     */
    private _initialOpacity;
    /**
     * @param {Container} container A reference to the container to apply the fade effect to.
     * @param {Sprite} sprite A reference to the PIXI Sprite to use for the fade effect.
     * @param {number} color The hex of the color to fade to.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} easing The easing function to use.
     */
    constructor(container: Container, sprite: Sprite, color: number, opacity: number, duration: number, easing?: Function);
    /**
     * Updates the status of this effect on a frame by frame basis.
     */
    update(): void;
    /**
     * Checks to see if the fade effect is done or not.
     *
     * @returns {boolean} Returns true if the fade effect is done or not.
     */
    criteriaMet(): boolean;
}
