// 1 splice methods
const arr1 = ['a','b','c','d','e',]

// 1.1 
// arr1.splice(1,1)
// console.log(arr1);

//  1.2
// arr1.splice(2,2)
// console.log(arr1);

// 1.3
// arr1.splice(arr1.length-1)
// console.log(arr1);

// 1.4
// arr1.splice(arr1.length-3)
// console.log(arr1);

// 1.5
// arr1.splice(3,0,'3','4')
// console.log(arr1);

// 1.6
// arr1.splice(0,2,'A','B')
// console.log(arr1);


////////////// 2 Slice method
const arr2 = ['user1','user2','user3',11,3,5]

// 2.1
let newArr=arr2.slice()
console.log(newArr);

// 2.2
let newArr2=arr2.slice(1,5)
console.log(newArr2); 

// 2.3
let newArr3=arr2.slice(2)
console.log(newArr3);


///////////////////////////// 3 Concat method
const arr3 = [1,2,3]
const arr33 = [4,5,6]

// 3.1 
let newConcatArr = arr3.concat(arr33)
console.log(newConcatArr);

// 3.2
let newConcatArr2 = arr3.concat('a','b')
console.log(newConcatArr2);


//////////////////////////////////////// 4 forEach method 
const arr4 = ['name','surname','10','age','city','uni',80,20]

// 4.1
arr4.forEach((element)=> element)
console.log(arr4);

// 4.2
arr4.forEach((element)=>typeof(element)==='number' ? console.log(element*2) : element)


/////////////////////////////////////// 5 Map method 
const arr5 = [4,5,6,'2',6,true,undefined,'55']

// 5.1
arr5.map((element) => element)
console.log(arr5);

// 5.2  1 ci usul
// arr5.map((element) => {
//     if (typeof element === 'number') {
//         console.log(element*5);
//     } else console.log(element);
// }) 

// 5.2  2 ci usul
arr5.map((element)=>typeof element==='number' ? console.log(element*5) : console.log(element)) 


/////////////////////////////////// 6 Filter method
const mixArray = ['1',2,4,'a',false,'9',12,undefined,3,true,null]

// 6.1
const newArrForNumbers = mixArray.filter((item)=>typeof item === 'number')
console.log(newArrForNumbers);