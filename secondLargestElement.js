let arr = [1,2,3,4,6,7,4,9];
let firstLargest = -Infinity;
let secondLargest = Infinity;

function secondLargestElement(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
        return secondLargest;
}
console.log(secondLargestElement(arr));
