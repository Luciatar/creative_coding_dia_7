const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
// import {
//     draw
// } from "./draw.js";

let test = {
    x: innerWidth / 2,
    y: innerHeight / 2,
    num: 199,
    branches: [],

}


export const tree = (data) => {
    const branchLength = 3;
    for (let treeLength = 0; treeLength < 100; treeLength++) {
        const branch = {
            start: {
                x: data.x,
                y: data.y,
            },
            end: {
                x: data.x,
                y: data.y - branchLength,
            }
        }
        data.branches.push(branch);
        data.y -= branchLength;
        // console.log(treeLength, typeof data.branches);

    }
    console.log(data);
    draw(ctx, data);
    return data;


}
tree(test)

function draw(ctx, data) {
    if (data.branches.length < 0) {
        return
    }
    ctx.save();
    data.branches.forEach((branch, i) => {
        let angle = 0.5;
        // angle = (angle + i) % 360;
        console.log({
            angle
        })
        if (isOdd(i)) {
            console.log(
                isOdd(i)
            )

            angle *= -1
        }
        console.log({
            angle
        })
        ctx.save();


        ctx.translate(branch.start.x, branch.start.y); // First translate the context to the center you wish to rotate around.
        ctx.rotate(angle * Math.PI / 180); // Then do the actual rotation.
        ctx.translate(-branch.start.x, -branch.start.y); // Then translate the context back.


        ctx.beginPath();
        // console.log(branch.start.x, branch.start.y);
        ctx.moveTo(branch.start.x, branch.start.y);
        ctx.lineTo(branch.end.x, branch.end.y);
        ctx.stroke();

    });
}

function isOdd(num) {
    if (num % 2 == 0) {
        return false
    }


    return true;
}