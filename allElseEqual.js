function allElseEqual(arr) {
  let sumHalf = (sumArray(arr) / 2);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sumHalf) {
      return arr[i];
    }
  }
  return null;
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
