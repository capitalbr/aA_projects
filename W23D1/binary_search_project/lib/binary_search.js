function binarySearch(array, target) {
    if (array.length === 0) {  // === 0
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    if (target === array[midIdx]) {
        return true;
    } else if (target > array[midIdx]) {
        return binarySearch(array.slice(midIdx+1), target);
    } else {
        return binarySearch(array.slice(0, midIdx), target);
    }
}

//[5, 10, 12, 15, 20, 30, 70]   12
function binarySearchIndex(array, target) {
    if (array.length < 1) {  // === 0
        return -1;
    }

    let midIdx = Math.floor(array.length / 2);
    if (target === array[midIdx]) {
        return midIdx;
    } else if (target > array[midIdx]) {
        let result = binarySearchIndex(array.slice(midIdx +1), target);
        return result !== -1 ? result + midIdx +1 : -1;
    } else {
        return binarySearchIndex(array.slice(0, midIdx), target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};