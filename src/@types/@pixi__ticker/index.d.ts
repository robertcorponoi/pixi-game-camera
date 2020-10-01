declare module '@pixi/ticker' {
    export enum UPDATE_PRIORITY {
        INTERACTION = 50,
        HIGH = 25,
        NORMAL = 0,
        LOW = -25,
        UTILITY = -50,
    }

    export type TickerCallback<T> = (this: T, dt: number) => any;

    export class Ticker {
        add<T = any>(fn: TickerCallback<T>, context: T, priority: UPDATE_PRIORITY.NORMAL): this;
        remove<T = any>(fn: TickerCallback<T>, context: T): this;
    }
}