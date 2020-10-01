import { Container } from '@pixi/display';
import { Effect } from './effect';
/**
 * A panning effect that makes the camera focus on a point in the container.
 */
export declare class PanTo extends Effect {
    /**
     * The (x, y) coordinate pair to pan to.
     *
     * @private
     *
     * @property {Vector}
     */
    private _coordinates;
    /**
     * The difference in coordinates from the current and the desired.
     *
     * @private
     *
     * @property {Vector}
     */
    private _difference;
    /**
     * Indicates whether the desired x is greater than the current x or not.
     *
     * @private
     *
     * @property {boolean}
     *
     * @default false
     */
    private _xIsGreater;
    /**
     * Indicates whether the desired y is greater than the current y or not.
     *
     * @private
     *
     * @property {boolean}
     *
     * @default false
     */
    private _yIsGreater;
    /**
     * @param {Container} container A reference to the container to apply the panto effect to.
     * @param {number} x The x coordinate to pan to.
     * @param {number} y The y coordinate to pan to.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     */
    constructor(container: Container, x: number, y: number, duration: number);
    /**
     * Updates the status of this effect on a frame by frame basis.
     */
    update(): void;
    /**
     * Checks to see if the panto criteria has been met so that the effect can end.
     *
     * @returns {boolean} Returns true if the panto effect is finished or false otherwise.
     */
    criteriaMet(): boolean;
}
