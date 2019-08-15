function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
    return arr;
}

function selectionSort(arr) {
    for (let j = 0; j < arr.length; j++){
        let minIdx = j;
        for (let i = j+1; i < arr.length; i++){
            if (arr[minIdx] > arr[i]){
                minIdx = i;
            }
        }
        swap(arr, j, minIdx);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};