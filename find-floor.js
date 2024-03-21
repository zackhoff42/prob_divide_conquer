function findFloor(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (target < arr[0]) {
        return -1;
    } else if (target > arr[rightIdx]) {
        return arr[rightIdx];
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (target > middleVal) {
            if (target <= arr[middleIdx + 1]) {
                return middleVal;
            }
            leftIdx = middleIdx + 1;
        } else if (target < middleVal) {
            rightIdx = middleIdx - 1;
        } else {
            return arr[middleIdx - 1];
        }
    }
}

module.exports = findFloor