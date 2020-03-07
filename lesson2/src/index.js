
import './style/app.styl'
import Ball from './js/Ball.js'

//constante que define el radio de la particula

let ball1, ball2;
let particles = [];
console.log('hello world');

function setup() {
  console.log('hello world');
  createCanvas(640, 480);
  background(0);

  const n = 100;

  for (var i = 0; i < n; i++) {

    particles[i] = new Ball({
      position: {
        x: width / 2,
        y: 5 * i
      },
      wave: {
        amp: 250,
        phase: 10 * i
      },
      radius: 15,
      color: {
        r: 0,
        g: 0,
        b: 0,
      }
    });
  }

}
//
function draw() {

  background(0);
  noStroke();
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
}
