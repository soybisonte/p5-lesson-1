import './style/app.styl'

import p5 from 'p5'

const s = (p5) => {
  let xOff = 0
  p5.setup = () => {

    p5.createCanvas(800, 800);

  };

  p5.draw = () => {

    xOff += 0.03;
    let noize = p5.noise(xOff) * 10

    p5.translate(p5.width / 2, p5.height / 2);

    p5.background(0);
    p5.noFill();
    p5.stroke(0, 255, 125);

    const edges = 6;
    const radius = 25;
    const n = 10;
    let deltaAngle = 2 * Math.PI / edges;

    for (var j = 0; j < n; j++) {
      p5.beginShape();
        for (var i = 0; i < edges; i++) {

          let coords = {
            x: (j * radius) * Math.cos(deltaAngle * i + p5.frameCount * 0.03),
            y: (j * radius) * Math.sin(deltaAngle * i + p5.frameCount * 0.03),
          }

          p5.vertex(coords.x, coords.y);
        }
      p5.endShape(p5.CLOSE);
    }

  };

};

let myp5 = new p5(s);
