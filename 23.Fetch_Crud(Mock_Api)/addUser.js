let inputName = document.querySelector('#inputName')
let inputEmail = document.querySelector('#inputEmail')
let form = document.querySelector('form')
let submitBtn = document.querySelector('.submit')

submitBtn.setAttribute('disabled','')

inputName.addEventListener('input',function () {
    if (inputEmail.value && inputName.value) {
        submitBtn.removeAttribute('disabled','')
    }
})
inputEmail.addEventListener('input',function () {
    if (inputEmail.value && inputName.value) {
        submitBtn.removeAttribute('disabled','')   
    }
})

form.addEventListener('submit',function (event) {
    event.preventDefault()
    async function addUser() {
        await fetch('http://localhost:8080/users/' , {
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: inputName.value,
                email: inputEmail.value
            })
        })
    }
    addUser()
    window.location.href="index.html"
    })