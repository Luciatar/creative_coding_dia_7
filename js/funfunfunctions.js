onload = windowResizeManager();
function windowResizeManager() {
  window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("resize");
  });
}
function paintSplatter() {
  ctx.fillStyle = "hsl(296, 54%, 52%, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    drawCircle({
      cx: randomG(15) * innerWidth,
      cy: randomG(15) * innerHeight,
      r: randomG(3) * 15,
      fill: randomColorHSL({}),
    });
  }
}

function drawLine({
  x1: x1,
  y1: y1,
  x2: x2,
  y2: y2,
  color: color,
  lineWidth: lineWidth,
}) {
  x1 = x1 || 100;
  y1 = y1 || 100;
  x2 = x2 || 200;
  y2 = y2 || 200;
  color = color || "black";
  lineWidth = lineWidth || 10;

  ctx.strokeStyle = color;
  ctx.moveTo(x1, x2);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  console.log("drawingLine");
}

function drawCircle({ cx: cx, cy: cy, r: r, stroke: stroke, fill: fill }) {
  cx = cx || innerWidth / 2;
  cy = cy || innerHeight / 2;
  r = r || innerWidth / 5;
  stroke = stroke || "black";
  fill = fill || "white";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0 * Math.PI, 2 * Math.PI);
  ctx.strokeStyle = stroke;
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.stroke();
}

function randomColorHSL({
  hue: hue,
  saturation: saturation,
  lightness: lightness,
}) {
  hue = hue || Math.floor(Math.random() * 360);
  saturation = saturation || Math.floor(Math.random() * 100);
  lightness = lightness || Math.floor(Math.random() * 100);
  let hsl = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
  return hsl;
}

function randomG(v) {
  var r = 0;
  for (var i = v; i > 0; i--) {
    r += Math.random();
  }
  return r / v;
}
