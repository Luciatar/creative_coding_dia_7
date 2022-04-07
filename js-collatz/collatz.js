export function generateCollatzSequence(length) {
    const tree = []
    for (let i = 1; i <= length; i++) {

        const branch = [];
        let n = i;
        do {
            branch.push(n);
            n = collatz(n);

        } while (n != 1);
        branch.push(1)
        branch.reverse();
        tree.push(branch)

    }
    return tree;
}

function collatz(num) {
    if (isOdd(num)) {
        num = num * 3 + 1;
        // console.log("odd number. Y now: " + num);
    } else {
        num = num / 2;
        // console.log("odd number. Y now: " + num);
    }
    return num;
}

function isOdd(num) {
    if (num % 2 == 0) {
        return false
    }
    return true;
}