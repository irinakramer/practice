function binarySearch(arr, elem) {
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while(arr[middle] !== elem && left <= right) {
        if(elem < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103);