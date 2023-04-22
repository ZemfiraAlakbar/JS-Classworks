////////////////////////////////////////////////// 1
console.log("task 1");
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"

function secretName(anyArr) {
  let newArr = anyArr.map((el) => el.slice(0, 1).toLocaleUpperCase());
  return newArr.join('');
}
console.log(secretName(names1));
console.log(secretName(names2.sort()));
console.log(secretName(names3.sort()));

////////////////////////////////////////////// 2
console.log("task 2");
const users = [
        { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
        { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
        { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
        { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
        { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
        { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
    ]

// 2.1
console.log('task 2.1');
console.log(
  users.filter(
    (el) => el.surname[0].toLocaleLowerCase() === "r" && el.uni === "UNEC"
  )
);
// 2.2
console.log('task 2.2');
console.log(
  users.filter(
    (el) => el.name[0].toLocaleLowerCase() === "a" && el.age === "22"
  )
);
// 2.3
console.log('task 2.3');
let newArr2 = users.map((el) =>
  el.gender === "male"
    ? `Mr ${el.name}`
    : el && el.gender === "female"
    ? `Ms ${el.name}`
    : el
);
console.log(newArr2);
// 2.4
console.log('task 2.4');
console.log(users.sort((a,b)=>a.age-b.age))

///////////////////////////////////////////////////// 3
console.log('task 3 shuffle');
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function shuffle(anyArr) {
    let newArr = anyArr.sort(() => Math.random() - 0.5);
    return newArr
}
// let shuffled = numbers.sort(() => Math.random() - 0.5);
console.log(shuffle(letters));
console.log(shuffle(numbers));

///////////////////////////////////////////////////// 4
console.log('task 4');
const arr4 = [
        {
            product: 'Lenova',
            price: 1900,
        },
        {
            product: 'HP',
            price: 1300,
        },
        {
            product: 'Acer',
            price: 1600,
        },
    ]

arr4.forEach((el)=>el.price ? console.log(el.price/2) : el)

//////////////////////////////////////////////////5
console.log('task 5');
let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251

function reverseNum() {
    Array.from(arguments).forEach((el)=>el)
    return Array.from(arguments)+Array.from(arguments).reverse();
}
console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));

// console.log(reverseNum(num1)+'642');
// console.log(reverseNum(num2)+'201');
// console.log(reverseNum(num3)+'251');