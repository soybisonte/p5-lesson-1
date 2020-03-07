import './style/app.styl'

import p5 from 'p5'

const s = (p5) => {

  let xoff = 0;


  p5.setup = () => {

    p5.createCanvas(800, 800);

  };

  p5.draw = () => {

    p5.translate(p5.width / 2, p5.height / 2);

    p5.background(0);
    p5.noFill();
    p5.stroke(0, 255, 125);

    const n = 30;
    const separation = 15;
    const initialSize = 30;

    const delta = p5.frameCount * 0.0073;

    //noise

    xoff += 0.01;


    for (var i = 0; i < n; i++) {
      let noize = p5.noise(xoff + i) * 150;
      p5.push()
      let shapeCoords = {
        r: initialSize + (i * separation),
        theta: initialSize + (i * separation),
      }
      p5.quad(
        shapeCoords.r +  0.3 * noize, -shapeCoords.theta +  0.3 * noize,
        -shapeCoords.r + 0.3 * noize, -shapeCoords.theta + 0.3 * noize,
        -shapeCoords.r + 1.3 * noize, shapeCoords.theta + 1.3 * noize,
        shapeCoords.r + 1.3 * noize, shapeCoords.theta + 1.3 * noize
      );

      p5.pop()

    }


  };

};

let myp5 = new p5(s);
