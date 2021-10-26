function generate(arr, n) { // generate array with random numbers
    for (let i = 0; i < n; i++) {
        let value = Math.floor(Math.random() * 10);
        arr.push(value);
    }
    return arr;
}

function findMin(arr1, arr2) {
    let arrEqual = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr2[j]) {
                arrEqual.push(arr1[i]);
                break;
            }
        }
    }
    return Math.min(...arrEqual);
}

function bubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}

let n = prompt("Enter number of elements in an array: ");
let arr1 = [], arr2 = [], arr3 = [];
result1 = generate(arr1, n);
result2 = generate(arr2, n);

console.log("First array: " + result1);
console.log("Second array: " + result2);

console.log("Minimum element: " + findMin(arr1, arr2));

console.log("Unsorted array: " + generate(arr3, n))
console.log("Sorted array: " + bubbleSort(arr3))