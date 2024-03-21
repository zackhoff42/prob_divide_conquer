function countZeroes(arr) {
    const target = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;

    if (arr[leftIdx] === target) {
        return arr.length;
    } else if (arr[rightIdx] > target) {
        return 0;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > target) {
            leftIdx = middleIdx + 1;
        } else if (middleVal === target) {
            rightIdx = middleIdx - 1;
            count += arr.slice(middleIdx).length;
            arr = arr.slice(leftIdx, middleIdx);
        }
    }

    return count;
}

module.exports = countZeroes