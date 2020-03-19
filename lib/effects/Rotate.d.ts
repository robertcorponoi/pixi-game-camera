import * as PIXI from 'pixi.js';
import Effect from './Effect';
/**
 * A rotating effect that involves rotating the game a specified number of degrees.
 */
export default class Rotate extends Effect {
    /**
     * A reference to the initial angle.
     *
     * @private
     *
     * @property {number}
     */
    private _initialAngle;
    /**
     * The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
     *
     * @private
     *
     * @property {number}
     */
    private _desiredAngle;
    /**
     * The initial pivot of the container.
     *
     * @private
     *
     * @property {Vector}
     */
    private _initialPivot;
    /**
     * A reference to the easing function to use for this effect.
     *
     * @private
     *
     * @property {Function}
     */
    private _easing;
    /**
     * @param {PIXI.Container} container A reference to the container to apply the rotate effect to.
     * @param {number} angle The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} easing The easing function that should be used.
     */
    constructor(container: PIXI.Container, angle: number, duration: number, easing: Function);
    /**
     * Updates the status of this effect on a frame by frame basis.
     */
    update(): void;
    /**
     * Checks to see if the container's current angle is very close to the desired angle.
     *
     * We can't use container angle == desired angle because with the game loop we might miss that exact moment so we check a very small window.
     *
     * @private
     *
     * @returns {boolean} Returns true if the angle criteria is met or false otherwise.
     */
    criteriaMet(): boolean;
}
