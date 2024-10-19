// Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order.

function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    const reversedArray = [];
    for (let i=arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]

// Find the Maximum Product of Two Numbers
// Given an array of integers, write a function maxProduct(arr) that finds the maximum product of two numbers in the array.

function maxProduct(arr) {
    let maxProduct = null;
    let leftPointer = 0;
    let rightPointer = 1;
    let done = false;
    while (!done) {
      if (!arr[leftPointer]) {
        done = true;
      }
      if (maxProduct === null) {
        maxProduct = arr[leftPointer] * arr[rightPointer];
        rightPointer++;
        continue;
      }
      if (!arr[rightPointer]) {
        leftPointer++;
        rightPointer = leftPointer + 1;
        continue;
      }
      if (arr[leftPointer] * arr[rightPointer] > maxProduct) {
        maxProduct = arr[leftPointer] * arr[rightPointer];
      } else {
        rightPointer++;
      }
    }
    return maxProduct;
}
console.log(maxProduct([3, 6, -2, -5, 7, 3])); // Output: 21