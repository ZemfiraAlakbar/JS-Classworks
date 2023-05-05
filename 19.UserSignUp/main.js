let nameInput=document.querySelector('#input-name')
let emailInput=document.querySelector('#input-email')
let passwordInput=document.querySelector('#input-password')
let checkBox=document.querySelector('.check')
let submitBtn=document.querySelector('.submit')
let form=document.querySelector('form')

submitBtn.disabled=true

nameInput.addEventListener('change',()=>{
    if(nameInput.value && emailInput.value && passwordInput.value && checkBox.value) {
        submitBtn.disabled=false
    }
})

emailInput.addEventListener('change',()=>{
    if(nameInput.value && emailInput.value && passwordInput.value && checkBox.value) {
        submitBtn.disabled=false
    }
})

passwordInput.addEventListener('change',()=>{
    if(nameInput.value && emailInput.value && passwordInput.value && checkBox.value) {
        submitBtn.disabled=false
    }
})

checkBox.addEventListener('change',()=>{
    if(nameInput.value && emailInput.value && passwordInput.value && checkBox.value) {
        submitBtn.disabled=false
    }
})

let users=JSON.parse(localStorage.getItem('users')) || []

form.addEventListener('submit',function (e) {
    e.preventDefault()
    let obj={
        Id: Date.now(),
        Username: nameInput.value,
        Email: emailInput.value,
        // Password: passwordInput.value,
        // CheckBox: checkBox.checked
    }
    users.push(obj)
localStorage.setItem('users',JSON.stringify(users))
}) 
submitBtn.addEventListener('click',function () {
    window.location='users.html'
})