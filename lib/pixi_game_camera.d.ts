import { Effect } from './effects/effect';
/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
export declare class Camera {
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
     * @property {Ticker}
     */
    private _ticker?;
    /**
     * @param {Ticker} options A reference to the PIXI Ticker, if it's being used.
     */
    constructor(options: Object);
    /**
     * Runs a provided effect.
     *
     * @param {Effect} effect The instance of the effect to run.
     */
    effect(effect: Effect): void;
    /**
     * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
     *
     * @private
     *
     * @param {Effect} effect The effect to add to the Ticker.
     */
    private _addToTicker;
}
