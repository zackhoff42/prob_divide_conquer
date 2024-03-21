function sortedFrequency(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < target) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > target) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === target && middleVal !== arr[leftIdx]) {
            leftIdx += 1;
        } else if (middleVal === target && middleVal !== arr[rightIdx]) {
            rightIdx -= 1;
        } else if (arr[leftIdx] === arr[rightIdx] && arr[rightIdx] === middleVal) {
            return arr.slice(leftIdx, rightIdx + 1).length;
        }
    }

    return -1;
}

module.exports = sortedFrequency