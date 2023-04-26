// 2 find median
arr1 = [1, 8, 5, 9];
arr2 = [1, 8, 4, 5, 7];
function Median(arr) {
  let newArr = arr;
  newArr = newArr.sort((a, b) => a - b);
  console.log(newArr);
  let length = newArr.length;

  if (length % 2 == 1) {
    console.log(newArr[length / 2 - 0.5]);
  } else {
    console.log((newArr[length / 2] + newArr[length / 2 - 1]) / 2);
  }
}
Median(arr1);
Median(arr2);