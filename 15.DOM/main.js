let nameInput = document.querySelector("#nameinput");
let surnameInput = document.querySelector("#surnameinput");
let emailInput = document.querySelector("#emailinput");
let passInput = document.querySelector("#passinput");
let checkbox = document.querySelector(".check");
let radios = document.querySelectorAll(".radio1");
let submit = document.querySelector(".submit");
let checked = document.querySelector('.checked')

nameInput.addEventListener("focus", function () {
  this.style.backgroundColor = "gray";
  this.style.color = "white";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
surnameInput.addEventListener('mouseover',function () {
    this.style.backgroundColor='green'
})
surnameInput.addEventListener('mouseout',function () {
    this.style.backgroundColor=''
})
emailInput.addEventListener('contextmenu' , function () {
    this.style.backgroundColor='red'
})
emailInput.addEventListener('mouseout' , function () {
    this.style.backgroundColor=''
})
let defVal=444555666;
passInput.addEventListener('focus',function () {
    this.defaultValue= defVal;
})
passInput.addEventListener('mouseout',function () {
    this.defaultValue= '';
})
checkbox.addEventListener('click',function () {
    if (checkbox.checked) {
       checked.style.visibility='visible'
    } else {
        checked.style.visibility='hidden'
    }
})
submit.setAttribute('disabled','')
radios.forEach((el)=>el.addEventListener('click',function () {
    alert('Thanks')
}))
nameInput.addEventListener('input',function () {
    if(nameInput.value !=='') {
        
    }
})