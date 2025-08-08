
// Basic canvas setup for ShapeShifters PWA version
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#223466";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.font = "36px sans-serif";
ctx.fillText("ShapeShifters PWA Loaded!", 180, 300);
