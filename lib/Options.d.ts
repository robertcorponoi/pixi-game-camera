import { Ticker } from '@pixi/ticker';
/**
 * A reference to the options passed to camera-pixi on initialization.
 */
export declare class Options {
    /**
     * If you want to use an existing PIXI.Ticker instance then you can pass it
     * here. If a ticker is not provided, `requestAnimationFrame` will be used
     * in its stead.
     *
     * @property {Ticker}
     */
    ticker?: Ticker;
    /**
     * @param {Object} [options] The options passed to Camera on initialization.
     * @param {Ticker} [ticker] An instance of PIXI.Ticker to be used instead of the default `requestAnimationFrame`.
     */
    constructor(options?: Object);
}
