
//constante que define el radio de la particula
class Ball {

  // opciones de construccion y configuracion
  constructor(options) {

    this.position = options.position
    this.velocity = options.velocity
    this.radius = options.radius
    this.color = options.color
    console.log(this);
  }

  draw() {
    const {radius, color} = this

    noStroke()
    fill(color.r, color.g, color.b)
    ellipse(this.position.x, this.position.y, radius, radius)
  }


}


let ball1, ball2;

function setup() {
  createCanvas(640, 480);
  background(0);

  ball1 = new Ball({

    position: {
      x: 0,
      y: 0
    },
    velocity: {
      x: 1,
      y: 1
    },
    radius: 20,
    color: {
      r: 125,
      g: 125,
      b: 125,
    }
  });

}
function draw() {

  background(0);
  noStroke();
  ellipse(frameCount, 120, radius, radius);

  ball1.draw()

}
