exports.min = function min(array) {
    if (array == null || array == '') return 0;

    let min = 0;
    for (let item of array) {
        min = (item < min) ? item : min;
    }

    return min;
}

exports.max = function max(array) {
    if (array == null || array == '') return 0;

    let max = 0;
    for (let item of array) {
        max = (item > max) ? item : max;
    }

    return max;
}

exports.avg = function avg(array) {
    if (array == null || array == '') return 0;

    let avg = 0;
    for (let item of array) {
        avg += item;
    }
    avg = (avg / (array.length));

    return avg;
}
