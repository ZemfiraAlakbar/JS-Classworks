let name1 = document.createElement('label')
let surname = document.createElement('label')
let input1 = document.createElement('input')
let input2 = document.createElement('input')
let checkbox = document.createElement('input')
let radio = document.createElement('input')
let radio2 = document.createElement('input')
let submitBtn = document.createElement('button')
let form = document.createElement('form')
let time = 15
let letsStartBtn=document.createElement('button')
let nextBtn=document.createElement('button')
let p=document.createElement('p')

submitBtn.innerText='Submit'
name1.innerText='Name'
surname.innerText='Surname'
p.innerText='00:15'
letsStartBtn.innerText='Let is start'
nextBtn.innerText='Next Page >' 

document.body.append(letsStartBtn)
document.body.append(p)
document.body.append(form)
document.body.append(nextBtn)
form.append(name1)
form.append(input1)
form.append(surname)
form.append(input2)
form.append(checkbox)
form.append(radio)
form.append(radio2)
form.append(submitBtn)

name1.style.fontWeight = 'bolder'
surname.style.fontWeight = 'bolder'
checkbox.setAttribute('type', 'checkbox')
radio.setAttribute('type', 'radio')
radio2.setAttribute('type', 'radio')
radio2.setAttribute('name', 'radio')
radio.setAttribute('name', 'radio')
input1.setAttribute('required','')
input2.setAttribute('required','')
radio.setAttribute('required', '')
radio2.setAttribute('required', '')
checkbox.setAttribute('required','')
submitBtn.setAttribute('disabled','')
nextBtn.setAttribute('disabled','')

radio.style.accentColor='red'
radio2.style.accentColor='green'
checkbox.style.accentColor='blue'
form.style.height='100vh'
form.style.border='1px dashed black'
form.style.marginTop='3vh'
form.style.display='flex'
form.style.alignItems='center'
form.style.justifyContent='center'
form.style.flexDirection = 'column'
form.style.rowGap='10px'
p.style.border='1px solid black'
p.style.width='50px'
p.style.height='25px'
p.style.textAlign='center'
p.style.fontWeight='bolder'

let interval;
let count = 15
letsStartBtn.addEventListener ('click' , function () {
    interval=setInterval(() => {
        count-=1
        p.innerText=`00:${count}`
        if (count<10) {
            p.style.border='1px solid green'
            p.style.color='green'
            p.style.fontWeight='bolder'
        }
        if (count>10) {
            p.style.border='1px solid blue'
            p.style.color='blue'
            p.style.fontWeight='bolder'
        }
        if (count==0) {
            clearInterval(interval)
            p.innerText='You missed :)'
            p.style.color='red'
            p.style.border='2px solid red'
            p.style.width='100px'
            submitBtn.setAttribute('disabled','')
        }
    }, 1000);
    this.setAttribute("disabled", "true");
    submitBtn.removeAttribute("disabled");
})
submitBtn.addEventListener('click',function () {
    nextBtn.removeAttribute("disabled");
})
nextBtn.addEventListener('click',function () {
    window.alert('Hello i am an alert box')
})