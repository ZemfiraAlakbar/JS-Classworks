function fun(num) {
  if (num == 0) {
    return 1;
  } else if (num == -1) {
    return 1;
  }
  return num * fun(num - 1);
}

console.log(fun(4));
console.log(fun(5));
console.log(fun(0));
console.log(fun(-1));

function fun2(num) {
  return num > 2 ? num * fun2(num - 2) : 1;
}

console.log(fun2(5));
console.log(fun2(9));
console.log(fun2(1));
console.log(fun2(-3));


function sumArray(arr) {
    return arr.reduce((sum,prev)=>Array.isArray(prev) ? sum+sumArray(prev) : sum+prev,0)
}
// const sumArray = (array) => array.flat(Infinity).reduce((sum, n) => sum + n, 0);
console.log(sumArray([4, [2, [1]], 8]))