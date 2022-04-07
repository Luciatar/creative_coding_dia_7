
import {
    inputAngle, inputBranches, inputLength, OPTIONS
} from "./options.js";

export const inputHandler = (tree) => {



    inputAngle.addEventListener("change", function () {
        OPTIONS.angle = inputAngle.value
        document.dispatchEvent(new CustomEvent('redraw', {
            detail: {
                num_branches: inputBranches.value,
            }
        }));
    })

    inputLength.addEventListener("change", function () {
        OPTIONS.len = inputLength.value
        document.dispatchEvent(new CustomEvent('redraw', {
            detail: {
                num_branches: inputBranches.value,
            }
        }));
    })

    inputBranches.addEventListener("change", function () {
        document.dispatchEvent(new CustomEvent('newtree', {
            detail: {
                num_branches: inputBranches.value,
            }
        }));

    })

}