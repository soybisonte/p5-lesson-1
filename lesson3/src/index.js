import './style/app.styl'

import * as P5 from 'p5'

P5.setup() {
  console.log('hello setup');
  P5.createCanvas(640, 480);
  P5.background(0);

}
//
P5.draw() {
  console.log('hello draw');
  P5.background(0);
  P5.noStroke();
  P5..ellipse(P5.mouseX, P5.mouseY, 20, 20)
}
