// 1
function isAnogram(str1,str2) {
   return str1.toLocaleLowerCase().split('').sort().join('')==str2.toLocaleLowerCase().split('').sort().join('')
}
console.log(isAnogram('Sevil','EvilS'));
console.log(isAnogram('maqa','qaqam'));

// 2
function maxChar(str) {
  let maxCount=0
  let myResultLetter=''
  str.toLocaleLowerCase().split``.map((letter)=>{
    if (str.toLocaleLowerCase().split(letter).length>maxCount) {
        maxCount=str.toLocaleLowerCase().split(letter).length
        myResultLetter=letter
    }
  })
return myResultLetter;
}
console.log(maxChar('Ilffaft'));
console.log(maxChar('eGnecg'));