'use strict'

import {
  Fade,
  PanTo,
  Shake,
  Rotate,
  ZoomTo,
  Camera,
} from './pixi-game-camera.js';

// Create the PIXI App.
for (let i = 0; i < 6; ++i) {
  const app = new PIXI.Application({ width: 500, height: 300 });

  // Create the containers that will represent the 4 layers of our test scene.
  const container1 = new PIXI.Container();
  const container2 = new PIXI.Container();
  const container3 = new PIXI.Container();
  const container4 = new PIXI.Container();

  // Append the canvas that contains the scene to the document.
  document.body.appendChild(app.view);

  // Load up the 4 images that we need for our scene.
  const image1 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
  const image2 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-lights.png');
  const image3 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
  const image4 = PIXI.Sprite.from('assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');
  const images = [];
  images.push(image1, image2, image3, image4);

  // Set the width and height of each image to be the same.
  images.forEach(image => {
    image.width = 1500;
    image.height = 1300;
  });

  // Add each image to their own container so that they're each on a different layer.
  container1.addChild(image1);
  container2.addChild(image2);
  container3.addChild(image3);
  container4.addChild(image4);

  // Lastly to finish setting up our scene we add the containers to the main container.
  app.stage.addChild(container1, container2, container3, container4);

  // Create an instance of the Camera and set it to use our PIXI app's ticker.
  const camera = new Camera({ ticker: app.ticker });

  switch (i) {
    case 0:
      // Creates an effect that gets passed to the Camera to shake the container at
      // a specified intensity and for a specified duration.
      const mildShake = new Shake(app.stage, 3, 3000);
      camera.effect(mildShake);
      break;
    case 1:
      // Creates an effect that gets passed to the Camera to zoom in on the container
      // for a specified duration.
      const zoomIn = new ZoomTo(app.stage, 2, 2, 2000);
      camera.effect(zoomIn);
      break;
    case 2:
      // Creates an effect that gets passed to the Camera to zoom out on the container
      // for a specified duration.
      const zoomOut = new ZoomTo(app.stage, 0.5, 0.75, 2000);
      camera.effect(zoomOut);
      break;
    case 3:
      // Creates an effect that gets passed to the Camera to pan to a location at the
      // bottom right of the container.
      const panToBottomRight = new PanTo(app.stage, 500, 750, 2000);
      camera.effect(panToBottomRight);
      break;
    case 4:
      // Creates an effect that gets passed to the Camera to fade to black on the
      // container.
      const fadeToBlack = new Fade(app.stage, new PIXI.Sprite(PIXI.Texture.WHITE), 0x000000, 1, 2000);
      camera.effect(fadeToBlack);
      break;
    case 5:
      // Creates an effect that gets passed to the Camera to rotate the container by
      // 45 degrees.
      const rotate45Deg = new Rotate(app.stage, 45, 3000);
      camera.effect(rotate45Deg);
      break;
  }
}
