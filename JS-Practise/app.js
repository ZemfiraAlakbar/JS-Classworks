// reverse string
console.log('task 1');
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('salam'));

// polidrom
console.log('task 2');
function isPolidrom(word) {
   if (word===word.split('').reverse().join('')) {
   return true;
}  else return false;
}
console.log(isPolidrom('refer'));
console.log(isPolidrom('Ana'));
console.log(isPolidrom('apple'));

// remove dublicated
console.log('task 3');
let arr = [1,2,3,4,1,5,5,2,3]
function removeDublicated(arr) {
    return arr.filter((el,i)=>arr.indexOf(el)==i )
}
console.log(removeDublicated(arr));

//generate otp
console.log('task 4');
function generateOtp() {
    let digits = "0123456789"
    let num = ''
    for(let i=0;i<4;i++){
        num += digits[Math.floor(Math.random()*10)]
    }
    return num;    
}
console.log( generateOtp());
console.log( generateOtp());
console.log( generateOtp());