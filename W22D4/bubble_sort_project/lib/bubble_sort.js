function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
    let swapped = true;
    while (swapped === true) {
        swapped = false;
        for (let i = 0; i<= array.length -2; i++) {
            if (array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapped = true;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};