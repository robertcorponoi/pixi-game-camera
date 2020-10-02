declare module '@pixi/sprite' {
    import { Texture } from '@pixi/core';

    export class Sprite {
        tint: number;
        alpha: number;
        width: number;
        height: number;

        constructor(texture: Texture)
    }
}