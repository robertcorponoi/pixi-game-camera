<p align="center">
  <img width="250" height="250" src="https://raw.githubusercontent.com/robertcorponoi/graphics/master/pixi-game-camera/logo/pixi-game-camera-logo.png">
</p>

<h1 align="center">Pixi Game Camera</h1>

<p align="center">A flexible and non-opinionated way to add camera effects to your PIXI application via containers.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/pixi-game-camera.svg?style=flat)](https://www.npmjs.com/package/pixi-game-camera)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/pixi-game-camera/badge.svg)](https://snyk.io/test/github/robertcorponoi/pixi-game-camera)
  ![npm](https://img.shields.io/npm/dt/pixi-game-camera)
  [![NPM downloads](https://img.shields.io/npm/dm/pixi-game-camera.svg?style=flat)](https://www.npmjs.com/package/pixi-game-camera)
  <a href="https://badge.fury.io/js/pixi-game-camera"><img src="https://img.shields.io/github/issues/robertcorponoi/pixi-game-camera.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/pixi-game-camera"><img src="https://img.shields.io/github/license/robertcorponoi/pixi-game-camera.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

`pixi-game-camera` allows you to apply camera effects to any PIXI Container without requiring you to use PIXI in any certain way. PIXI is not bundled with this package resulting in a small file size but it also means that some effects need you to pass PIXI components to them.

## **Installation**

To install pixi-game-camera, use:

```bash
$ npm install pixi-game-camera
```

or you can use the script from unpkg like so:

```html
<script type="module" src="https://unpkg.com/pixi-game-camera@latest/pixi-game-camera.js"></script>
```

## **Importing**

Each part and effect of `pixi-game-camera` is exported on its own so you can import just the effects you need. Below is an example of importing all parts (so far) of `pixi-game-camera`:

```js
import {
  Fade,
  PanTo,
  Shake,
  Rotate,
  ZoomTo,
  Camera,
} from './pixi-game-camera.js';
```

The `Camera` object is necessary to be instantiated in order to use the effects so the first thing you would do is initialize that:

```js
const camera = new Camera();
```

When initializing `pixi-game-camera`, you can also pass in the following options:


| param   | type         | description                                                                                                                                                                                                                                                | default |
|---------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| ticker  | PIXI.Ticker  | A reference to the PIXI ticker if it's being used. If you are not using the ticker and instead just using a custom loop with requestAnimationFrame then the app will call its own internal game loop and remove it as necessary to run the camera effects. |         |

**Example:**

```js
// 1. Using PIXI ticker from a basic setup.
const app = new PIXI.Application({ width: 500, height: 300 });

const options = {
  ticker: app.ticker
};

const camera = new Camera(options);

// 2. Using requestAnimationFrame.
const renderer = new PIXI.Renderer({ width: 500, height: 300 });

const camera = new Camera();
```

## **Effects**

Once you've created a camera, you can use the following effects. Each effect has to be initialized with its properties before it can be passed to the camera to be used. All of the effects assume a camera has been made with the name of `camera`.

**Note:** Some of the effects can take an easing function as their last parameter. To keep file size low, only a default linear ease has been included to be used when no easing function is passed to these effects. If you would like to use a different easing function you can pass in any function that takes a single number as a parameter such as the easings from [d3-ease](https://github.com/d3/d3-ease) or from [easings.net](https://easings.net/). Also note that the effects will affect timing and `pixi-game-camera` will do its best to make sure that the effect finishes at the specified duration but easings like bounce can affect the accuracy of that.

### **Shake**

Causes the container to shake for a specified amount of time and for a certain duration.

| param      | type            | description                                                            | default  |
|------------|-----------------|------------------------------------------------------------------------|----------|
| container  | PIXI.Container  | The container to apply the shake effect to.                            |          |
| intensity  | number          | The intensity of the shake with 1 being lowest and 10 being highest.   | 5        |
| duration   | number          | The amount of time, in milliseconds, that this effect should last for. | Infinity |

**example:**

```js
// Shake the main container at an intensity of 3 for 5 seconds.
const mildShake = new Shake(app.stage, 3, 5000);
camera.effect(mildShake);

// Shake a sub container at an intensity of 10 for 2 seconds.
const intenseShake = new Shake(container2, 10, 2000);
camera.effect(intenseShake);
```

### **ZoomTo**

Zooms in or out on a container with an optional easing.

| param      | type     | description                                                                                                               | default    |
|------------|----------|---------------------------------------------------------------------------------------------------------------------------|------------|
| container  | PIXI.Container | The container to apply the zoom effect to.                            |          |
| xZoomLevel | number   | The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out. |            |
| yZoomLevel | number   | The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.   |            |
| duration   | number   | The amount of time it should take for the zoom to complete.                                                               |            |
| easing     | Function | The easing function to apply to the zoom.                                                                                 | easeLinear |

**example:**

```js
// Zoom in on the container at 2x over 5 seconds with the default linear ease.
const zoomIn = new ZoomTo(app.stage, 2, 2, 5000);
camera.effect(zoomIn);

// Zoom in at 2x horizontally and 1.5x vertically over 3 seconds with a bouncing effect.
import { easeBounceIn } from 'd3-ease';

const zoomMixed = new ZoomTo(app.stage 2, 1.5, 3000, easeBounceIn);
camera.effect(zoomMixed);
```

### **PanTo**

Pans to a specific location on the container with an optional easing.

| param     | type           | description                                                | default    |
|-----------|----------------|------------------------------------------------------------|------------|
| container | PIXI.Container | The container to apply the PanTo effect to.                |            |
| x         | number         | The x coordinate of the location to pan to.                |            |
| y         | number         | The y coordinate of the location to pan to.                |            |
| duration  | number         | The amount of time it should take for the pan to complete. |            |
| easing    | Function       | The easing function to apply to the pan.                   | easeLinear |

**example:**

```js
// Pan to (200, 250) over 5 seconds.
const panToCenter = new PanTo(app.stage, 200, 250, 5000);
camera.effect(panToCenter);

// Pan to (1050, 870) over 3 seconds with a cubic easing.
import { easeCubicIn } from 'd3-ease';

const panToBottomRight = new PanTo(1050, 870, 3000, easeCubicIn);
camera.effect(panToBottomRight);
```

### **Fade**

Fades in or out to a specified opacity of a color with an optional easing. This effect requires a `PIXI.Sprite` with a white texture to be passed to it.

| param     | type           | description                                                                | default    |
|-----------|----------------|----------------------------------------------------------------------------|------------|
| container | PIXI.Container | The container to apply the fade effect to.                                 |            |
| sprite    | PIXI.Sprite    | The sprite with a white texture to be used for the fade effect             |            |
| color     | number         | The hex of the color to fade in or out of.                                 |            |
| opacity   | number         | The opacity to fade to with 1 being fully to the color and 0 being opaque. |            |
| duration  | number         | The amount of time it should take for the fade to complete.                |            |
| easing    | Function       | The easing function to apply to the fade.                                  | easeLinear |

**example:**

```js
// Fade to black over 5 seconds with the default linear easing.
const fadeToBlack = new FadeTo(app.stage, new PIXI.Sprite(PIXI.Texture.WHITE), 0x000000, 1, 5000);
camera.effect(fadeToBlack);

// Fade to mostly blue over 3 seconds with a cubic easing.
import { easeCubicIn } from 'd3-ease';

const fadeToBlue = new FadeTo(app.stage, new PIXI.Sprite(PIXI.Texture.WHITE), 0x337ab7, 0.7, 3000, easeCubicIn);
camera.effect(fadeToBlue);
```

### **rotate**

Rotates to a specified angle with an optional easing.

| param    | type     | description                                                                                                                      | default    |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------|------------|
| container | PIXI.Container | The container to apply the rotate effect to. | |
| angle    | number   | The angle to rotate to, from 0 to 360 with 0 being the default state and 360 being all the way around back to the default state. |            |
| duration | number   | The amount of time it should take for the rotation to complete.                                                                  |            |
| easing   | Function | The easing function to apply to the rotation.                                                                                    | easeLinear |

**example:**

```js
// Rotate to 45 degrees in 3 seconds with the default linear easing.
const rotate45Deg = new Rotate(app.stage, 45, 3000);
camera.effect(rotate45Deg);

// Rotate to 365 degrees in 5 seconds with a cubic easing.
import { easeCubicIn } from 'd3-ease';

const rotate365Deg = new Rotate(app.stage, 365, 5000, easeCubicIn);
camera.effect(rotate365Deg);
```

## **Tests**

The tests for `pixi-game-camera` are browser based so to run them you need to first run:

```bash
$ npm run test
```

Which starts up a local server at `localhost:3000` and if you navigate to it you can see all of the effects being tested.

## **License**

MIT