import {
    canvas, ctx
} from "./main.js";
import {
    OPTIONS
} from "./options.js";


export const draw = (tree) => {
    wipeCanvas()
    console.log("drawing")
    if (tree.length < 0) { return }

    tree.forEach(branch => {
        ctx.restore();
        ctx.save();
        ctx.translate(OPTIONS.canvasWidth / 2, OPTIONS.canvasHeight / 2);
        let color = randomColorHsla(80, 80, 0.4)
        for (let j = 0; j < branch.length; j++) {
            let value = branch[j];
            if (value % 2 == 0) {
                ctx.rotate(OPTIONS.angle * Math.PI / 180);
            } else {
                ctx.rotate(-OPTIONS.angle * Math.PI / 180);
            }

            ctx.beginPath();
            // console.log(branch.start.x, branch.start.y);

            ctx.moveTo(0, 0);
            ctx.lineTo(0, -OPTIONS.len);
            ctx.translate(0, -OPTIONS.len);
            ctx.lineWidth = 3;
            ctx.strokeStyle = color
            ctx.stroke();
        }
    });
}
function randomColorHsla(saturation, lightness, alfa) {
    let hue = Math.floor(Math.random() * 360);
    let hsl = "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alfa + ")";
    return hsl;
}
function wipeCanvas() {
    console.log("canvas wipe")
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
