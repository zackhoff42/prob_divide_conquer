function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let pivotIndex = findPivotIndex(arr);

    if (!pivotIndex || arr[pivotIndex - 1] < target) {
        return -1;
    }

    if (target < arr[leftIdx]) {
        while (pivotIndex <= rightIdx) {
            let middleIdx = Math.floor((pivotIndex + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal < target) {
                pivotIndex = middleIdx + 1;
            } else if (middleVal > target) {
                rightIdx = middleIdx - 1;
            } else if (middleVal === target) {
                return middleIdx;
            }
        }
    } else if (target > arr[leftIdx]) {
        while (leftIdx <= pivotIndex) {
            let middleIdx = Math.floor((leftIdx + pivotIndex) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal < target) {
                leftIdx = middleIdx + 1;
            } else if (middleVal > target) {
                pivotIndex = middleIdx - 1;
            } else if (middleVal === target) {
                return middleIdx;
            }
        }
    }

    return -1;

}

function findPivotIndex(arr) {
    leftIdx = 0;
    rightIdx = arr.length - 1;
    
    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal > arr[middleIdx + 1]) {
            return middleIdx + 1;
        } else if (middleVal < arr[middleIdx - 1]) {
            return middleIdx;
        } else if (middleVal > arr[leftIdx]) {
            leftIdx = middleIdx + 1;
        } else if (middleVal < arr[leftIdx]) {
            rightIdx = middleIdx - 1;
        } else {
            return 0;
        }
    }
}

module.exports = findRotatedIndex