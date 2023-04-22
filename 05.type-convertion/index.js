// 1
console.log("Task",1); 
let myText = 'An Array is a collection of items of same data type stored at contiguous memory locations'
let countA = 0
for(i=0;i<myText.length;i++){
    if (myText[i].toLowerCase() =="a") {
    console.log(myText[i]); 
    countA++
    }
}
console.log(`There are ${countA} number of 'a'`);

// 2
console.log("Task",2);
const arr1=[1,2,4,5,7,9,13,22] 
let sum = 0
for(i=0;i<arr1.length;i++){
    sum+=arr1[i]
}
console.log(sum);

// 3
console.log("Task",3);
const arr2 = [false,0,2,true,23,undefined,'are u stack?','come on']
const newArr2 = []
for(i=0;i<arr2.length;i++){
    if (i%2==1) {
        newArr2.push(arr2[i])
    }
}
console.log(newArr2);

// 4
console.log("Task",4);
let text1 = 'How is it going?'
let newText = ''
for(i=0;i<text1.length;i++) {
    if (text1[i] !=='i') {
        newText+=text1[i] 
    }
}
console.log(newText);

// 5
console.log("Task",5);
const numbersArr = [2,false,'5','true',9,0,'1'] 
let sum2 = 0 
for(i=0;i<numbersArr.length;i++) {
    if (typeof(numbersArr[i])=='number') {
        sum2+=numbersArr[i]
    }
}
console.log(sum2);

// 6
console.log("Task",6);
const mixType = [1,'3',4,false,null,22,true]
const newType = []
for(i=0;i<mixType.length;i++){
    newType.push(String(mixType[i]))
}
console.log(newType);

// 7
console.log("Task",7);
const myObj = {
    color:'Red',
    width: 320,
    height: 200,
    padding: 4,
    fontSize:'22px'
}
for(let value in myObj) {
    if (typeof(myObj[value])=='number') {
        console.log(myObj[value]*2);
    }
}


// 4 again
// let text2 = 'How is it going?'
// let newText2 = ''
// for (i=0;i<text2.length;i++){
//     if (text2[i] !=='i') {
//         newText2+=text2[i] 
//     }
// }console.log(newText2);

// 2 again
// const arr5= [1,2,4,5,7,9,13,22]
// let sum5 = 0;
// for(i=0;i<arr5.length;i++) {
//     sum5+=arr5[i]
// }console.log(sum5);

// 3 again 
// const arr6=[false,0,2,true,23,undefined,'are u stack?','come on']
// const newArr6=[]
// for(i=0;i<arr6.length;i++) {
//     if (i%2==1) {
        // newArr6.push(arr6[i]) 
//     }
// }console.log(newArr6);


// 1 again
// let myyText = 'An Array is a collection of items of same data type stored at contiguous memory locations'
// let aSum = 0;
// for (i=0;i<myyText.length;i++){
//     if (myyText[i].toLowerCase()=='a') {
//         aSum++
//         // console.log(myyText[i]);
//     }
// }console.log(aSum);


// 5 again 
// const numbersarr =[2,false,'5','true',9,0,'1']
// let sum5 = 0;
// for(i=0;i<numbersarr.length;i++){
//     if (typeof(numbersarr[i])=='number') {
//         sum5+=numbersarr[i]
//     }
// }console.log(sum5);


// 6 again 
// const mixxType = [1,'3',4,false,null,22,true]
// const newwType = []
// for(i=0;i<mixxType.length;i++){
//     newwType.push(String(mixxType[i]))
// }console.log(newwType);


// 7 again 
// const myyObj = {
//     color:'Red',
//     width: 320,
//     height: 200,
//     padding: 4,
//     fontSize:'22px'}
// for(let value in myyObj){
//     if (typeof(myyObj[value])=='number') {
//         console.log(myyObj[value]*2)
//     }
// }


// /7
// const myyOb3j = {
//     color:'Red',
//     width: 320,
//     height: 200,
//     padding: 4,
//     fontSize:'22px'}
// for(let i in myyOb3j) {
//     if (typeof(myyOb3j[i])=='number') {
//         console.log(myyOb3j[i]*2)
//     }
// }

// const myyObj4 = {
//         color:'Red',
//         width: 320,
//         height: 200,
//         padding: 4,
//         fontSize:'22px'}
//         for(let key in myyObj4) {
//            if ( typeof(myyObj4[key])=='number') {
//             console.log(myyObj4[key]*2);
//            }
//         }