// Where is the circle
var canvas;
var x, y;
let points1;
let points2;
let points3;
let points4;
let points5;
let points6;
let points7;
let points8;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  // Starts in the middle
  x = width / 4;
  y = height + random(100);
  points1 = new Points();
    points2 = new Points();
    points3 = new Points();
    points4 = new Points();
    points5 = new Points();
    points6 = new Points();
    points7 = new Points();
    points8 = new Points();
}

function draw() {
  background(200);
  points1.move();
  points1.show();
     points2.move();
  points2.show();
     points3.move();
  points3.show();
     points4.move();
  points4.show();
    points5.move();
  points5.show();
    points6.move();
  points6.show();
     points7.move();
  points7.show();
    points8.move();
  points8.show();
}

class Points {
    constructor() {
        textSize(48);
        textFont('Helvetica');
        this.x = width/3 + random(-300, 300);
        this.y = height + random(-100, 100);
    }
    
    move() {
        this.y += random(-2);
        if (this.y < 0) {
    this.y = height;
  }
    }
    
    show() {
        stroke(10);
        strokeWeight(4);
        text('Thank You Kor Group!', this.x, this.y);
    
    }
}