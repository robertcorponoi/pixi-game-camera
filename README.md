<!-- <p align="center">
  <img width="250" height="250" src="https://github.com/robertcorponoi/graphics/blob/master/pixi-game-camera/pixi-game-camera-logo.png?raw=true">
</p> -->

<h1 align="center">Pixi Game Camera</h1>

<p align="center">A non-opinioned implementation for adding cameras to your PIXI application via containers.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/pixi-game-camera.svg?style=flat)](https://www.npmjs.com/package/pixi-game-camera)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/pixi-game-camera/badge.svg)](https://snyk.io/test/github/robertcorponoi/pixi-game-camera)
  ![npm](https://img.shields.io/npm/dt/pixi-game-camera)
  [![NPM downloads](https://img.shields.io/npm/dm/pixi-game-camera.svg?style=flat)](https://www.npmjs.com/package/pixi-game-camera)
  <a href="https://badge.fury.io/js/pixi-game-camera"><img src="https://img.shields.io/github/issues/robertcorponoi/pixi-game-camera.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/pixi-game-camera"><img src="https://img.shields.io/github/license/robertcorponoi/pixi-game-camera.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

PIXI camera allows you to apply effects to your camera without requiring you to use PIXI a certain way. PIXI is not bundled with this package at all and so optional effects that require PIXI components can be passed if desired but they are not required.

**Upcoming Features:** flash, scroll, rotate, and more.

## **Installation**

To install pixi-game-camera, use:

```bash
$ npm install pixi-game-camera
```

and you can add it to your project like so:

```js
import PixiGameCamera from 'pixi-game-camera';
```

or you can use the script from unpkg like so:

```html
<script type="module" src="https://unpkg.com/pixi-game-camera@latest/pixi-game-camera.js"></script>
```

## **Initialization**

When initializing pixi-game-camera you can pass in the following options:


| param   | type         | description                                                                                                                                                                                                                                                | default |
|---------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| ticker  | PIXI.Ticker  | A reference to the PIXI ticker if it's being used. If you are not using the ticker and instead just using a custom loop with requestAnimationFrame then the app will call its own internal game loop and remove it as necessary to run the camera effects. |         |
| sprite  | PIXI.Sprite  | A reference to the PIXI.Sprite object. This is optional in case you don't want to use the effects that require it. This is required become some effects need to draw on the container.                                                                     |         |
| texture | PIXI.Texture | A reference to the PIXI.Texture object. This is optional in case you don't want to use the effects that require it. This should be passed in conjunction with the sprite option.                                                                           |         |

**Note:** The sprite and texture option take in the actual PIXI.Sprite and PIXI.Texture object while the ticker option takes the instance of the ticker that is initialialized with a PIXI app.

**Note:** The sprite and texture options are optional because you might not want to use the effects that require them (you can see which ones below). This ensures that PIXI does not have to be bundled with this package in case you are using a custom build of PIXI.

**example:**

```js
/**
 * 1. Using PIXI ticker from a basic setup.
 */
const app = new PIXI.Application({ width: 500, height: 300 });

const options = {
  ticker: app.ticker
};

const pgc = new PixiGameCamera(options);

/**
 * 2. Using PIXI ticker from a an intermediate setup.
 */
const renderer = new PIXI.Renderer({ width: 500, height: 300 });
const ticker = new PIXI.Ticker();

const options = {
  ticker: ticker
};

const pgc = new PixiGameCamera(options);

/**
 * 3. Using requestAnimationFrame.
 */
const renderer = new PIXI.Renderer({ width: 500, height: 300 });

const pgc = new PixiGameCamera();

/**
 * Passing in the PIXI.Sprite and PIXI.Texture functions to be used by pixi-game-camera for certain effects.
 */
const app = new PIXI.Application({ width: 500, height: 300 });

const options = {
  sprite: PIXI.Sprite,
  texture: PIXI.Texture
};

const pgc = new PixiGameCamera(options);
```

## **Usage**

To set up pixi-game-camera, you have to create a new instance and then you can start creating cameras. 

To create a camera, you need to assign it a container to be bound to. This ensures that pixi-game-camera doesn't assume anything about your application by hooking into the containers you have created. You can assign it the main container `app.stage` or any other container you have created and the methods you run against that camera will only affect that container and its children.

**example:**

```js
// Setting up a camera on a basic PIXI application:
const app = new PIXI.Application({ width: 500, height: 300 });

const pgc = new PixiGameCamera();

const camera = pgc.camera(app.stage);

// Setting up a camera on a specific container:
const container = new PIXI.Container();

const camera2 = pgc.camera(container);
```

## **Effects**

Once you've created a camera, you can use the following effects. All of the effects assume a camera has been made with the name of `camera`.

**Note:** Some effects can have an easing effect applied to them. The available easings can be selected from the `instance.EASING` property and for reference on easings you can check out [the d3-ease package](https://github.com/d3/d3-ease) used for easings. Also note that the effects will affect timing and pixi-game-camera will do its best to make sure that the animation finishes at the specified duration but easings like bouncing can affect that.

**example:**

```js
const pgc = new PixiGameCamera;

// The easings can be selected from:
pgc.EASING.easeLinear;
pgc.EASING.easeCubinIn;
// etc...
```

### **shake**

Causes the screen to shake for a specified amount of time and for a certain duration.

| param     | type   | description                                                            | default  |
|-----------|--------|------------------------------------------------------------------------|----------|
| intensity | number | The intensity of the shake with 1 being lowest and 10 being highest.   | 5        |
| duration  | number | The amount of time, in milliseconds, that this effect should last for. | Infinity |

**example:**

```js
// Shake the camera at an intensity of 3 for 5 seconds.
camera.shake(3, 5000);

// Shake the camera at an intensity of 10 for 2 seconds.
camera.shake(10, 2000);
```

### **zoomTo**

Zooms in or out with an optional easing.

| param      | type     | description                                                                                                               | default    |
|------------|----------|---------------------------------------------------------------------------------------------------------------------------|------------|
| xZoomLevel | number   | The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out. |            |
| yZoomLevel | number   | The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.   |            |
| duration   | number   | The amount of time it should take for the zoom to complete.                                                               |            |
| easing     | Function | The easing function to apply to the zoom.                                                                                 | easeLinear |

**example:**

```js
// Zoom in at 2x over 5 seconds.
camera.zoomTo(2, 2, 5000);

// Zoom in at 2x horizontally and 1.5x vertically over 3 seconds with a bouncing effect.
camera.zoomTo(2, 1.5, 3000, pc.EASING.easeBounceIn);
```

### **panTo**

Pans to a specific location with an optional easing.

| param    | type     | description                                                | default    |
|----------|----------|------------------------------------------------------------|------------|
| x        | number   | The x coordinate of the location to pan to.                |            |
| y        | number   | The y coordinate of the location to pan to.                |            |
| duration | number   | The amount of time it should take for the pan to complete. |            |
| easing   | Function | The easing function to apply to the pan.                   | easeLinear |

**example:**

```js
// Pan to (200, 250) over 5 seconds.
camera.panTo(200, 250, 5000);

// Pan to (1050, 870) over 3 seconds with a cubic easing.
camera.panTo(1050, 870, 3000, pc.EASING.easeCubicIn);
```

### **fade**

Fades in or out to a specified opacity of a color with an optional easing.

This effect requires the sprite and texture options to be set.

| param    | type     | description                                                                | default    |
|----------|----------|----------------------------------------------------------------------------|------------|
| color    | number   | The hex of the color to fade in or out of.                                 |            |
| opacity  | number   | The opacity to fade to with 1 being fully to the color and 0 being opaque. |            |
| duration | number   | The amount of time it should take for the fade to complete.                |            |
| easing   | Function | The easing function to apply to the fade.                                  | easeLinear |

**example:**

```js
// Fade to black in 5 seconds.
camera.fadeTo(0x000000, 1, 5000);

// Fade to mostly blue over 3 seconds with a cubic easing.
camera.fadeTo(0x337ab7, 0.7, 3000, pc.EASING.easeCubicIn);
```

## **License**

MIT