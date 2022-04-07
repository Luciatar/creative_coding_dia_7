// The Collatz Conjecture
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/EYLWxwo1Ed8
// https://editor.p5js.org/codingtrain/sketches/XjLDE7gu6

const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
canvas.width = 1980;
canvas.height = 1080;


export function codingtrain() {



    for (let i = 1; i <= 50000; i++) {

        let sequence = [];
        let n = i;
        do {
            sequence.push(n);
            n = collatz(n);

        } while (n != 1);
        // sequence.push(1);
        sequence.reverse();

        let len = 3;
        let angle = -8;
        ctx.restore();
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 1.5);
        let color = randomColorHsla(80, 80, 0.4)
        for (let j = 0; j < sequence.length; j++) {
            let value = sequence[j];
            if (value % 2 == 0) {
                ctx.rotate(angle * Math.PI / 180);
            } else {
                ctx.rotate(-angle * Math.PI / 180);
            }

            ctx.beginPath();
            // console.log(branch.start.x, branch.start.y);

            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.translate(0, -len);
            ctx.lineWidth = 3;
            ctx.strokeStyle = color
            ctx.stroke();



        }
    }
}

function collatz(n) {
    // even
    if (n % 2 == 0) {
        return n / 2;
        // odd
    } else {
        return (n * 3 + 1) / 2;
    }
}

function randomColorHsla(saturation, lightness, alfa) {
    let hue = Math.floor(Math.random() * 360);
    let hsl = "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alfa + ")";
    return hsl;
}