import { Container } from '@pixi/display';
import { Effect } from './effect';
/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
export declare class Shake extends Effect {
    /**
     * The intensity of the shake, from 1-10.
     *
     * @private
     *
     * @property {number}
     *
     * @default 5
     */
    private _intensity;
    /**
     * A reference to the initial pivot of the container.
     *
     * @private
     *
     * @property {Vector}
     */
    private _initialPivot;
    /**
     * @param {Container} container A reference to the container to apply the shake effect to.
     * @param {number} intensity The intensity of the shake, from a scale of 1 to 10.
     * @param {number} duration The duration of the shake effect.
     */
    constructor(container: Container, intensity: number, duration: number);
    /**
     * Updates the status of the shake.
     */
    update(): void;
    /**
     * Checks to see if the shake effect is done.
     *
     * @returns {boolean} Returns true if the shake effect is done or not.
     */
    criteriaMet(): boolean;
}
