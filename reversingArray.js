function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];//the value at index `0` is replaced with the value at the last index
    arr[arr.length - 1 - i] = temp;//the value at the last index is replaced with the stored `temp`
  }
  return arr;
}