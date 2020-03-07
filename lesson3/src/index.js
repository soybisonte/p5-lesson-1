import './style/app.styl'

import p5 from 'p5'

const s = (p5) => {

  let x = 100;
  let y = 100;
  let slider;


  p5.setup = () => {
    p5.createCanvas(800, 800);
  };

  p5.draw = () => {
    let middle = {
      x: p5.width / 2,
      y: p5.height / 2
    }
    p5.background(0, 30);
    // p5.fill(255);
    p5.noFill();
    p5.stroke(255, 125, 0)
    // p5.blendMode(p5.SOFT_LIGHT)
    const n = 20;
    let separation = 30;
    let moveCoords = {
      x: p5.mouseX - middle.x,
      y: p5.mouseY - middle.y,
    }
    p5.rectMode(p5.CENTER)
    const delta = 0.0012
    p5.translate(middle.x, middle.y)
      for (var i = 0; i < n; i++) {
        p5.push()
        // p5.rotate(p5.frameCount * delta * (i + 1) + 4 * delta * i)
          p5.rect(0, 0, separation + (i * separation), separation + (i * separation));
          p5.pop()
      }
  };

};

let myp5 = new p5(s);
