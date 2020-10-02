import { Container } from '@pixi/display';
import Hypergiant from 'hypergiant';
/**
 * A generic object that contains the properties and methods of all effects.
 */
export declare abstract class Effect {
    /**
     * The container that the effect is happening on.
     *
     * @property {Container}
     */
    container: Container;
    /**
     * The duration of thie effect.
     *
     * @private
     *
     * @property {number}
     *
     * @default 0
     */
    duration: number;
    /**
     * A timestamp of when this effect was started.
     *
     * @property {DOMHighResTimeStamp}
     *
     * @default 0;
     */
    started: number;
    /**
     * A timestamp of when this effect was last run.
     *
     * @property {DOMHighResTimeStamp}
     *
     * @default 0
     */
    current: number;
    /**
     * A reference to the singal that is dispatched when this effect is finished.
     *
     * @property {Hypergiant}
     */
    finished: Hypergiant;
    /**
     * Indicates whether requestAnimationFrame is being used or not.
     *
     * @property {boolean}
     *
     * @default false
     */
    useRAF: boolean;
    /**
     * A reference to the requestAnimationFrame id if RAF is being used.
     *
     * @property {number}
     */
    id?: number;
    /**
     * @param {Container} container The container that the effect is happening on.
     */
    constructor(container: Container);
    /**
     * Starts the requestAnimationFrame loop to use this effect if a Ticker is not provided.
     */
    start(): void;
    /**
     * The default ease-linear easing function used if no easing function is provided.
     *
     * @param {number} t The percent we are currently through the animation.
     */
    easeLinear(t: number): number;
    /**
     * Updates the effect frame by frame.
     *
     * @param {number} [delta] The delta value passed by the game loop.
     */
    abstract update(delta?: number): void;
    /**
     * Checks to see if the effect has been achieved.
     *
     * @returns {boolean} Returns true if the effect is complete or false otherwise.
     */
    abstract criteriaMet?(): boolean;
}
