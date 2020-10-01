declare module '@pixi/display' {
    export class DisplayObject { }

    export class Container {
        pivot: any;
        scale: any;
        angle: number;

        width: number;
        height: number;

        addChild<T extends DisplayObject[]>(...children: T): T[0];
    }
}