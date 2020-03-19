'use strict'

import PixiGameCamera from '../pixi-game-camera.js';

let app;

let container1;
let container2;
let container3;
let container4;

let image1;
let image2;
let image3;
let image4;

let pgc;
let camera;

app = new PIXI.Application({ width: 500, height: 300 });

container1 = new PIXI.Container();
container2 = new PIXI.Container();
container3 = new PIXI.Container();
container4 = new PIXI.Container();

document.body.appendChild(app.view);

image1 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
image2 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-lights.png');
image3 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
image4 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');

image1.width = 1500;
image1.height = 1300;

image2.width = 1500;
image2.height = 1300;

image3.width = 1500;
image3.height = 1300;

image4.width = 1500;
image4.height = 1300;

container1.addChild(image1);
container2.addChild(image2);
container3.addChild(image3);
container4.addChild(image4);

app.stage.addChild(container1, container2, container3, container4);

const options = {
  ticker: app.ticker,
  sprite: PIXI.Sprite,
  texture: PIXI.Texture,
};

pgc = new PixiGameCamera(options);
camera = pgc.camera(app.stage);

// Verified
// camera.shake(3, 3000);

// Verified
// camera.zoomTo(2, 2, 2000);

// Verified
// camera.zoomTo(0.5, 0.75, 2000);

// Verified
// camera.panTo(500, 750, 2000);

// Verified
// camera.fadeTo(0x000000, 1, 2000);

// Verified
// camera.rotate(45, 3000);
