let id = new URLSearchParams(window.location.search).get('id')
console.log(id);

let form = document.querySelector("form");
let titleInput = document.querySelector("#title-input");
let bodyTextArea = document.querySelector("#body-input");
let selecAuthortInput = document.querySelector("#author-input");
let submitBtn = document.querySelector('.btn-danger')
let author;

selecAuthortInput.addEventListener('change',function () {
    author=e.target.value
})
axios(`http://localhost:8080/blogs/${id}`).then((res)=>{
    myData=res.data
    console.log(myData);
    titleInput.value=myData.title
    bodyTextArea.value=myData.body
    selecAuthortInput.value=myData.author
})

form.addEventListener("submit", function (e) {
  e.preventDefault();
  author = e.target.value;

  let obj = {
    title: titleInput.value,
    body: bodyTextArea.value,
    author: selecAuthortInput.value || "Lorem",
  };
    axios.patch(`http://localhost:8080/blogs/${id}`,obj)
    window.location='home.html'
  });