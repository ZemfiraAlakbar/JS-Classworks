// let addBtn=document.querySelector('.addBtn')
// let deleteBtn=document.querySelector('.deleteBtn')
// let emptyBtn=document.querySelector('.emptyBtn')

// // 1
// addBtn.addEventListener('click',function () {
// localStorage.setItem('Age','21')
// localStorage.setItem('LastName','Alakbarova')
// localStorage.setItem('FirstName','Zenfira')
// })

// // 1.1
// console.log('task 1.1');
// console.log(localStorage.length);

// // 2
// console.log('task 2');
// for(let i=0;i<localStorage.length;i++){
//     console.log(localStorage.key(i));
// }

// // 3
// console.log('task 3');
// for(let i=0;i<localStorage.length;i++){
//    console.log(localStorage.getItem(localStorage.key(i)));
// }

// // 4
// console.log('task 4');
// console.log(localStorage.key(2));

// // 4.1
// console.log('task 4.1');
// let arr=[]
// for(let i=0;i<localStorage.length;i++){
// arr.push(localStorage.key(i))
// }
// console.log(arr);

// // 5
// console.log('task 5');
// console.log(localStorage.getItem(localStorage.key(2)));

// // 5.1
// console.log('task 5.1');
// let newArr=[]
// for(let i=0;i<localStorage.length;i++){
//     let allValues=localStorage.getItem(localStorage.key(i));
//     newArr.push(allValues)
// }
// console.log(newArr);

// // 6
// deleteBtn.addEventListener('click',function () {
//     localStorage.removeItem('FirstName')
// })

// // 6.1
// emptyBtn.addEventListener('click',function () {
//     localStorage.clear()
// })



let inputName=document.querySelector('#inputName')
let inputEmail=document.querySelector('#inputEmail')
let inputPassword=document.querySelector('#inputPassword')
let checkbox=document.querySelector('#Check')
let submitBtn=document.querySelector('.btn-primary')
let form=document.querySelector('form')

const users=JSON.parse(localStorage.getItem('users')) || []

form.addEventListener('submit',function (events) {
    events.preventDefault()
    const userObj={
        username: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
        check: checkbox.checked
    }
    if(userObj.username && userObj.email && userObj.password) {
         users.push(userObj)
        localStorage.setItem('users', JSON.stringify(users))
    }
})

// 8 show console localeStorage key/value as Object.
console.log(Array(users));