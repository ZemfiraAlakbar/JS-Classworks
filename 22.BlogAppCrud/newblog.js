let form = document.querySelector('form')
let titleInput = document.querySelector('#title-input')
let bodyTextArea = document.querySelector('#body-input')
let selecAuthortInput = document.querySelector('#author-input')
let author;

selecAuthortInput.addEventListener('change',function () {
    author=e.target.value
})

form.addEventListener('submit' , function (e) {
   e.preventDefault()
   author=e.target.value

   let obj  = {
    title: titleInput.value,
    body: bodyTextArea.value,
    author: selecAuthortInput.value || 'Lorem'
   }

   if (obj.title && obj.body && obj.author) {
    axios.post('http://localhost:8080/blogs',obj).then(()=>{
    window.location='home.html'
   })
   }
   else {
    alert('The fields can not be empty!')
   }
})