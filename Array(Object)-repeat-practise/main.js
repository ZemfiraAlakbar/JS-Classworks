// 1
console.log('task 1');
filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]

function filterArray(Arr) {
  return  Arr.filter((el)=>typeof el==='number'
    )
   
}
console.log(filterArray([1, 'c', 2, "a", "b"]));
console.log(filterArray(['4', 1, "a", "b", 0, 15]));

// 2
// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0
console.log('task 2');
function sliceSum(arr,n) {
    return arr.slice(0,n).reduce((acc,sum)=>acc+sum,0)
}
console.log(sliceSum([9, 8, 7, 6],3));
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([3, 6, 2], 0));

// 3


// 4
console.log('task 4');
function hashPlusCount(str) {
    let hashcount = 0
    let pluscount=0
   str.split('').map((el)=>el==='#' ? hashcount ++ : pluscount ++)
   return [hashcount,pluscount]
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(''));

// 5
console.log('task 5');
function reverseCase(str) {
    return str.split('').map((el)=>el==el.toUpperCase() ? el.toLowerCase() :el.toUpperCase()).join('')
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));