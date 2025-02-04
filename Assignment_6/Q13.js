function findSecondSmallestAndLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements.";
    }

    let uniqueArr = [...new Set(arr)];
    if (uniqueArr.length < 2) {
        return "Array should have at least two unique elements.";
    }

    uniqueArr.sort((a, b) => a - b);

    let secondSmallest = uniqueArr[1];
    let secondLargest = uniqueArr[uniqueArr.length - 2];

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}
