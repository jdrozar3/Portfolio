$(document).ready(() => {
  $(".hide")
    .fadeIn(2000)
    .removeClass();
});

//animation
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
const backgroundcolor = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundcolor.addColorStop(0, "#55D6AA"); //"#171e26"
backgroundcolor.addColorStop(1, "#4131CC"); //#3f586b

//c.fillStyle = "rgba(255, 0, 0, 0.5)";
//c.fillRect(100, 100, 100, 100);

//line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.stroke();

//circle
/*const circle = () => {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;

  c.beginPath();
  c.arc(x, y, 30, 0, 259, false);
  c.strokeStyle = "rgba(255, 0, 0, 0.5)";
  c.stroke();
};

for (let i = 0; i < 4; i++) {
  circle();
} */

//object for multiple circles
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 259, false);
    c.strokeStyle = "rgba(227, 234, 239, 0.6)";
    c.stroke();
    c.fillStyle = "rgba(227, 234, 239, 0.6)";
    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];
for (let i = 0; i < 100; i++) {
  var x = Math.random() * (innerHeight - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dy = Math.random() - 0.5;
  var dx = Math.random() - 0.5;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.fillStyle = backgroundcolor;
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
