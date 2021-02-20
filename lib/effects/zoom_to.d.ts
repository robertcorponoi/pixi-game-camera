import { Container } from '@pixi/display';
import { Effect } from './effect';
/**
 * A zooming effect that involves the camera zooming in to a particular point on the container.
 */
export declare class ZoomTo extends Effect {
    /**
     * The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     *
     * @private
     *
     * @property {Vector}
     */
    private _desiredZoomLevel;
    /**
     * A reference to the easing function to use for this effect.
     *
     * @private
     *
     * @property {Function}
     */
    private _easing;
    /**
     * A reference to the initial zoom level.
     *
     * @private
     *
     * @property {Vector}
     */
    private _initialZoomLevel;
    /**
     * Indicates whether the desired x zoom level is greater than the current zoom level or not.
     *
     * @private
     *
     * @property {boolean}
     */
    private _xIsGreater;
    /**
     * Indicates whether the desired y zoom level is greater than the current zoom level or not.
     *
     * @private
     *
     * @property {boolean}
     */
    private _yIsGreater;
    /**
     * @param {Container} container A reference to the container to apply the zoomto effect to.
     * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} [easing] The easing function that should be used.
     */
    constructor(container: Container, xZoomLevel: number, yZoomLevel: number, duration: number, easing?: Function);
    /**
     * Updates the status of this effect on a frame by frame basis.
     */
    update(): void;
    /**
     * Checks to see if the container's current zoom level is very close to the desired zoom level.
     *
     * We can't use container zoom == desired zoom because with the game loop we might miss that exact moment so we check a very small window.
     *
     * @private
     *
     * @returns {boolean} Returns true if the zoom criteria is met or false otherwise.
     */
    criteriaMet(): boolean;
}
