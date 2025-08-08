
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let angle = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#223466";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(angle * Math.PI / 180);
  ctx.fillStyle = "#00e0ff";
  ctx.fillRect(-50, -10, 100, 20);
  ctx.restore();
  ctx.fillStyle = "#fff";
  ctx.font = "20px sans-serif";
  ctx.fillText("Rotate the shape to bridge the gap!", 260, 550);
}
function updateSlider(val) {
  angle = parseInt(val);
  document.getElementById("angleLabel").innerText = angle + "°";
  draw();
}
draw();
