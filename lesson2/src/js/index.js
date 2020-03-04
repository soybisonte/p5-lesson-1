
//constante que define el radio de la particula
class Ball {

  // opciones de construccion y configuracion
  constructor(options) {

    this.position = options.position
    this.wave = options.wave
    this.radius = options.radius
    this.color = options.color
    this.saturate = 0
  }

  draw() {
    const {radius, color} = this
    // noStroke()


    colorMode(HSB, 100);

    this.saturate = 50 * Math.sin(frameCount / 100) + 50

    fill(this.saturate, 100, this.saturate)
    stroke(this.saturate,100, this.saturate, 25)
    // fill(255, 200)
    line(this.position.x, this.position.y, width/2, height/2)
    ellipse(this.position.x, this.position.y, radius, radius)
  }
  update() {
    this.position.x = width / 2 + this.wave.amp * Math.sin(this.wave.phase + frameCount / 20)
  }

}



let ball1, ball2;
let particles = [];

function setup() {
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

function draw() {

  background(0);
  noStroke();
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
}
